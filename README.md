# 🎣 Nibble v1.9.0
### Project Status: Active / Stable (Trout Stream Build)

## 📡 Overview
**Nibble** is a minimalist, deterministic data-encoding utility designed for field research and marine-themed hash-summing experiments. Version 1.9.0 focuses on **Cognitive Camouflage**, utilizing high-end outdoor utility aesthetics to ensure the tool remains unassuming in diverse operational environments.

By mapping temporal variables to marine species and utilizing CSS-based heuristic masking, Nibble provides a secure channel for data verification that is visually indistinguishable from a hobbyist fishing application.

---
## Known Limitations & Field Resiliency

As an experimental utility, **Nibble** prioritizes lightweight manual use over high-compute security. Users should be aware of the following:

* **Temporal Boundaries:** Salt windows rotate precisely at `UTC % 2 == 0`. Users operating near the turn of an even hour should ensure their device clock is synchronized to prevent derivation errors.
* **Integrity Checks:** The 2-digit RDS (Recursive Digit Sum) is a "human-readable" checksum. It is designed to catch 99% of accidental data corruption during manual transcription but is not resistant to a dedicated pre-image attack.
* **Camouflage Layer:** The "Bait Guide" UI is a social engineering layer. It does not provide filesystem-level encryption; it is designed to reduce the "interest-profile" of the data during a visual audit.

* 
## 🛠️ Core Features (v1.9.0)
* **Plausible UI:** Optimized "Trout Stream" palette (Forest Green/Cream) for maximum environmental blending.
* **Bait Profile Logic:** Secure alphanumeric masking of shared "hooks" to prevent shoulder-surfing and automated credential capture.
* **Temporal Sync:** Dynamic salt rotation derived from a 12-species marine cycle, updating every 120 minutes.
* **Integrity Shield:** 2-digit RDS ($sum \pmod{100}$) validation providing a 99% detection rate for data corruption or tampering.
* **Credential Evasion:** Advanced "Ghost Input" logic to bypass 1Password and other browser extension heuristics.

## Future Roadmap
* While Nibble v1.9 is hard-coded with a Marine/Bait theme for visual camouflage in maritime environments, the underlying 'Shaping Engine' is theme-agnostic.
* Future versions will support 'Skins' for Bird-Watching (ornithological data) and Amateur Radio (signal logs) to ensure the app matches the user's specific
* environmental noise.
*
---

## 📲 Deployment Protocol (Mobile)
To ensure the terminal runs as a standalone utility without browser footprint:

1. Open your deployment URL in **Safari** on iOS.
2. Tap the **Share** icon (square with up arrow).
3. Select **"Add to Home Screen."**
4. Rename the utility to **"Bait Guide"** or **"Tackle Log"** for local obfuscation.
5. Launch the app from your home screen. This removes the URL bar and browser history tracking.

---

## 🌊 Operational Procedure

### 1. Synchronizing the "Live Bait"
The terminal logic rotates every 2 hours based on UTC time. Refer to the schedule below to verify synchronization.

| UTC Window | Active Species | Buffer/Next |
| :--- | :--- | :--- |
| **00:00 - 02:00** | 🐟 Fish | 🐡 Puffer |
| **02:00 - 04:00** | 🐡 Puffer | 🐠 Tropical |
| **04:00 - 06:00** | 🐠 Tropical | 🦐 Shrimp |
| **06:00 - 08:00** | 🦐 Shrimp | 🐙 Octopus |
| **08:00 - 10:00** | 🐙 Octopus | 🦑 Squid |
| **10:00 - 12:00** | 🦑 Squid | 🦀 Crab |
| **12:00 - 14:00** | 🦀 Crab | 🐚 Shell |
| **14:00 - 16:00** | 🐚 Shell | 🐬 Dolphin |
| **16:00 - 18:00** | 🐬 Dolphin | 🐳 Whale |
| **18:00 - 20:00** | 🐳 Whale | 🐋 Humpback |
| **20:00 - 22:00** | 🐋 Humpback | 🦈 Shark |
| **22:00 - 00:00** | 🦈 Shark | 🐟 Fish |



### 2. The "Cast & Catch" Sequence
**To Send Data (Cast):**
1. Set the toggle to **Cast**.
2. Enter the shared secret into the **Bait profile** field.
3. Input your message into the **Data stream**.
4. Tap **Run nibble logic**.
5. Use **Copy to clipboard** and transmit the resulting code.

**To Receive Data (Catch):**
1. Set the toggle to **Catch**.
2. Ensure the identical **Bait profile** is entered.
3. Paste the received code into the **Data stream**.
4. Tap **Run nibble logic** to reveal the original data.

### 🛡️ Integrity Validation
The first two characters of any generated code represent the **Verification Nibble**. 
* If the terminal displays **"SIGNAL INTERFERENCE: INTEGRITY FAILURE,"** the data was corrupted in transit, or there is a mismatch in the Bait profile or Species window. 
* **Protocol:** Do not attempt to guess the data. Request a "Re-Cast."

---

## 🔍 Development & Audit History

### v1.9.0: The "Cognitive Camouflage" Update
* **Visual Pivot:** Replaced "Matrix" aesthetics with muted earth tones to reduce digital footprint.
* **Architecture:** Implemented "Floating Card" layout for modern mobile-SaaS look.
* **Heuristic Hardening:** Mitigated browser extension interference via hidden honeypot fields.

### v1.8.2: Operational Hardening
* **Silent-Sync:** Moved from scalar time-indexing to species-based mapping for superior deniability.
* **RDS Upgrade:** Transitioned to 2-digit Recursive Digit Sum logic, increasing collision resistance to 1:100.
* **Field Visibility:** Adjusted contrast ratios for use in direct sunlight.

### v1.7.7: Initial Tactical Release
* Established core "Cast & Catch" substitution engine.
* Developed "Add to Home Screen" PWA deployment model.
