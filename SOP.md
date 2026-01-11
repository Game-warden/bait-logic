# 📖 NIBBLE Standard Operating Procedure (v1.8.4)

This document outlines the protocol for data transmission and session hygiene when utilizing the NIBBLE terminal.

## 1. Session Initialization
* **Secure Environment:** Ensure no "shoulder-surfing" or active screen-recording software is present.
* **The S-HOOK ID:** Use a shared, high-entropy alphanumeric string. Never transmit this ID over the same channel used for the Data Stream.
* **Sync Verification:** Confirm the current "Bait Icons" match between the sender (CAST) and receiver (CATCH).

## 2. Temporal Sync & Windowing
* **The 2-Hour Rule:** Each species remains active for a 120-minute window.
* **Transition Buffers:** If icons rotate immediately after a CAST, the receiver must temporarily adjust their local system clock back by 60 minutes to re-sync with the previous species logic.
* **Species Preview:** The secondary icon (right-side) indicates the upcoming salt. If the secondary icon is the intended target, wait for the rotation.

## 3. Data Integrity & Transmission
* **Integrity Check:** If the terminal returns `SIGNAL INTERFERENCE`, the packet is corrupt or the S-HOOK/Time-Salt is mismatched. 
* **Protocol:** Upon an Integrity Failure, the receiver must request a "RE-CAST" rather than attempting to guess the data.
* **Encoding:** Use the [COPY DATA] button to avoid trailing space errors that trigger integrity alarms.

## 4. Operational Security (OPSEC)
* **Incognito Execution:** Always run the terminal in a Private/Incognito browser tab.
* **Cache Management:** Upon session completion, close the tab and clear browser cache/history to remove the Data Stream from local memory.
* **Plausible Deniability:** If questioned, the tool is a "deterministic math experiment for marine-themed hash-summing."

## Using on your iPhone
* ** How to "Add to Home Screen" feature 
* ** Open your NIBBLE URL in Safari.
* ** Tap the Share button (the square with the arrow).
* ** Select "Add to Home Screen."
* ** The Benefit: It now opens in a dedicated window without the Safari address bar or navigation buttons. In standard Safari, every time you refresh NIBBLE, it
* ** logs a visit in your history.  The Home Screen Fix: Standalone apps operate in their own isolated session. Opening the Home Screen icon does not add a new
* ** entry to your Safari "History" or "Frequently Visited" list. Your main browser remains "clean" of the tool's footprint.

* **Step 3 (Bait Profile):** Enter the shared Secret Hook into the 'Bait profile' field. The dots are hidden to protect your unique setup.
* **Step 6 (Integrity):** If 'SIGNAL INTERFERENCE' appears, check that your Bait profile and the species icons match the sender.
