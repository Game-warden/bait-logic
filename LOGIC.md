# 🌊 BaitLogic v2.0: Logic Log

## 1. Sliding Window Protocol
To ensure human usability and mitigate "edge-of-block" failures, the system uses an overlapping block approach.
- **Cast:** Uses the current UTC 5-minute block salt.
- **Catch:** Attempts decryption with the current block. If the AES-GCM tag check fails, it automatically retries with the previous 5-minute block salt. This creates a 10-minute maximum validity window.

## 2. Temporal Entropy
The UTC cycle is divided into 5-minute blocks. The salt is derived from:
`(Species_Index * 100) + Math.floor(UTC_Minute / 5)`.
This provides **144 unique temporal salts** per 12-hour cycle.

## 3. Padding Structure
`[4-Digit Length Header][Random ASCII Noise][Original Message]`
This structure ensures that ciphertext length is non-deterministic, defeating length-based traffic analysis.

## 4. Benchmarking
BaitLogic meets or exceeds the security standards of stateless browser utilities like CyberChef by adding:
- **Credential Manager Evasion** (Blocking 1P/LP/BW).
- **Automated Forensic Scrubbing** (Dual-buffer wipe on copy).
- **Time-Locked Temporal Salts** (Sliding window logic).
