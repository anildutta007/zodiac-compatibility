/**
 * ZodiacMatch AI - Application Logic & Interactivity
 * Built for Anil Dutta's Zodiac Compatibility Platform
 */

// Application State
const state = {
  currentTab: 'couples',
  couples: {
    p1: { name: 'You', dob: '1992-08-14', gender: 'female', sign: null },
    p2: { name: 'Partner', dob: '1990-12-04', gender: 'male', sign: null },
    pairData: null,
    radarChart: null
  },
  singles: {
    name: '',
    dob: '1994-07-12',
    gender: 'female',
    seeking: 'male',
    sign: null,
    filter: 'all',
    sort: 'score_desc'
  }
};

// Parameter Descriptions for rich contextual explanations
const PARAM_DESCRIPTIONS = {
  emotional: {
    title: 'Emotional Connection & Empathy',
    icon: 'heart',
    highDesc: 'Intuitive vulnerability and emotional safety. You sense each other\'s feelings without words.',
    midDesc: 'Balanced emotional exchange; requires occasional check-ins to prevent unspoken misunderstandings.',
    lowDesc: 'Contrasting emotional processing styles; practice explicit verbal sharing instead of expecting mind-reading.'
  },
  communication: {
    title: 'Intellectual & Communication',
    icon: 'message-square',
    highDesc: 'Effortless banter, deep philosophical alignment, and mutual intellectual stimulation.',
    midDesc: 'Constructive dialogue; you learn fascinating new viewpoints from each other.',
    lowDesc: 'Frequent difference in communicative pacing; requires active listening and patience during debates.'
  },
  romance: {
    title: 'Romance, Chemistry & Passion',
    icon: 'flame',
    highDesc: 'Electric physical and romantic chemistry with continuous sparks and playful affection.',
    midDesc: 'Warm and comforting passion that flourishes with deliberate romantic dates.',
    lowDesc: 'Attraction develops gradually; relies more on steady companionship than immediate fireworks.'
  },
  trust: {
    title: 'Trust, Loyalty & Core Values',
    icon: 'shield-check',
    highDesc: 'Unshakable integrity and complete mutual faith. A fortress of unwavering loyalty.',
    midDesc: 'Solid mutual respect; transparent communication keeps the foundation secure.',
    lowDesc: 'Cautious trust building; avoid secrecy and ensure transparency with commitments.'
  },
  stability: {
    title: 'Long-term Stability & Marriage Harmony',
    icon: 'home',
    highDesc: 'Exceptional domestic alignment, shared financial wisdom, and generational endurance.',
    midDesc: 'Good long-term viability when explicit agreements on responsibilities are established.',
    lowDesc: 'Contrasting life rhythms; requires intentional structure regarding domestic and financial roles.'
  },
  lifestyle: {
    title: 'Conflict Resolution & Daily Lifestyle',
    icon: 'sliders',
    highDesc: 'Harmonious day-to-day rhythm, stress management, and peaceful resolution of friction.',
    midDesc: 'Healthy give-and-take; compromising on social habits ensures domestic tranquility.',
    lowDesc: 'Spirited debates during disagreements; adopt cooling-off agreements to preserve harmony.'
  }
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initial calculation for default couple
  onDOBChange('p1', false);
  onDOBChange('p2', false);
  recalculateCouples(false);

  // Initial calculation for singles
  onSingleProfileChange(false);

  // Populate Encyclopedia
  renderEncyclopedia();
});

// ============================================================================
// TAB NAVIGATION
// ============================================================================
function switchMainTab(tab) {
  state.currentTab = tab;

  // Toggle tab contents
  document.getElementById('section-couples').classList.toggle('hidden', tab !== 'couples');
  document.getElementById('section-singles').classList.toggle('hidden', tab !== 'singles');
  document.getElementById('section-encyclopedia').classList.toggle('hidden', tab !== 'encyclopedia');

  // Update Tab Button Styles
  const btnCouples = document.getElementById('tab-btn-couples');
  const btnSingles = document.getElementById('tab-btn-singles');
  const btnEncy = document.getElementById('tab-btn-encyclopedia');

  const activeClasses = ['bg-cosmic-600', 'text-white', 'shadow-md', 'shadow-cosmic-600/30'];
  const inactiveClasses = ['text-slate-400', 'hover:text-white'];

  [btnCouples, btnSingles, btnEncy].forEach(btn => {
    if (!btn) return;
    btn.classList.remove(...activeClasses);
    btn.classList.add(...inactiveClasses);
  });

  if (tab === 'couples') {
    btnCouples.classList.remove(...inactiveClasses);
    btnCouples.classList.add(...activeClasses);
  } else if (tab === 'singles') {
    btnSingles.classList.remove(...inactiveClasses);
    btnSingles.classList.add(...activeClasses);
  } else if (tab === 'encyclopedia') {
    btnEncy.classList.remove(...inactiveClasses);
    btnEncy.classList.add(...activeClasses);
  }

  if (window.lucide) window.lucide.createIcons();
}

