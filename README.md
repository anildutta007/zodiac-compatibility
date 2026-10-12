# ♈ ZodiacMatch AI — Sun Sign & Couple Compatibility Matrix

An authentic astrological compatibility web application built for married couples and singles, featuring multi-parameter evaluation, Western Tropical Sun Sign derivation from Date of Birth (DOB), and an intuitive **Green - Amber - Red** color spectrum with percentage scoring.

Developed by **Anil Dutta**.

---

## ✨ Key Features & User Modes

### 1. 💑 Married & Couples Compatibility ("Couple Harmony Check")
* **DOB to Sun Sign Derivation:** Enter the Date of Birth for both partners. The astrological engine computes the exact Sun Sign, symbol, celestial dates, element, modality, and ruling planet.
* **Overall Compatibility Gauge:** Animated radial circular meter displaying overall score (0% – 100%).
* **Color Spectrum Shading:**
  * 🟢 **Green (75% – 100%) — Harmonious Union:** High compatibility, shared elemental resonance, or sextile synergy.
  * 🟡 **Amber (50% – 74%) — Dynamic Potential:** Moderate compatibility, exciting attraction with creative growth opportunities.
  * 🔴 **Red (< 50%) — Growth Challenge:** High karmic friction or square/quincunx aspects requiring conscious understanding and diplomacy.
* **6 Deep Compatibility Parameters:**
  1. *Emotional Connection & Empathy* (Vulnerability, intuitive understanding, emotional safety)
  2. *Intellectual & Communication* (Conversational flow, mental stimulation, debates)
  3. *Romance, Passion & Chemistry* (Physical attraction, affection, romantic spark)
  4. *Trust, Loyalty & Shared Values* (Integrity, fidelity, mutual respect)
  5. *Long-term Stability & Marriage Harmony* (Domestic life, finances, enduring longevity)
  6. *Conflict Resolution & Lifestyle Harmony* (Daily habits, stress handling, compromise)
* **Visual Spider/Radar Chart:** Interactive 6-axis geometric representation of relationship balance.
* **Cosmic Synergy Breakdown:**
  * Elemental Chemistry (Fire+Fire, Fire+Air, Earth+Water, Water+Fire, etc.)
  * Modalities interplay (Cardinal, Fixed, Mutable)
  * Married life strengths & potential friction points
  * Practical keys to lifelong marital success
  * Famous celebrity couples sharing the exact pairing (e.g. William & Kate, Ryan Reynolds & Blake Lively, Barack & Michelle Obama)
* **Print & Share:** Generate a formatted printable report or copy analysis to clipboard with one click.

---

### 2. 💫 Singles & Unmarried Compatibility ("Find Your Match")
* **Input:** Enter your Date of Birth, gender, and preferred partner gender.
* **Live Sign Profile:** Immediate detection of your Sun Sign with core traits, love language, and personality overview.
* **Top 3 Cosmic Soulmates:** Highlighting your top 3 highest-percentage matches.
* **Full 12-Sign Gallery:**
  * All 12 zodiac signs ranked by compatibility percentage.
  * Prominent **Green**, **Amber**, or **Red** color badges and glowing borders.
  * 5 mini-meter progress bars displaying individual parameter scores at a glance.
  * Filter controls: View All, Green (High), Amber (Moderate), or Red (Challenging).
  * Sort controls: Highest % First, Lowest % First, Zodiac Order (Aries to Pisces).
* **Deep-Dive Compatibility Modal:** Click any sign card to inspect detailed chemistry, dating advice, and marriage outlook tailored to your gender.

---

### 3. 🔮 Zodiac Encyclopedia (12 Signs Guide)
* Explore detailed archetypes, ruling planets, elements, and love/marriage behaviors for all 12 astrological signs.

---

## 🛠️ Technology Stack

* **Frontend:** Modern HTML5, Tailwind CSS, Lucide Icons, Canvas Confetti.
* **Visualizations:** Chart.js 6-axis Radar Chart and dynamic SVG circular progress dials.
* **Astrological Engine:** Pure vanilla JavaScript matrix engine (`zodiac-data.js`) covering all 144 sign pair permutations and edge-case boundary verification.
* **Local Backend Server:** Python standard library HTTP server (`server.py`) with automatic free port detection and browser launch.
* **Zero Dependencies:** Runs out of the box with standard Python / modern browser without requiring `npm install` or external bundlers.

---

## 🚀 How to Launch & Run Locally

### Option 1: Root Launcher (Recommended)
Double-click `run_zodiac_compatibility.bat` located in the root `c:\Anil Google Projects` directory:
```cmd
run_zodiac_compatibility.bat
```

### Option 2: Project Folder Launcher
Navigate to `zodiac-compatibility` and double-click `run.bat`:
```cmd
cd "c:\Anil Google Projects\zodiac-compatibility"
run.bat
```

### Option 3: Direct Python Server
```cmd
python server.py
```
The server will automatically bind to an available port (starting from `8085`) and open your default browser.

### Option 4: Direct Browser View
Open `index.html` directly in any web browser.

---

## 🧪 Automated Test Verification

Run the automated verification suite to validate all 12 signs, 25 date boundaries (including leap years), all 144 sign combinations, 6 parameters, and color thresholds:

```cmd
node test_zodiac.js
```

**Results:**
- ✅ 12 Zodiac Signs verified
- ✅ 25 Date Boundaries tested (e.g., Mar 21 Aries, Feb 29 Leap Year Pisces)
- ✅ 144 Sign Pair combinations validated
- ✅ All 6 parameters verified within 0–100 range
- ✅ Color grading thresholds verified (Green >= 75%, Amber 50-74%, Red < 50%)
