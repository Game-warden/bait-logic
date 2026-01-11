# 📖 Nibble Standard Operating Procedure (v1.9.0)

This document outlines the protocol for data transmission, session hygiene, and terminal installation for the Nibble field utility.

---

## 1. Installation & Deployment (iOS)
To ensure zero-footprint operation and UI isolation, the terminal must be run as a standalone web app:
1. **Initialize:** Open the Nibble URL in Safari.
2. **Deploy:** Tap the **Share** icon and select **"Add to Home Screen."**
3. **Obfuscate:** Name the application "Bait Guide" or "Tackle Log."
4. **Benefit:** This prevents session history from appearing in Safari and removes the URL bar, enhancing plausible deniability during field use.

---

## 2. Session Initialization
* **Secure Environment:** Ensure no "shoulder-surfing" or active screen-recording software is present.
* **Bait Profile:** Use the established, high-entropy alphanumeric string. Never transmit this string over the same channel used for the Data stream.
* **Sync Verification:** Confirm the current **Species Icons** (at the bottom of the card) match between the sender (Cast) and receiver (Catch).

---

## 3. Temporal Sync & Windowing
* **The 120-Minute Rule:** Each species salt remains active for a 2-hour UTC window.
* **Transition Buffers:** If icons rotate immediately after a Cast, the receiver may need to temporarily adjust their device clock back by 60 minutes to re-sync with the previous species salt.
* **Species Preview:** The secondary icon (right-side) indicates the upcoming salt window. If the secondary icon is the intended target, wait for the rotation before initiating a Cast.

---

## 4. Data Integrity & Transmission
* **Execution:** Input data, ensure the **Bait profile** is correct, and tap **Run nibble logic**.
* **Encoding:** Always use the **[Copy to clipboard]** link to avoid trailing space errors or character corruption.
* **Integrity Check:** If the terminal returns `SIGNAL INTERFERENCE`, the packet is corrupt or the Bait profile/Species salt is mismatched.
* **Protocol:** Upon an Integrity Failure, the receiver must request a **"Re-Cast"** rather than attempting to guess or brute-force the data.

---

## 5. Operational Security (OPSEC)
* **Isolation:** Always launch Nibble from the Home Screen icon to ensure it runs in an isolated sandbox.
* **Session Termination:** Upon completion, swipe the app closed from the iOS App Switcher to clear active memory.
* **Plausible Deniability:** If questioned, the tool is a "deterministic field log for marine-themed hash-summing."

---

## 🛠 Step-by-Step Field Guide
1. **Open** the "Bait Guide" on your home screen.
2. **Verify** the Species Icons match your partner's.
3. **Enter** your secret key into the **Bait profile** field. (Dots are hidden to protect your unique setup).
4. **Input** message into the **Data stream**.
5. **Tap** "Run nibble logic" and transmit the resulting code.