// ============================================================================
// MODE 1: COUPLE & MARRIED COMPATIBILITY LOGIC
// ============================================================================

/**
 * Handle DOB input change for Partner 1 or Partner 2
 */
function onDOBChange(partnerKey, triggerRecalc = true) {
  const dobInput = document.getElementById(`${partnerKey}-dob`);
  if (!dobInput || !dobInput.value) return;

  const sign = getZodiacSignFromDOB(dobInput.value);
  if (!sign) return;

  state.couples[partnerKey].sign = sign;
  state.couples[partnerKey].dob = dobInput.value;

  // Update Live Preview UI
  updatePartnerPreview(partnerKey, sign);

  if (triggerRecalc) {
    recalculateCouples(false);
  }
}

function updatePartnerPreview(partnerKey, sign) {
  const glyph = document.getElementById(`${partnerKey}-preview-glyph`);
  const name = document.getElementById(`${partnerKey}-preview-name`);
  const element = document.getElementById(`${partnerKey}-preview-element`);
  const modality = document.getElementById(`${partnerKey}-preview-modality`);
  const dates = document.getElementById(`${partnerKey}-preview-dates`);
  const keywords = document.getElementById(`${partnerKey}-preview-keywords`);

  const badge = document.getElementById(`${partnerKey}-detected-badge`);
  const badgeSymbol = document.getElementById(`${partnerKey}-badge-symbol`);
  const badgeName = document.getElementById(`${partnerKey}-badge-name`);

  if (glyph) glyph.textContent = sign.symbol;
  if (name) name.textContent = sign.name;
  if (element) {
    element.textContent = sign.element;
    element.className = `text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${getElementColorClasses(sign.element)}`;
  }
  if (modality) modality.textContent = sign.modality;
  if (dates) dates.textContent = `${sign.dates} • Ruled by ${sign.ruler}`;
  if (keywords) keywords.textContent = sign.keywords.slice(0, 3).join(', ');

  if (badge) {
    badge.classList.remove('hidden');
    badge.classList.add('flex');
  }
  if (badgeSymbol) badgeSymbol.textContent = sign.symbol;
  if (badgeName) badgeName.textContent = sign.name;
}

function getElementColorClasses(element) {
  switch (element) {
    case 'Fire':
      return 'bg-amber-500/20 text-amber-300 border border-amber-500/30';
    case 'Earth':
      return 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    case 'Air':
      return 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30';
    case 'Water':
      return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
    default:
      return 'bg-slate-800 text-slate-300';
  }
}

/**
 * Main Couple Calculation
 */
