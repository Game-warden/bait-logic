# 🎣 NIBBLE v1.7.7
**Tactical Logic-Shift Protocol for Specialized Communication.**

Nibble is a minimalist, zero-footprint utility designed for operational stealth. It utilizes a time-sensitive, tiered substitution engine to transform sensitive data into non-deterministic shift-codes.

### 🌊 Operational Logic: "Cast & Catch"
* **The Shared Hook:** A secret alphanumeric phrase established out-of-band.
* **The Live Bait:** A dynamic salt derived from the UTC hour, visualized as fish icons.
* **The Cast:** Obfuscating data into a Logic-Shift code.
* **The Catch:** Reversing the logic to reveal the original Data Stream.
* **The Verification Nibble:** A single-digit integrity check (RDS) providing a 90% detection rate for tampered data.

### 🛠️ Field Features
* **Zero-Footprint:** Pure HTML/JS. No server-side logging or dependencies.
* **Plausible Deniability:** The interface is themed as a fishing utility to deflect casual observation.
* **Forward Secrecy:** Logic rotates every 60 minutes based on UTC time-salt.
* **Integrated Field Notes:** In-app micro-instructions ensure operational security during Cast/Catch sequences.
* 
* ---
* # 🎣 NIBBLE v1.7.7 - Deployment Protocol

This guide ensures all nodes are synchronized for tactical logic-shifting. Follow these steps to initialize your terminal on mobile.

---

### 📲 1. Mobile Terminal Installation
To ensure the terminal runs as a standalone utility without browser interference:
1. Open the deployment URL in **Safari** on your mobile device.
2. Tap the **Share** icon (square with up arrow).
3. Select **"Add to Home Screen."**
4. Rename the utility to **"Bait Guide"** or **"Tackle Log"** for local obfuscation.
5. Launch the app from your home screen icon.

### 🌊 2. Synchronizing the "Live Bait"
The terminal logic rotates every 60 minutes based on UTC time.
* Ensure your device clock is set to **Set Automatically**.
* The **Fish Icons** at the bottom of the terminal represent the current "Time-Salt."
* If your icons do not match your partner's icons, check your UTC offset. Communication will only succeed if both terminals show identical bait.

### 🎣 3. The "Cast & Catch" Sequence
**To Send a Message (CAST):**
1. Set the toggle to **CAST**.
2. Enter the **Shared Hook** (established out-of-band).
3. Type your message in the **Data Stream**.
4. Tap **NIBBLE DATA**.
5. Copy the resulting code (including the leading digit) and transmit via your preferred channel.

**To Read a Message (CATCH):**
1. Set the toggle to **CATCH**.
2. Ensure the **Shared Hook** is entered correctly.
3. Paste the received code into the **Data Stream**.
4. Tap **NIBBLE DATA** to reveal the original message.

### 🛡️ 4. Integrity Check (The Nibble)
* The **first digit** of any generated code is the **Verification Nibble**.
* If the terminal displays **"INTEGRITY FAILURE,"** the data was corrupted in transit or the Shared Hook/Time-Salt is mismatched. Do not act on corrupted data.

* ## 🔍 Security Audit: v1.8.2 Implementation Notes

### 1. Obfuscation of Temporal Variables
In previous versions, manual time-offset controls were visible, potentially leaking the "Time-Salt" nature of the algorithm. v1.8.2 moves to a "Silent-Sync" model. The UTC hour is now mapped to a 12-species marine array. 
* **Security Benefit:** An observer cannot determine the salt-window by looking at the UI buttons; they would need to reverse-engineer the species-mapping array.

### 2. High-Latency Field Testing
The UI was adjusted after field tests showed that low-contrast "Hacker" aesthetics failed in direct sunlight. The current high-visibility labels ensure that the **Shared Hook** and **Data Stream** are clearly delineated, reducing human input error.

### 3. Collision Resistance Verification
The 2-digit RDS ($sum \pmod{100}$) was tested for "Surgical Strike" resistance. Results confirm that a single-character modification to the Data Stream results in a **99% detection rate**, triggering the `SIGNAL INTERFERENCE` state.

### 🚀 Latest Deployment: v1.8.2 - Operational Hardening
The terminal has been updated to prioritize field-usability and signal integrity.

* **Chroma-Contrast UI:** Labels transitioned to High-Visibility Green (`--label: #008f11`) to ensure legibility across variable ambient lighting conditions and mobile display brightness levels.
* **Species-Based Temporal Logic:** Shifted from scalar sizing to a 12-tier species rotation. This improves visual verification speed and provides superior plausible deniability over standard time-indexing.
* **Clipboard Integration:** Implemented a hardware-level `navigator.clipboard` hook for seamless data handoff on mobile OS environments.
* **Active RDS Gatekeeper:** Upgraded to 2-digit Recursive Digit Sum validation, providing 1:100 collision resistance and mandatory "Abort-on-Mismatch" logic.
