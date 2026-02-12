/**
 * BaitLogic v2.0-Alpha
 * Mitigation: Temporal Side-Channel (Branch-Free Implementation)
 * Ref: u/pint (r/cryptography)
 */

const PBKDF2_ITERATIONS = 100000;
const SALT_SIZE = 16;
const IV_SIZE = 12;

// --- CORE SECURITY HELPERS ---

function constantTimeSelect(flag, successBuffer, failureBuffer) {
  const result = new Uint8Array(successBuffer.length);
  const mask = -(flag & 1) & 0xFF;
  for (let i = 0; i < result.length; i++) {
    result[i] = (successBuffer[i] & mask) | (failureBuffer[i] & ~mask);
  }
  return result;
}

function getSaltForTime(time) {
  const species = ["Fish", "Puffer", "Tropical", "Shrimp", "Octopus", "Squid", "Crab", "Shell", "Dolphin", "Whale", "Humpback", "Shark"];
  const h = time.getUTCHours() % 12;
  const b = Math.floor(time.getUTCMinutes() / 5);
  return species[h] + ((h * 100) + b).toString();
}

async function deriveKey(password, saltStr, saltBytes) {
  const encoder = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw", encoder.encode(password + saltStr), "PBKDF2", false, ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: saltBytes, iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
    baseKey, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
  );
}

// --- PRIMARY API WRAPPERS ---

async function encryptWithLogic(plainText, password) {
  const encoder = new TextEncoder();
  const now = new Date();
  const saltStr = getSaltForTime(now);
  const saltBytes = crypto.getRandomValues(new Uint8Array(SALT_SIZE));
  const iv = crypto.getRandomValues(new Uint8Array(IV_SIZE));

  const key = await deriveKey(password, saltStr, saltBytes);
  
  const padLen = Math.floor(Math.random() * 32);
  const padding = Array.from({length: padLen}, () => String.fromCharCode(Math.floor(Math.random() * 94) + 33)).join('');
  const paddedInput = padLen.toString().padStart(4, '0') + padding + plainText;

  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoder.encode(paddedInput));
  
  const combined = new Uint8Array(SALT_SIZE + IV_SIZE + ciphertext.byteLength);
  combined.set(saltBytes);
  combined.set(iv, SALT_SIZE);
  combined.set(new Uint8Array(ciphertext), SALT_SIZE + IV_SIZE);
  
  return btoa(String.fromCharCode(...combined));
}

async function decryptWithLogic(b64Ciphertext, password) {
  const now = new Date();
  const prev = new Date(now.getTime() - 5 * 60000); 
  
  const combined = Uint8Array.from(atob(b64Ciphertext), c => c.charCodeAt(0));
  const saltBytes = combined.slice(0, SALT_SIZE);
  const iv = combined.slice(SALT_SIZE, SALT_SIZE + IV_SIZE);
  const ciphertext = combined.slice(SALT_SIZE + IV_SIZE);

  const keyCurrent = await deriveKey(password, getSaltForTime(now), saltBytes);
  const keyPrev = await deriveKey(password, getSaltForTime(prev), saltBytes);

  let bufferCurrent = new Uint8Array(ciphertext.length - 16);
  let bufferPrev = new Uint8Array(ciphertext.length - 16);
  let successFlag = 0;

  try {
    const dec = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, keyCurrent, ciphertext);
    bufferCurrent.set(new Uint8Array(dec));
    successFlag = 1;
  } catch (e) {}

  try {
    const dec = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, keyPrev, ciphertext);
    bufferPrev.set(new Uint8Array(dec));
  } catch (e) {}

  return constantTimeSelect(successFlag, bufferCurrent, bufferPrev);
}
