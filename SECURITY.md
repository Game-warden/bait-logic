# Security Policy & Threat Model

## Project Goals
BaitLogic is a stateless, client-side encryption utility designed for "Security at Rest" with a focus on mitigating local shoulder-surfing through a decoy UI.

## Technical Implementation
- **Encryption:** AES-GCM 256-bit (authenticated encryption).
- **Key Derivation:** PBKDF2 with 100,000 iterations and HMAC-SHA256.
- **Randomness:** Uses `window.crypto.getRandomValues()` for salts and IVs.
- **Architecture:** Zero-dependency, single-file HTML/JS. No data is ever transmitted to a server.

## Trusted Boundary (What we protect against)
- **Passive Local Observers:** The "Decoy" UI (e.g., Fishing Log) masks the nature of the data.
- **Data-at-Rest Discovery:** Encrypted snippets are stored as authenticated ciphertext.
- **Server-Side Compromise:** Since the tool is stateless and can be run locally, the host server cannot see or intercept keys.

## Residual Risks (What we do NOT protect against)
- **Compromised Host:** If the OS has a keylogger or the browser is compromised via malicious extensions, the plaintext password can be intercepted.
- **Memory Scraping:** While the app is open, the derived key exists in the browser's JS memory.
- **Physical Coercion:** The decoy UI is a deterrent, not a bypass for physical security threats.

## Vulnerability Reporting
Please open a GitHub Issue for any identified implementation flaws. We prioritize fixes for cryptographic errors (e.g., IV reuse or weak entropy).
