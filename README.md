# 🎣 BaitLogic (v1.9.2)
### **The Stateless Obfuscation Engine for Field Operations**

---

> **Identity Update:** Formerly known as 'Nibble.' Rebranded to **BaitLogic** to align with core repository naming and to distinguish this project from unrelated commercial mobile applications.

---

### 🛡️ LATEST UPDATE: v1.9.2 (Patch Notes)
* **Full Rebrand:** Transitioned all internal logic and documentation to the **BaitLogic** core.
* **Engine vs. Lure Architecture:** Refactored documentation to distinguish between the encryption engine and the UI skins.
* **Community Recognition:** v1.9.1/v1.9.2 updates were released in direct response to a technical audit from the **r/selfhosted** community. Special thanks to the auditors there for refining our field terminology.

---

### 🧠 Design Rationale (The 'Why')

* **Why No Database?** Databases leave forensic trails (logs, swap files, metadata). BaitLogic is **Stateless**. Once the browser tab is closed, the "vault" effectively ceases to exist in local memory.
* **Why the 'Boring' UI?** This is **Cognitive Camouflage.** In field scenarios, a "security app" icon is a red flag. We hide sensitive operations behind the guise of mundane hobbyist data logging.
* **Why One HTML File?** **Zero Dependencies.** No `npm install`, no Docker containers, and no server-side vulnerabilities. It leverages the browser’s native **Web Crypto API** for hardware-level security without a digital footprint.

---

## ⚙️ The Engine vs. The Lure
BaitLogic is designed as a modular framework. While the current build utilizes the **"Angler"** skin, the underlying engine is UI-agnostic.

| Build Style | UI Theme (The "Lure") | Ideal Environment |
| :--- | :--- | :--- |
| **Angler (Current)** | Fishing/Tackle Logs | Rural, Maritime, or Outdoor Recreation. |
| **Ornithology (WIP)** | Bird Migration Stats | Research or Scientific Field Work. |
| **Inventory (WIP)** | Warehouse SKU/Part Audits | Industrial or Urban Environments. |

---

## 📡 Operational Overview
**BaitLogic** is a minimalist, deterministic data-encoding utility. It maps temporal variables to specific "Species" and utilizes CSS-based heuristic masking to ensure data entry is visually indistinguishable from a hobbyist fishing log.

---

## 🛠️ Core Features
* **Plausible UI:** "Trout Stream" palette (Forest Green/Cream) for maximum environmental blending.
* **Bait Profile Logic:** Secure alphanumeric masking of shared keys to prevent shoulder-surfing.
* **Temporal Sync:** Dynamic salt rotation derived from a 12-species marine cycle, updating every 120 minutes.
* **Integrity Shield:** 2-digit RDS ($sum \pmod{100}$) validation providing a 99% detection rate for data corruption.
* **Credential Evasion:** Advanced "Ghost Input" logic to bypass browser extension heuristics (1Password, Bitwarden).

---

## 📲 Deployment Protocol (Mobile)
To run as a standalone utility without a browser footprint:
1.  Open your deployment URL in **Safari** (iOS) or **Chrome** (Android).
2.  Select **"Add to Home Screen."**
3.  Rename the utility to **"Bait Guide"** or **"Tackle Log"**.
4.  Launch from the home screen to remove the URL bar and browser history tracking.

---

## 🌊 Operational Procedure

### 1. Synchronizing the "Live Bait"
The terminal logic rotates every 2 hours based on UTC time.

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
* **To Send (Cast):** Set toggle to **Cast** -> Enter **Bait Profile** (Secret) -> Enter **Data Stream** -> **Run Logic**.
* **To Receive (Catch):** Set toggle to **Catch** -> Match **Bait Profile** -> Paste Code -> **Run Logic**.

---

## 🛡️ Integrity Validation
The first two characters of any generated code represent the **Verification Nibble**. 
* If the terminal displays **"SIGNAL INTERFERENCE: INTEGRITY FAILURE,"** the data was corrupted in transit or there is a mismatch in the Bait profile or Species window. 
* **Protocol:** Request a "Re-Cast."

---

## 🔍 Audit & Version History

### v1.9.2: The "BaitLogic" Pivot
* Scrubbed "Nibble" branding to eliminate name-collision with commercial apps.
* Standardized "Engine" terminology for future skin support.

### v1.9.0: Cognitive Camouflage
* Replaced "Matrix/Cyber" aesthetics with muted earth tones.
* Implemented "Floating Card" layout for modern mobile-SaaS mimicry.

### v1.8.2: Operational Hardening
* **Silent-Sync:** Moved from scalar time-indexing to species-based mapping.
* **Field Visibility:** Adjusted contrast ratios for use in direct sunlight.

---

### 🧠 Origins & "The Nibble"
This project grew out of a manual obfuscation experiment I nicknamed "The Nibble"—a system of adding numbers two at a time to hide data in plain sight. 
My friends thought I was nuts because the manual math was too slow.  I used AI as a "junior partner" to help me port that original "Nibble" logic into the Web Crypto API. 
This app is the result of a "weird" human idea meeting modern browser encryption.
