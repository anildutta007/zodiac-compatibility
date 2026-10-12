# ♈ ZodiacMatch AI — Sun Sign & Couple Compatibility Matrix
### *Calibrated with Linda Goodman's 'Love Signs' (1978) & 'Sun Signs' (1968)*

An authentic astrological compatibility web application built for married couples and singles, featuring multi-parameter evaluation, Western Tropical Sun Sign derivation from Date of Birth (DOB), an intuitive **Green - Amber - Red** color spectrum, and deep integration of **Linda Goodman's Seven Karmic Sun Sign Vibrations**.

Developed by **Anil Dutta**.

---

## 📖 The Linda Goodman Astrological Framework

This application integrates the definitive teachings of legendary astrologer **Linda Goodman** (New York Times bestselling author of *Sun Signs* and *Love Signs*):

### Linda Goodman's Seven Karmic Sun Sign Vibrations:
1. **1-1 Vibration (Same Sign / Conjunction 0°):** *The Cosmic Mirror.* Instant empathy, telepathic recognition of mutual flaws and virtues.
2. **2-12 Vibration (Adjacent Signs / Semisextile 30°):** *The Karmic Teacher & Pupil.* Spiritual progression across grades; mutual tolerance, gentle tutoring, and secret admiration.
3. **3-11 Vibration (Sextile 60°):** *Karmic Friends & Sympathetic Lovers.* Enduring camaraderie, easy forgiveness, and lifelong loyalty.
4. **4-10 Vibration (Square 90°):** *The Karmic Challenge & Crucible.* Same modality, conflicting elements; passionate friction that tempers diamond-strength devotion when ego yields to love.
5. **5-9 Vibration (Trine 120°):** *The Divine Cosmic Blessing.* Same sacred element; effortless soul recognition, natural telepathy, and harmonious flow.
6. **6-8 Vibration (Quincunx 150°):** *Karmic Mystery & Devoted Service.* Enigmatic fascination and hypnotic magnetism; calls for selfless sacrifice and unconditional devotion.
7. **7-7 Vibration (Opposition 180°):** *Polar Magnetism & Cosmic Complements.* Two halves of a single soul; high romantic voltage, yin-and-yang wholeness.

---

## ✨ Key Features & User Modes

### 1. 💑 Married & Couples Compatibility ("Couple Harmony Check")
* **DOB to Sun Sign Derivation:** Automatically derives Sun Sign, element, modality, and ruling planet for both partners.
* **Overall Compatibility Gauge:** Animated radial circular meter displaying overall score (0% – 100%).
* **Color Spectrum Shading:**
  * 🟢 **Green (75% – 100%) — Harmonious Union:** High compatibility, shared elemental resonance, or sextile synergy.
  * 🟡 **Amber (50% – 74%) — Dynamic Potential:** Moderate compatibility, exciting attraction with creative growth opportunities.
  * 🔴 **Red (< 50%) — Growth Challenge:** High karmic friction or square/quincunx aspects requiring conscious understanding.
* **6 Deep Compatibility Parameters:**
  1. *Emotional Connection & Empathy* (Vulnerability, intuitive understanding, emotional safety)
  2. *Intellectual & Communication* (Conversational flow, mental stimulation, debates)
  3. *Romance, Passion & Chemistry* (Physical attraction, affection, romantic spark)
  4. *Trust, Loyalty & Shared Values* (Integrity, fidelity, mutual respect)
  5. *Long-term Stability & Marriage Harmony* (Domestic life, finances, enduring longevity)
  6. *Conflict Resolution & Lifestyle Harmony* (Daily habits, stress handling, compromise)
* **Linda Goodman Lore Integration:**
  * Displays the exact **Linda Goodman Vibration Pattern** badge with click-to-open 7-vibrations guide.
  * Displays **Linda Goodman's Karmic Lesson** for each couple.
  * Features dedicated **Linda Goodman Love Signs Gender Dynamics** (e.g. *The Leo Woman & Sagittarius Man*).
* **Visual Radar Chart:** 6-axis geometric representation of relationship balance.
* **Print & Share:** Generate printable report or copy analysis to clipboard with one click.

---

### 2. 💫 Singles & Unmarried Compatibility ("Find Your Match")
* **Input:** Enter your Date of Birth, gender, and preferred partner gender.
* **Live Sign Profile:** Derives your Sun Sign with core traits, love language, and personality overview.
* **Top 3 Cosmic Soulmates:** Highlights your top 3 highest-percentage matches.
* **Full 12-Sign Gallery:**
  * All 12 zodiac signs ranked by compatibility percentage.
  * Prominent **Green**, **Amber**, or **Red** color badges and glowing borders.
  * Linda Goodman Vibration tags on each card (e.g. *5-9 Vibration*, *3-11 Vibration*).
  * 5 mini-meter progress bars displaying individual parameter scores at a glance.
  * Filter controls: View All, Green (High), Amber (Moderate), or Red (Challenging).
  * Sort controls: Highest % First, Lowest % First, Zodiac Order (Aries to Pisces).
* **Deep-Dive Compatibility Modal:** Click any sign card to inspect detailed chemistry, Linda Goodman's Karmic Lesson, and her *Secret Key to Winning Their Heart*.

---

### 3. 🔮 Zodiac Encyclopedia (12 Signs Guide)
* Explore detailed archetypes, ruling planets, elements, and love/marriage behaviors for all 12 signs.
* Includes Linda Goodman's descriptions for:
  * **The Male Archetype** in love
  * **The Female Archetype** in love
  * **The Secret Key to Winning Their Heart**

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

---

## 🧪 Automated Test Verification

Run the automated verification suite:

```cmd
node test_zodiac.js
```

**Results:**
- ✅ **Test 1:** Exactly 12 zodiac signs present
- ✅ **Test 2:** All 25 Zodiac Date Boundaries verified successfully (including leap years)
- ✅ **Test 3:** Exactly 144 sign pairs exist in database
- ✅ **Test 4:** All 144 pairs validated for 6 parameters (Emotional, Comm, Romance, Trust, Stability, Lifestyle)
- ✅ **Test 5:** Color shade categorization thresholds verified (Green >= 75%, Amber 50-74%, Red < 50%)
- ✅ **Test 6:** All 144 pairs verified for Linda Goodman's Seven Karmic Vibrations & Lessons
- ✅ **Test 7:** All 12 signs verified with Linda Goodman's Male, Female, and Secret Key lore
