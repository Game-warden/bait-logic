# 🎣 BaitLogic (v2.0-Alpha)
### **The Stateless Obfuscation Engine for Field Operations**

---

### 🛡️ LATEST UPDATE: v2.0-Alpha (Operational Hardening)
* **Native Cryptography:** Migrated to **Web Crypto API (AES-GCM 256)** for authenticated encryption.
* **Sliding Window:** 5-minute overlapping blocks eliminate edge-of-block decryption failures.
* **Dual-Scrub OPSEC:** Automatic scrubbing of both Input and Output buffers upon successful clipboard copy.
* **Credential Evasion:** Multi-layer evasion for **1Password**, **LastPass**, and **Bitwarden**.
* **Live UTC Sync:** Integrated dashboard for real-time temporal coordination.

---

## 🛡️ Security Audit
| Resource | Mitigation Logic |
| :--- | :--- |
| **KDF** | PBKDF2-HMAC-SHA256 (100,000 iterations) |
| **Cipher** | AES-GCM 256-bit (Authenticated Encryption) |
| **Entropy** | 144-State Sliding Temporal Salt |
| **Forensics** | Automated RAM Buffer Scrubbing |

---

## 🌊 Operational Procedure
1. **Sync:** Observe the UTC Dashboard. Ensure both parties are operating within the same 5-minute block.
2. **Cast:** Enter "Bait Profile" key -> Paste Data -> Run Logic. 
3. **Secure:** Click "Copy." The system will automatically scrub the plaintext and ciphertext from the screen.
4. **Catch:** Enter "Bait Profile" key -> Paste Ciphertext -> Run Logic.
5. **Purge:** Use the "Purge Session Memory" button or close the tab to clear the browser heap.

---

### 🧠 Project Philosophy
BaitLogic leverages "Cognitive Camouflage." It appears as a hobbyist fishing utility to the casual observer, but serves as a high-security, stateless encryption terminal for the informed operator.
