# 🛡️ Security Policy (v2.0)

## 1. Architecture
BaitLogic utilizes the **Web Crypto API** for hardware-optimized, protected memory space operations.
- **Encryption:** AES-GCM 256-bit (Authenticated Encryption).
- **KDF:** PBKDF2-HMAC-SHA256 with 100,000 rounds.
- **Nonces:** 96-bit CSPRNG IVs (12 bytes) generated per operation.

## 2. Threat Matrix
- **Shoulder-Surfing:** Mitigated by the Hobbyist UI (Angler Skin) which visually disguises the utility as a fishing log.
- **Credential Leakage:** Multi-layer evasion for **1Password**, **LastPass**, and **Bitwarden** via `data-1p-ignore`, `data-lpignore`, `data-bwignore`, and hidden decoy input fields.
- **Tampering:** Prevented by AES-GCM Authenticated Tags; any modification to ciphertext or invalid keys trigger an integrity failure.
- **Forensics:** Mitigated by Statelessness and **Dual-Scrubbing** (auto-wipe of RAM buffers on copy).
- **Clock Drift:** A 5-minute sliding temporal window allows for transmission latency while maintaining time-locked security.

## 3. Residual Risks
- **Endpoint Compromise:** Malicious extensions or OS-level keyloggers bypass all browser-based encryption.
- **Memory Forensics:** Plaintext and keys reside in volatile RAM until the tab is closed or the "Purge" button is used.
- **Hostile Environments:** Users are strongly advised to operate in **Incognito/Private mode** to ensure a clean environment.