function recalculateCouples(celebrate = false) {
  const p1Dob = document.getElementById('p1-dob').value;
  const p2Dob = document.getElementById('p2-dob').value;
  const p1Name = document.getElementById('p1-name').value.trim() || 'You';
  const p2Name = document.getElementById('p2-name').value.trim() || 'Partner';
  const p1Gender = document.getElementById('p1-gender').value;
  const p2Gender = document.getElementById('p2-gender').value;

  const s1 = getZodiacSignFromDOB(p1Dob);
  const s2 = getZodiacSignFromDOB(p2Dob);

  if (!s1 || !s2) return;

  state.couples.p1.sign = s1;
  state.couples.p2.sign = s2;
  state.couples.p1.name = p1Name;
  state.couples.p2.name = p2Name;
  state.couples.p1.gender = p1Gender;
  state.couples.p2.gender = p2Gender;

  const pairData = getPairCompatibility(s1.id, s2.id);
  if (!pairData) return;
  state.couples.pairData = pairData;

  const colorShade = getColorShade(pairData.overallScore);

  // Update Hero Section
  renderCoupleHero(s1, s2, pairData, colorShade, p1Name, p2Name);

  // Update 6 Parameters
  renderCoupleParameters(pairData.parameters);

  // Update Radar Chart
  renderCoupleRadarChart(pairData.parameters);

  // Update Strengths, Challenges, Advice
  renderCoupleNarratives(pairData, p1Gender, p2Gender);

  // Celebration Confetti if high score
  if (celebrate && pairData.overallScore >= 80 && window.confetti) {
    window.confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Render Couple Hero Section with Circular SVG Progress Gauge
 */
function renderCoupleHero(s1, s2, pairData, colorShade, p1Name, p2Name) {
  const heroCard = document.getElementById('couple-score-hero');
  const pairTitle = document.getElementById('couple-pair-title');
  const aspectSub = document.getElementById('couple-aspect-subtitle');
  const summaryText = document.getElementById('couple-summary-text');
  const celebText = document.getElementById('couple-celeb-text');

  const shadeBadge = document.getElementById('couple-shade-badge');
  const shadeEmoji = document.getElementById('couple-shade-emoji');
  const shadeTitle = document.getElementById('couple-shade-title');
  const shadeScoreTag = document.getElementById('couple-shade-score-tag');

  const scoreNum = document.getElementById('couple-score-number');
  const scoreLabel = document.getElementById('couple-score-label');
  const radialCircle = document.getElementById('couple-radial-circle');

  // Pair Title
  pairTitle.textContent = `${s1.name} & ${s2.name}`;
  aspectSub.textContent = `${pairData.aspectName} • ${s1.element} + ${s2.element} Interplay`;
  summaryText.textContent = pairData.summary;
  celebText.textContent = pairData.celebrityCouples;

  // Linda Goodman Vibration Badge & Karmic Lesson
  const vibrationText = document.getElementById('couple-vibration-text');
  const karmicLesson = document.getElementById('couple-karmic-lesson');
  if (vibrationText && pairData.lindaVibration) {
    vibrationText.textContent = `${pairData.lindaVibration.title}`;
  }
  if (karmicLesson && pairData.lindaVibration) {
    karmicLesson.textContent = pairData.lindaVibration.karmicLesson;
  }

  // Update Shade Badge
  shadeBadge.className = `inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${colorShade.badgeClass}`;
  shadeEmoji.textContent = colorShade.emoji;
  shadeTitle.textContent = colorShade.label;
  shadeScoreTag.textContent = `${pairData.overallScore}% Overall Match`;

  // Update Circular Progress
  scoreNum.textContent = `${pairData.overallScore}%`;
  scoreLabel.textContent = colorShade.category === 'green' ? 'Harmonious' : colorShade.category === 'amber' ? 'Moderate' : 'Challenging';
  scoreLabel.className = `text-[11px] font-bold uppercase tracking-wider mt-1 ${colorShade.textClass}`;

  // SVG Gauge stroke dash calculation (Circumference = 2 * PI * 50 ~= 314.16)
  const circumference = 314.16;
  const offset = circumference - (pairData.overallScore / 100) * circumference;
  radialCircle.style.strokeDasharray = `${circumference}`;
  radialCircle.style.strokeDashoffset = `${offset}`;
  radialCircle.style.stroke = colorShade.hex;

  // Glow on Hero Card
  heroCard.style.borderColor = `${colorShade.hex}44`;
}

/**
 * Render 6 Parameters Grid with Color Bars
 */
function renderCoupleParameters(params) {
  const container = document.getElementById('couple-parameters-container');
  if (!container) return;
  container.innerHTML = '';

  const paramKeys = ['emotional', 'communication', 'romance', 'trust', 'stability', 'lifestyle'];

  paramKeys.forEach(key => {
    const score = params[key] || 70;
    const meta = PARAM_DESCRIPTIONS[key];
    const shade = getColorShade(score);

    // Pick contextual text based on score tier
    const descText = score >= 75 ? meta.highDesc : score >= 50 ? meta.midDesc : meta.lowDesc;

    const card = document.createElement('div');
    card.className = `glass-panel rounded-2xl p-5 space-y-3 border transition hover:border-slate-700 ${shade.borderClass}`;

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-cosmic-400">
            <i data-lucide="${meta.icon}" class="w-4 h-4"></i>
          </div>
          <span class="text-xs font-bold text-white">${meta.title}</span>
        </div>
        <span class="font-mono font-bold text-sm ${shade.textClass}">${score}%</span>
      </div>

      <!-- Progress Meter Bar -->
      <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
        <div class="h-full rounded-full transition-all duration-700 bg-gradient-to-r ${shade.gradient}" 
             style="width: ${score}%;"></div>
      </div>

      <div class="flex items-center justify-between text-[11px] text-slate-400">
        <span class="inline-flex items-center space-x-1">
          <span>${shade.emoji}</span>
          <span class="font-semibold ${shade.textClass}">${score >= 75 ? 'Harmonious' : score >= 50 ? 'Moderate' : 'Challenging'}</span>
        </span>
        <span class="font-mono text-[10px] text-slate-500">${score}/100</span>
      </div>

      <p class="text-[11px] text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80">
        ${descText}
      </p>
    `;

    container.appendChild(card);
  });
}

/**
 * Render Radar Chart using Chart.js
 */
function renderCoupleRadarChart(params) {
  const canvas = document.getElementById('couple-radar-chart');
  if (!canvas) return;

  if (state.couples.radarChart) {
    state.couples.radarChart.destroy();
  }

  const ctx = canvas.getContext('2d');
  const labels = [
    'Emotional',
    'Intellectual',
    'Romance',
    'Trust',
    'Stability',
    'Lifestyle'
  ];
  const data = [
    params.emotional,
    params.communication,
    params.romance,
    params.trust,
    params.stability,
    params.lifestyle
  ];

  state.couples.radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Cosmic Affinity Score',
        data: data,
        backgroundColor: 'rgba(139, 92, 246, 0.25)',
        borderColor: '#a78bfa',
        pointBackgroundColor: '#ec4899',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#ec4899',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 30,
          max: 100,
          ticks: {
            stepSize: 20,
            display: false
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.08)'
          },
          angleLines: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          pointLabels: {
            color: '#cbd5e1',
            font: {
              size: 11,
              weight: '600'
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

/**
 * Render Strengths, Challenges, Tips & Elemental Details
 */
function renderCoupleNarratives(pairData, p1Gender, p2Gender) {
  // Elemental & Modality Synthesis
  const elemTitle = document.getElementById('couple-elem-title');
  const elemText = document.getElementById('couple-elem-text');
  const modalityText = document.getElementById('couple-modality-text');
  const genderAdvice = document.getElementById('couple-gender-advice');

  if (elemTitle) elemTitle.textContent = `Elemental Chemistry: ${pairData.elementSynergy.title}`;
  if (elemText) elemText.textContent = pairData.elementSynergy.text;
  if (modalityText) modalityText.textContent = pairData.modalitySynergy;

  // Gender Advice (Linda Goodman Love Signs)
  const genderTitle = document.getElementById('couple-gender-title');
  if (genderTitle && state.couples.p1.sign && state.couples.p2.sign) {
    genderTitle.textContent = `Linda Goodman's Love Signs: ${state.couples.p1.sign.name} & ${state.couples.p2.sign.name} Dynamic`;
  }

  if (genderAdvice) {
    if (p1Gender === 'male' && p2Gender === 'female') {
      genderAdvice.textContent = pairData.genderAdvice.male_female;
    } else if (p1Gender === 'female' && p2Gender === 'male') {
      genderAdvice.textContent = pairData.genderAdvice.female_male;
    } else {
      genderAdvice.textContent = pairData.genderAdvice.same_sex;
    }
  }

  // Strengths List
  const strengthsList = document.getElementById('couple-strengths-list');
  if (strengthsList) {
    strengthsList.innerHTML = pairData.strengths.map(s => `
      <li class="flex items-start space-x-2">
        <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5"></i>
        <span>${s}</span>
      </li>
    `).join('');
  }

  // Challenges List
  const challengesList = document.getElementById('couple-challenges-list');
  if (challengesList) {
    challengesList.innerHTML = pairData.challenges.map(c => `
      <li class="flex items-start space-x-2">
        <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5"></i>
        <span>${c}</span>
      </li>
    `).join('');
  }

  // Tips List
  const tipsList = document.getElementById('couple-tips-list');
  if (tipsList) {
    tipsList.innerHTML = pairData.tips.map(t => `
      <li class="flex items-start space-x-2">
        <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"></i>
        <span>${t}</span>
      </li>
    `).join('');
  }
}

/**
 * Load Sample Couple Presets for 1-Click Verification
 */
function loadSampleCouple(presetKey) {
  const presets = {
    leo_sag: { p1Dob: '1992-08-14', p2Dob: '1990-12-04', p1Gender: 'female', p2Gender: 'male', p1Name: 'Leo Partner', p2Name: 'Sagittarius Partner' },
    cancer_cap: { p1Dob: '1982-06-21', p2Dob: '1982-01-09', p1Gender: 'male', p2Gender: 'female', p1Name: 'William (Cancer)', p2Name: 'Kate (Capricorn)' },
    scorpio_virgo: { p1Dob: '1976-10-23', p2Dob: '1987-08-25', p1Gender: 'male', p2Gender: 'female', p1Name: 'Ryan (Scorpio)', p2Name: 'Blake (Virgo)' },
    aries_cancer: { p1Dob: '1993-04-05', p2Dob: '1994-07-10', p1Gender: 'male', p2Gender: 'female', p1Name: 'Aries Partner', p2Name: 'Cancer Partner' },
    gemini_scorpio: { p1Dob: '1991-06-05', p2Dob: '1992-11-12', p1Gender: 'female', p2Gender: 'male', p1Name: 'Gemini Partner', p2Name: 'Scorpio Partner' }
  };

  const p = presets[presetKey];
  if (!p) return;

  document.getElementById('p1-dob').value = p.p1Dob;
  document.getElementById('p2-dob').value = p.p2Dob;
  document.getElementById('p1-name').value = p.p1Name;
  document.getElementById('p2-name').value = p.p2Name;
  document.getElementById('p1-gender').value = p.p1Gender;
  document.getElementById('p2-gender').value = p.p2Gender;

  onDOBChange('p1', false);
  onDOBChange('p2', false);
  recalculateCouples(true);
}

/**
 * Copy Cosmic Compatibility Report to Clipboard
 */
function copyCoupleReport() {
  const { p1, p2, pairData } = state.couples;
  if (!pairData) return;

  const text = `✨ ZODIAC COMPATIBILITY REPORT ✨
Couples: ${p1.name} (${p1.sign.name}) & ${p2.name} (${p2.sign.name})
Overall Compatibility: ${pairData.overallScore}% [${pairData.shadeLabel}]
Astrological Aspect: ${pairData.aspectName}

📊 6 Core Parameters:
- Emotional Connection: ${pairData.parameters.emotional}%
- Intellectual & Communication: ${pairData.parameters.communication}%
- Romance & Chemistry: ${pairData.parameters.romance}%
- Trust & Values: ${pairData.parameters.trust}%
- Long-term Stability: ${pairData.parameters.stability}%
- Lifestyle Harmony: ${pairData.parameters.lifestyle}%

🌟 Summary:
${pairData.summary}

🔑 Keys to Success:
${pairData.tips.map(t => `- ${t}`).join('\n')}

Calculated via ZodiacMatch AI (Anil Dutta)`;

  navigator.clipboard.writeText(text).then(() => {
    alert('Cosmic Compatibility Report copied to clipboard!');
  }).catch(() => {
    alert('Report prepared. Please use standard copy.');
  });
}

// ============================================================================
// MODE 2: SINGLES / UNMARRIED COMPATIBILITY LOGIC
// ============================================================================

/**
 * Handle Single User profile changes
 */
function onSingleProfileChange(celebrate = false) {
  const dobInput = document.getElementById('single-dob');
  const genderSelect = document.getElementById('single-gender');
  const seekingSelect = document.getElementById('single-seeking');
  const nameInput = document.getElementById('single-name');

  if (!dobInput || !dobInput.value) return;

  const sign = getZodiacSignFromDOB(dobInput.value);
  if (!sign) return;

  state.singles.sign = sign;
  state.singles.dob = dobInput.value;
  state.singles.gender = genderSelect.value;
  state.singles.seeking = seekingSelect.value;
  state.singles.name = nameInput ? nameInput.value.trim() : '';

  // Update User's Own Sign Banner
  const glyph = document.getElementById('single-sign-glyph');
  const name = document.getElementById('single-sign-name');
  const element = document.getElementById('single-sign-element');
  const dates = document.getElementById('single-sign-dates');
  const keywords = document.getElementById('single-sign-keywords');

  if (glyph) glyph.textContent = sign.symbol;
  if (name) name.textContent = sign.name;
  if (element) {
    element.textContent = sign.element;
    element.className = `text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${getElementColorClasses(sign.element)}`;
  }
  if (dates) dates.textContent = `${sign.dates} • Governed by ${sign.ruler}`;
  if (keywords) keywords.textContent = sign.keywords.join(', ');

  // Evaluate compatibility against all 12 signs
  renderSingleTopSoulmates();
  renderSingleCards();

  if (celebrate && window.confetti) {
    window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  }

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Load Sample Single User Presets
 */
function loadSampleSingle(dob, gender, seeking) {
  document.getElementById('single-dob').value = dob;
  document.getElementById('single-gender').value = gender;
  document.getElementById('single-seeking').value = seeking;
  onSingleProfileChange(true);
}

/**
 * Set Filter for Single Signs (All, Green, Amber, Red)
 */
function setSingleFilter(filter) {
  state.singles.filter = filter;

  ['all', 'green', 'amber', 'red'].forEach(f => {
    const btn = document.getElementById(`s-filter-${f}`);
    if (!btn) return;
    if (f === filter) {
      btn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition bg-cosmic-600 text-white shadow-sm';
    } else {
      btn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700';
    }
  });

  renderSingleCards();
}

/**
 * Render Top 3 Soulmates Banner
 */
function renderSingleTopSoulmates() {
  const container = document.getElementById('single-top-3-grid');
  if (!container || !state.singles.sign) return;
  container.innerHTML = '';

  const mySign = state.singles.sign;

  // Compute all 12 pairings and sort desc
  const allPairs = ZODIAC_SIGNS.map(targetSign => {
    const pairData = getPairCompatibility(mySign.id, targetSign.id);
    return {
      targetSign,
      pairData,
      score: pairData ? pairData.overallScore : 0
    };
  }).sort((a, b) => b.score - a.score);

  const top3 = allPairs.slice(0, 3);

  top3.forEach((item, index) => {
    const { targetSign, pairData, score } = item;
    const shade = getColorShade(score);
    const medalEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';

    const card = document.createElement('div');
    card.className = `glass-panel-elevated rounded-3xl p-5 border relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer ${shade.borderClass}`;
    card.onclick = () => openSignModal(targetSign.id);

    card.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-2">
          <span class="text-xl">${medalEmoji}</span>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-400">#${index + 1} Best Match</span>
        </div>
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${shade.badgeClass}">${score}% Match</span>
      </div>

      <div class="flex items-center space-x-3.5 mb-3">
        <div class="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-3xl glyph-symbol text-cosmic-300">
          ${targetSign.symbol}
        </div>
        <div>
          <h4 class="font-serif font-bold text-lg text-white">${targetSign.name}</h4>
          <p class="text-[11px] text-slate-400">${targetSign.dates}</p>
        </div>
      </div>

      <p class="text-xs text-slate-300 line-clamp-2 mb-3">
        ${pairData.summary}
      </p>

      <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cosmic-400 font-semibold">
        <span>Click for Compatibility Details</span>
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Render All 12 Signs Grid for Singles
 */
function renderSingleCards() {
  const container = document.getElementById('single-signs-grid');
  const sortSelect = document.getElementById('single-sort-select');
  if (!container || !state.singles.sign) return;
  container.innerHTML = '';

  const mySign = state.singles.sign;
  const currentSort = sortSelect ? sortSelect.value : state.singles.sort;
  const currentFilter = state.singles.filter;

  // Build full list with compatibility info
  let list = ZODIAC_SIGNS.map((targetSign, index) => {
    const pairData = getPairCompatibility(mySign.id, targetSign.id);
    const score = pairData ? pairData.overallScore : 50;
    const shade = getColorShade(score);
    return {
      targetSign,
      pairData,
      score,
      shade,
      originalIndex: index
    };
  });

  // Filter
  if (currentFilter !== 'all') {
    list = list.filter(item => item.shade.category === currentFilter);
  }

  // Sort
  if (currentSort === 'score_desc') {
    list.sort((a, b) => b.score - a.score);
  } else if (currentSort === 'score_asc') {
    list.sort((a, b) => a.score - b.score);
  } else if (currentSort === 'zodiac_order') {
    list.sort((a, b) => a.originalIndex - b.originalIndex);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <p class="text-sm">No signs found for filter "${currentFilter}".</p>
      </div>
    `;
    return;
  }

  list.forEach(item => {
    const { targetSign, pairData, score, shade } = item;
    const card = document.createElement('div');
    card.className = `glass-panel rounded-2xl p-5 border transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${shade.borderClass}`;
    card.onclick = () => openSignModal(targetSign.id);

    // Mini Parameter Indicators
    const p = pairData.parameters;
    const paramsList = [
      { label: 'Emotion', val: p.emotional },
      { label: 'Talk', val: p.communication },
      { label: 'Romance', val: p.romance },
      { label: 'Trust', val: p.trust },
      { label: 'Marriage', val: p.stability }
    ];

    card.innerHTML = `
      <div class="space-y-3">
        <!-- Top Row: Glyph, Name, Match Badge -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-2xl glyph-symbol text-cosmic-300">
              ${targetSign.symbol}
            </div>
            <div>
              <div class="flex items-center space-x-1.5">
                <h4 class="font-serif font-bold text-base text-white">${targetSign.name}</h4>
                <span class="text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${getElementColorClasses(targetSign.element)}">
                  ${targetSign.element}
                </span>
              </div>
              <p class="text-[11px] text-slate-400">${targetSign.dates}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full text-xs font-bold ${shade.badgeClass}">
            ${score}%
          </span>
        </div>

        <!-- Color Shade Indicator Pill -->
        <div class="flex items-center justify-between text-[11px] px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
          <span class="text-slate-400 font-medium">Affinity Status:</span>
          <span class="font-bold ${shade.textClass} flex items-center space-x-1">
            <span>${shade.emoji}</span>
            <span>${shade.label}</span>
          </span>
        </div>

        <!-- Linda Goodman Vibration Tag -->
        <div class="flex items-center justify-between text-[11px] px-2.5 py-1 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-300">
          <span class="font-bold flex items-center space-x-1">
            <i data-lucide="book-open" class="w-3 h-3 text-amber-400"></i>
            <span>${pairData.vibrationCode} Vibration:</span>
          </span>
          <span class="text-[10px] text-slate-300 truncate ml-1 font-medium">${pairData.lindaVibration ? pairData.lindaVibration.title.split('(')[1].replace(')', '') : 'Karmic Synastry'}</span>
        </div>

        <!-- Parameter Mini Bars -->
        <div class="space-y-1.5 pt-1">
          <div class="grid grid-cols-5 gap-1 text-[10px] text-slate-400 font-mono text-center">
            ${paramsList.map(item => `
              <div>
                <div class="h-1.5 rounded-full bg-slate-800 overflow-hidden mb-0.5">
                  <div class="h-full ${getColorShade(item.val).bgClass}" style="width: ${item.val}%;"></div>
                </div>
                <span>${item.label}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed pt-1">
          ${pairData.summary}
        </p>
      </div>

      <!-- Footer Button -->
      <div class="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cosmic-400 font-semibold group-hover:text-cosmic-300">
        <span>View In-Depth Breakdown</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Open Deep Dive Modal for a Specific Sign
 */
function openSignModal(targetSignId) {
  const modal = document.getElementById('sign-detail-modal');
  const modalBody = document.getElementById('modal-body');
  const modalGlyph = document.getElementById('modal-glyph');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalShadeBadge = document.getElementById('modal-shade-badge');

  const mySign = state.singles.sign || ZODIAC_MAP['cancer'];
  const targetSign = ZODIAC_MAP[targetSignId];
  if (!targetSign) return;

  const pairData = getPairCompatibility(mySign.id, targetSign.id);
  if (!pairData) return;

  const score = pairData.overallScore;
  const shade = getColorShade(score);

  modalGlyph.textContent = targetSign.symbol;
  modalTitle.textContent = `${mySign.name} & ${targetSign.name}`;
  modalSubtitle.textContent = `${pairData.aspectName} • ${mySign.element} & ${targetSign.element} Elemental Synergy`;

  modalShadeBadge.className = `px-3 py-1 rounded-full text-xs font-black uppercase ${shade.badgeClass}`;
  modalShadeBadge.textContent = `${shade.emoji} ${score}% Match (${shade.label})`;

  // Build Modal Body
  modalBody.innerHTML = `
    <!-- Linda Goodman Love Signs Synastry Box -->
    <div class="bg-amber-950/25 border border-amber-500/40 rounded-2xl p-4 sm:p-5 space-y-2">
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center space-x-1.5">
          <i data-lucide="book-open" class="w-4 h-4 text-amber-400"></i>
          <span>Linda Goodman's Love Signs: ${pairData.vibrationCode} Vibration</span>
        </h4>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/30">Karmic Synastry</span>
      </div>
      <p class="text-xs text-slate-200 leading-relaxed">${pairData.lindaVibration ? pairData.lindaVibration.summary : pairData.summary}</p>
      <div class="pt-2 border-t border-amber-500/20 text-xs text-amber-200">
        <strong class="text-amber-300">Karmic Lesson:</strong> ${pairData.lindaVibration ? pairData.lindaVibration.karmicLesson : ''}
      </div>
    </div>

    <!-- Linda Goodman's Secret Key to Their Heart -->
    <div class="bg-purple-950/30 border border-purple-500/30 rounded-2xl p-4 space-y-1.5">
      <h5 class="text-xs font-bold text-purple-300 flex items-center space-x-1.5">
        <i data-lucide="key" class="w-4 h-4 text-amber-400"></i>
        <span>Linda Goodman's Secret to Winning a ${targetSign.name}'s Heart</span>
      </h5>
      <p class="text-xs text-slate-300 leading-relaxed">${targetSign.lindaGoodmanSecret || ''}</p>
    </div>

    <!-- 6 Parameters Breakdown -->
    <div class="space-y-3">
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Multi-Parameter Compatibility Scores</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${Object.keys(PARAM_DESCRIPTIONS).map(key => {
          const val = pairData.parameters[key] || 70;
          const paramMeta = PARAM_DESCRIPTIONS[key];
          const paramShade = getColorShade(val);
          return `
            <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-3 space-y-1.5">
              <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-slate-300 flex items-center space-x-1.5">
                  <i data-lucide="${paramMeta.icon}" class="w-3.5 h-3.5 text-cosmic-400"></i>
                  <span>${paramMeta.title}</span>
                </span>
                <span class="font-mono font-bold ${paramShade.textClass}">${val}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r ${paramShade.gradient}" style="width: ${val}%;"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Relationship Strengths & Challenges -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-4 space-y-2">
        <h5 class="text-xs font-bold text-emerald-400 flex items-center space-x-1.5">
          <i data-lucide="shield-check" class="w-4 h-4"></i>
          <span>Key Relationship Strengths</span>
        </h5>
        <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
          ${pairData.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>

      <div class="bg-rose-950/20 border border-rose-800/40 rounded-2xl p-4 space-y-2">
        <h5 class="text-xs font-bold text-rose-400 flex items-center space-x-1.5">
          <i data-lucide="alert-triangle" class="w-4 h-4"></i>
          <span>Potential Friction Points</span>
        </h5>
        <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
          ${pairData.challenges.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Marriage & Actionable Dating Advice -->
    <div class="bg-indigo-950/30 border border-indigo-800/40 rounded-2xl p-4 space-y-2">
      <h5 class="text-xs font-bold text-indigo-300 flex items-center space-x-1.5">
        <i data-lucide="heart" class="w-4 h-4 text-pink-400"></i>
        <span>Advice for Dating & Marrying a ${targetSign.name}</span>
      </h5>
      <p class="text-xs text-slate-300 leading-relaxed">
        ${targetSign.inLove}
      </p>
      <div class="pt-2 text-xs text-slate-400">
        <strong>Marriage Dynamics:</strong> ${targetSign.marriageStyle}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById('sign-detail-modal');
  if (modal) modal.classList.add('hidden');
}

function openLindaVibrationsModal() {
  const modal = document.getElementById('linda-vibrations-modal');
  if (modal) modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closeLindaVibrationsModal() {
  const modal = document.getElementById('linda-vibrations-modal');
  if (modal) modal.classList.add('hidden');
}

// Close modals on click outside
window.addEventListener('click', (e) => {
  const modal1 = document.getElementById('sign-detail-modal');
  const modal2 = document.getElementById('linda-vibrations-modal');
  if (e.target === modal1) closeModal();
  if (e.target === modal2) closeLindaVibrationsModal();
});

// ============================================================================
// MODE 3: ZODIAC ENCYCLOPEDIA (ALL 12 SIGNS GUIDE)
// ============================================================================
function renderEncyclopedia() {
  const container = document.getElementById('encyclopedia-grid');
  if (!container) return;
  container.innerHTML = '';

  ZODIAC_SIGNS.forEach(sign => {
    const card = document.createElement('div');
    card.className = 'glass-panel rounded-3xl p-6 space-y-4 border transition hover:border-cosmic-500/50';

    card.innerHTML = `
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl glyph-symbol text-cosmic-400">
            ${sign.symbol}
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <h3 class="font-serif font-bold text-lg text-white">${sign.name}</h3>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${getElementColorClasses(sign.element)}">
                ${sign.element}
              </span>
            </div>
            <p class="text-xs text-slate-400">${sign.latin} • ${sign.dates}</p>
          </div>
        </div>
        <span class="text-xs text-slate-500 font-mono">${sign.modality}</span>
      </div>

      <p class="text-xs text-slate-300 leading-relaxed">
        ${sign.overview}
      </p>

      <!-- Linda Goodman Archetypes -->
      <div class="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-3.5 space-y-2 text-xs">
        <div class="flex items-center space-x-1.5 text-amber-300 font-bold">
          <i data-lucide="book-open" class="w-3.5 h-3.5 text-amber-400"></i>
          <span>Linda Goodman's Sun Signs Insights:</span>
        </div>
        <div>
          <strong class="text-blue-300">The ${sign.name} Man:</strong>
          <span class="text-slate-300">${sign.lindaGoodmanMale}</span>
        </div>
        <div>
          <strong class="text-pink-300">The ${sign.name} Woman:</strong>
          <span class="text-slate-300">${sign.lindaGoodmanFemale}</span>
        </div>
        <div class="pt-1 border-t border-amber-500/20 text-[11px] text-amber-200">
          <strong class="text-amber-400">Secret to Their Heart:</strong> ${sign.lindaGoodmanSecret}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Ruler: <strong class="text-white">${sign.ruler}</strong></span>
        <span>Ideal Signs: <strong class="text-emerald-400">${sign.idealPartners.join(', ')}</strong></span>
      </div>
    `;

    container.appendChild(card);
  });
}
