# BaitLogic: Standard Operating Procedure (v1.9.2)

### 1. Operational Theory
BaitLogic functions by wrapping sensitive strings in an obfuscated "Stream." The goal is not just encryption, but **Cognitive Camouflage**. To a casual observer, the user is simply logging technical field data (Fishing/Tackle logs).

### 2. Terminology
* **Bait Profile:** The entropy seed/shared key used to generate the encryption layer.
* **The Lure:** The specific UI skin (currently: Angler/Fishing) used to mask activity.
* **The Stream:** The resulting encoded data that appears as a mundane log entry.
* **Species Window:** The 120-minute UTC rotation that determines the active salt.

### 3. Field Deployment
For maximum security, BaitLogic should be deployed as a PWA (Progressive Web App). By using the "Add to Home Screen" function on mobile devices, the operator removes the browser URL bar and prevents the "Stream" from appearing in standard browser history.

### 4. Integrity Protocols
BaitLogic uses a 2-digit Recursive Digit Sum (RDS) as a "Verification Nibble." 
* **Red Alert:** If "SIGNAL INTERFERENCE" is displayed, the data is compromised. 
* **Action:** Purge the current stream and re-sync with the sender using a fresh Bait Profile.
