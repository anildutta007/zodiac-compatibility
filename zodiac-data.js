/**
 * Zodiac Compatibility Engine & Knowledge Base
 * Built for Anil Dutta - ZodiacMatch AI
 * Tropical Sun Sign Calculation & Comprehensive 144-Pair Matrix
 */

const ZODIAC_SIGNS = [
  {
    "id": "aries",
    "name": "Aries",
    "symbol": "\u2648",
    "latin": "The Ram",
    "dates": "Mar 21 \u2013 Apr 19",
    "startMonth": 3,
    "startDay": 21,
    "endMonth": 4,
    "endDay": 19,
    "element": "Fire",
    "modality": "Cardinal",
    "ruler": "Mars",
    "polarity": "Yang (Masculine / Assertive)",
    "house": "1st House of Self, Vitality & Initiative",
    "colors": [
      "Crimson Red",
      "Coral",
      "Scarlet"
    ],
    "gemstone": "Diamond, Bloodstone & Ruby",
    "keywords": [
      "Pioneering",
      "Courageous",
      "Passionate",
      "Independent",
      "Spontaneous",
      "Impulsive"
    ],
    "overview": "Aries is the dynamic trailblazer and first sign of the zodiac. Ruled by Mars, Aries radiates boundless energy, fearless initiative, and a vibrant zest for life. In love, they pursue with heartfelt honesty and crave partners who match their courage.",
    "inLove": "Fierce, direct, and enthusiastically devoted. An Aries doesn't play subtle mind games; when they love, they love loudly and champion their partner wholeheartedly.",
    "marriageStyle": "Dynamic, loyal, and energetic. Thrives when both partners share joint adventures, celebrate mutual triumphs, and maintain healthy personal freedom.",
    "strengths": [
      "Bold initiative & honesty",
      "Infectious optimism",
      "Passionate protector of loved ones"
    ],
    "shadows": [
      "Can be quick-tempered",
      "Impatience with slow pace",
      "Sometimes overlooks subtle emotional cues"
    ],
    "idealPartners": [
      "Leo",
      "Sagittarius",
      "Gemini",
      "Aquarius"
    ]
  },
  {
    "id": "taurus",
    "name": "Taurus",
    "symbol": "\u2649",
    "latin": "The Bull",
    "dates": "Apr 20 \u2013 May 20",
    "startMonth": 4,
    "startDay": 20,
    "endMonth": 5,
    "endDay": 20,
    "element": "Earth",
    "modality": "Fixed",
    "ruler": "Venus",
    "polarity": "Yin (Feminine / Receptive)",
    "house": "2nd House of Values, Security & Wealth",
    "colors": [
      "Emerald Green",
      "Rose Pink",
      "Earthy Taupe"
    ],
    "gemstone": "Emerald, Sapphire & Rose Quartz",
    "keywords": [
      "Steadfast",
      "Sensual",
      "Devoted",
      "Practical",
      "Patient",
      "Stubborn"
    ],
    "overview": "Taurus is the sensual anchor and steadfast builder of the zodiac. Governed by Venus, Taurus appreciates life's finest comforts, exquisite food, enduring loyalty, and emotional stability.",
    "inLove": "Deeply affectionate, loyal, and physically attentive. Taurus woos through consistent presence, gourmet dining, comforting touches, and dependable actions.",
    "marriageStyle": "The unshakeable bedrock of the household. Exceptionally loyal, dedicated to home comforts, financial prudence, and building a peaceful sanctuary.",
    "strengths": [
      "Unwavering loyalty & reliability",
      "Warm, comforting presence",
      "Mastery of financial and domestic harmony"
    ],
    "shadows": [
      "Resistant to sudden change",
      "Can hold onto grievances",
      "Possessiveness when insecure"
    ],
    "idealPartners": [
      "Virgo",
      "Capricorn",
      "Cancer",
      "Pisces"
    ]
  },
  {
    "id": "gemini",
    "name": "Gemini",
    "symbol": "\u264a",
    "latin": "The Twins",
    "dates": "May 21 \u2013 Jun 20",
    "startMonth": 5,
    "startDay": 21,
    "endMonth": 6,
    "endDay": 20,
    "element": "Air",
    "modality": "Mutable",
    "ruler": "Mercury",
    "polarity": "Yang (Masculine / Assertive)",
    "house": "3rd House of Communication, Intellect & Curiosity",
    "colors": [
      "Solar Yellow",
      "Electric Blue",
      "Silver"
    ],
    "gemstone": "Agate, Aquamarine & Citrine",
    "keywords": [
      "Curious",
      "Witty",
      "Adaptable",
      "Charming",
      "Expressive",
      "Versatile"
    ],
    "overview": "Gemini is the quick-witted conversationalist and insatiable learner of the cosmos. Ruled by Mercury, Gemini thrives on lively ideas, infectious laughter, spontaneous trips, and playful banter.",
    "inLove": "Attracted primarily through the mind. A Gemini falls deeply for someone who can match their quick banter, challenge their intellect, and keep curiosity burning.",
    "marriageStyle": "A youthful, stimulating partnership. Gemini needs a best friend and confidant with whom they can exchange books, travel, and laugh every single day.",
    "strengths": [
      "Brilliant communication",
      "Playful & youthful spirit",
      "Effortless adaptability to circumstances"
    ],
    "shadows": [
      "Can seem emotionally restless",
      "Overthinking feelings",
      "Difficulty settling into heavy routines"
    ],
    "idealPartners": [
      "Libra",
      "Aquarius",
      "Aries",
      "Leo"
    ]
  },
  {
    "id": "cancer",
    "name": "Cancer",
    "symbol": "\u264b",
    "latin": "The Crab",
    "dates": "Jun 21 \u2013 Jul 22",
    "startMonth": 6,
    "startDay": 21,
    "endMonth": 7,
    "endDay": 22,
    "element": "Water",
    "modality": "Cardinal",
    "ruler": "Moon",
    "polarity": "Yin (Feminine / Receptive)",
    "house": "4th House of Home, Family & Emotional Sanctuary",
    "colors": [
      "Pearl White",
      "Silver",
      "Seafoam Blue"
    ],
    "gemstone": "Moonstone, Pearl & Ruby",
    "keywords": [
      "Nurturing",
      "Intuitive",
      "Empathetic",
      "Protective",
      "Devoted",
      "Sentimental"
    ],
    "overview": "Cancer is the deeply intuitive nurturer and emotional guardian of the zodiac. Ruled by the luminous Moon, Cancer feels everything deeply and possesses a profound capacity for unconditional devotion and protective care.",
    "inLove": "Soulful, tender, and protective. Cancer builds emotional safety and remembers every meaningful date. They love with nostalgic warmth and total devotion.",
    "marriageStyle": "The sacred keeper of home and hearth. Dedicated to family unity, emotional intimacy, warm kitchens, and generational bonds.",
    "strengths": [
      "Deep emotional empathy",
      "Fierce loyalty to partner and family",
      "Intuitive understanding of unspoken needs"
    ],
    "shadows": [
      "Mood swings aligned with lunar cycles",
      "Can retreat into shell when hurt",
      "Cautious to forgive perceived slights"
    ],
    "idealPartners": [
      "Scorpio",
      "Pisces",
      "Taurus",
      "Virgo"
    ]
  },
  {
    "id": "leo",
    "name": "Leo",
    "symbol": "\u264c",
    "latin": "The Lion",
    "dates": "Jul 23 \u2013 Aug 22",
    "startMonth": 7,
    "startDay": 23,
    "endMonth": 8,
    "endDay": 22,
    "element": "Fire",
    "modality": "Fixed",
    "ruler": "Sun",
    "polarity": "Yang (Masculine / Assertive)",
    "house": "5th House of Joy, Creativity, Romance & Play",
    "colors": [
      "Solar Gold",
      "Amber",
      "Royal Purple"
    ],
    "gemstone": "Peridot, Amber & Golden Topaz",
    "keywords": [
      "Generous",
      "Magnetic",
      "Charismatic",
      "Loyal",
      "Warm-hearted",
      "Proud"
    ],
    "overview": "Leo is the radiant monarch and warm-hearted champion of the zodiac. Governed by the Sun itself, Leo radiates solar warmth, boundless generosity, theatrical flair, and unwavering loyalty.",
    "inLove": "Grand, generous, and proud. Leo treats their partner like a king or queen, showering them with gifts, public admiration, and intense romantic devotion.",
    "marriageStyle": "Chivalrous and supportive. Brings celebration, joy, social elegance, and steadfast protection to the family union.",
    "strengths": [
      "Tremendous generosity of spirit",
      "Charismatic and uplifting energy",
      "Unflinching loyalty through adversity"
    ],
    "shadows": [
      "Prone to pride and hurt ego",
      "Needs continuous validation",
      "Can be dramatic during disagreements"
    ],
    "idealPartners": [
      "Aries",
      "Sagittarius",
      "Gemini",
      "Libra"
    ]
  },
  {
    "id": "virgo",
    "name": "Virgo",
    "symbol": "\u264d",
    "latin": "The Maiden",
    "dates": "Aug 23 \u2013 Sep 22",
    "startMonth": 8,
    "startDay": 23,
    "endMonth": 9,
    "endDay": 22,
    "element": "Earth",
    "modality": "Mutable",
    "ruler": "Mercury",
    "polarity": "Yin (Feminine / Receptive)",
    "house": "6th House of Wellness, Craft & Devoted Service",
    "colors": [
      "Forest Green",
      "Soft Ochre",
      "Navy Blue"
    ],
    "gemstone": "Sapphire, Carnelian & Peridot",
    "keywords": [
      "Analytical",
      "Devoted",
      "Thoughtful",
      "Practical",
      "Discerning",
      "Supportive"
    ],
    "overview": "Virgo is the discerning mastermind and thoughtful caregiver of the zodiac. Ruled by Mercury, Virgo expresses affection through attentive acts of service, practical problem-solving, and quiet devotion.",
    "inLove": "Modest, loyal, and observant. Virgo notices every detail about what makes their partner happy, from their favorite tea to their subtle shifts in mood.",
    "marriageStyle": "The master organizer of daily life. Ensures the home is orderly, healthy, fiscally sound, and emotionally grounded.",
    "strengths": [
      "Unmatched attentiveness and care",
      "Practical problem-solver in crisis",
      "Fiercely dependable and honest"
    ],
    "shadows": [
      "Over-critical of self and partner",
      "Tendency to worry or overanalyze",
      "Hesitation to show vulnerability early on"
    ],
    "idealPartners": [
      "Taurus",
      "Capricorn",
      "Cancer",
      "Scorpio"
    ]
  },
  {
    "id": "libra",
    "name": "Libra",
    "symbol": "\u264e",
    "latin": "The Scales",
    "dates": "Sep 23 \u2013 Oct 22",
    "startMonth": 9,
    "startDay": 23,
    "endMonth": 10,
    "endDay": 22,
    "element": "Air",
    "modality": "Cardinal",
    "ruler": "Venus",
    "polarity": "Yang (Masculine / Assertive)",
    "house": "7th House of Partnership, Balance & Marriage",
    "colors": [
      "Pastel Rose",
      "Celestial Blue",
      "Ivory"
    ],
    "gemstone": "Opal, Lapis Lazuli & Tourmaline",
    "keywords": [
      "Harmonious",
      "Charming",
      "Diplomatic",
      "Romantic",
      "Fair-minded",
      "Graceful"
    ],
    "overview": "Libra is the cosmic diplomat and aesthetic romantic of the zodiac. Ruled by Venus, Libra is wired for partnership and seeks beauty, peaceful balance, intellectual harmony, and egalitarian love.",
    "inLove": "Hopeless romantic and charming companion. Libra creates magical dates, values gentle communication, and bends backwards to ensure peace and mutual respect.",
    "marriageStyle": "The quintessential co-pilot. Dedicated to equality, thoughtful compromises, shared social circles, and aesthetic marital harmony.",
    "strengths": [
      "Graceful diplomat and peacemaker",
      "Naturally attuned to partner's needs",
      "Creates an aesthetically beautiful life"
    ],
    "shadows": [
      "Conflict avoidance leading to suppression",
      "Indecisiveness on practical matters",
      "Can over-prioritize pleasing others"
    ],
    "idealPartners": [
      "Gemini",
      "Aquarius",
      "Leo",
      "Sagittarius"
    ]
  },
  {
    "id": "scorpio",
    "name": "Scorpio",
    "symbol": "\u264f",
    "latin": "The Scorpion",
    "dates": "Oct 23 \u2013 Nov 21",
    "startMonth": 10,
    "startDay": 23,
    "endMonth": 11,
    "endDay": 21,
    "element": "Water",
    "modality": "Fixed",
    "ruler": "Pluto & Mars",
    "polarity": "Yin (Feminine / Receptive)",
    "house": "8th House of Intimacy, Transformation & Rebirth",
    "colors": [
      "Obsidian Black",
      "Burgundy",
      "Deep Crimson"
    ],
    "gemstone": "Topaz, Garnet & Obsidian",
    "keywords": [
      "Intense",
      "Magnetic",
      "Profound",
      "Passionate",
      "Loyal",
      "Transformative"
    ],
    "overview": "Scorpio is the enigmatic powerhouse and soul-diver of the zodiac. Governed by Pluto and Mars, Scorpio seeks all-or-nothing emotional depth, psychological truth, and unbreakable loyalty.",
    "inLove": "Electrifying, intense, and unconditionally devoted. Scorpio does not do casual surface interactions; they want to know your deepest dreams, fears, and truths.",
    "marriageStyle": "An impenetrable emotional fortress. Scorpio defends their family with immense passion and bonds at a profound soul level.",
    "strengths": [
      "Fierce, unbreakable loyalty",
      "Deep intuitive psychological insight",
      "Transformative support in difficult times"
    ],
    "shadows": [
      "Guarded until absolute trust is earned",
      "Possessive or jealous tendencies",
      "Difficulty letting go of past hurts"
    ],
    "idealPartners": [
      "Cancer",
      "Pisces",
      "Virgo",
      "Capricorn"
    ]
  },
  {
    "id": "sagittarius",
    "name": "Sagittarius",
    "symbol": "\u2650",
    "latin": "The Archer",
    "dates": "Nov 22 \u2013 Dec 21",
    "startMonth": 11,
    "startDay": 22,
    "endMonth": 12,
    "endDay": 21,
    "element": "Fire",
    "modality": "Mutable",
    "ruler": "Jupiter",
    "polarity": "Yang (Masculine / Assertive)",
    "house": "9th House of Philosophy, Higher Wisdom & Horizons",
    "colors": [
      "Royal Purple",
      "Cobalt Blue",
      "Turquoise"
    ],
    "gemstone": "Turquoise, Topaz & Tanzanite",
    "keywords": [
      "Adventurous",
      "Optimistic",
      "Philosophical",
      "Honest",
      "Generous",
      "Free-spirited"
    ],
    "overview": "Sagittarius is the joyful philosopher and adventurous seeker of the zodiac. Governed by benevolent Jupiter, Sagittarius brings uplifting humor, philosophical insight, and boundless zest for world discovery.",
    "inLove": "Fun-loving, candid, and passionate. Sagittarius needs a partner who is both a lover and a fellow adventurer, ready to explore new lands, ideas, and philosophies together.",
    "marriageStyle": "An expansive, exciting partnership. Flourishes when both partners grow continuously, explore cultures, and avoid suffocating micro-management.",
    "strengths": [
      "Contagious optimism and humor",
      "Honest and transparent intentions",
      "Expansive worldview and generosity"
    ],
    "shadows": [
      "Can be blunt or tactless in speech",
      "Restless with repetitive domesticity",
      "Commitment hesitation if feeling confined"
    ],
    "idealPartners": [
      "Aries",
      "Leo",
      "Libra",
      "Aquarius"
    ]
  },
  {
    "id": "capricorn",
    "name": "Capricorn",
    "symbol": "\u2651",
    "latin": "The Sea-Goat",
    "dates": "Dec 22 \u2013 Jan 19",
    "startMonth": 12,
    "startDay": 22,
    "endMonth": 1,
    "endDay": 19,
    "element": "Earth",
    "modality": "Cardinal",
    "ruler": "Saturn",
    "polarity": "Yin (Feminine / Receptive)",
    "house": "10th House of Ambition, Legacy & Integrity",
    "colors": [
      "Charcoal Grey",
      "Forest Green",
      "Midnight Blue"
    ],
    "gemstone": "Garnet, Onyx & Smoky Quartz",
    "keywords": [
      "Disciplined",
      "Ambitious",
      "Loyal",
      "Steadfast",
      "Pragmatic",
      "Protective"
    ],
    "overview": "Capricorn is the disciplined architect and stoic protector of dynasties. Ruled by Saturn, Capricorn approaches romance with serious devotion, high standards, long-term vision, and unwavering dependability.",
    "inLove": "Prudent and discerning, but deeply romantic underneath. Capricorn expresses devotion through solid security, tangible building of a shared future, and lasting loyalty.",
    "marriageStyle": "The bedrock of enduring success. Committed to financial stability, generational wealth, mutual respect, and family legacy.",
    "strengths": [
      "Unmatched resilience and work ethic",
      "Rock-solid reliability in all storms",
      "Quietly witty and deeply respectful"
    ],
    "shadows": [
      "Can become work-obsessed",
      "Guarded with emotional vulnerability",
      "Rigid expectations of daily routine"
    ],
    "idealPartners": [
      "Taurus",
      "Virgo",
      "Scorpio",
      "Pisces"
    ]
  },
  {
    "id": "aquarius",
    "name": "Aquarius",
    "symbol": "\u2652",
    "latin": "The Water-Bearer",
    "dates": "Jan 20 \u2013 Feb 18",
    "startMonth": 1,
    "startDay": 20,
    "endMonth": 2,
    "endDay": 18,
    "element": "Air",
    "modality": "Fixed",
    "ruler": "Uranus & Saturn",
    "polarity": "Yang (Masculine / Assertive)",
    "house": "11th House of Community, Ideals & Humanity",
    "colors": [
      "Electric Cyan",
      "Silver",
      "Ultramarine"
    ],
    "gemstone": "Amethyst, Garnet & Moss Agate",
    "keywords": [
      "Visionary",
      "Original",
      "Intellectual",
      "Humanitarian",
      "Authentic",
      "Independent"
    ],
    "overview": "Aquarius is the avant-garde visionary and humanitarian innovator of the zodiac. Ruled by Uranus and Saturn, Aquarius values intellectual freedom, unique individuality, and authentic equal partnership.",
    "inLove": "Friends first, lovers forever. Aquarius is drawn to unconventional thinkers, sharp minds, and authentic souls who have their own passions and missions in life.",
    "marriageStyle": "An egalitarian alliance of best friends. Marriage is built on deep mutual respect, shared humanitarian goals, and intellectual freedom.",
    "strengths": [
      "Deeply respectful of individuality",
      "Progressive, forward-thinking partner",
      "Unshakable loyalty to core ideals"
    ],
    "shadows": [
      "Emotional detachment during heated moments",
      "Stubborn adherence to theories",
      "Uncomfortable with dramatic displays"
    ],
    "idealPartners": [
      "Gemini",
      "Libra",
      "Aries",
      "Sagittarius"
    ]
  },
  {
    "id": "pisces",
    "name": "Pisces",
    "symbol": "\u2653",
    "latin": "The Two Fishes",
    "dates": "Feb 19 \u2013 Mar 20",
    "startMonth": 2,
    "startDay": 19,
    "endMonth": 3,
    "endDay": 20,
    "element": "Water",
    "modality": "Mutable",
    "ruler": "Neptune & Jupiter",
    "polarity": "Yin (Feminine / Receptive)",
    "house": "12th House of Dreams, Mysticism & Compassion",
    "colors": [
      "Seafoam Green",
      "Lavender",
      "Aquamarine"
    ],
    "gemstone": "Aquamarine, Amethyst & Jade",
    "keywords": [
      "Compassionate",
      "Intuitive",
      "Dreamy",
      "Empathetic",
      "Artistic",
      "Gentle"
    ],
    "overview": "Pisces is the mystical dreamer and unconditional lover of the zodiac. Ruled by Neptune and Jupiter, Pisces navigates the world with poetic sensitivity, deep spiritual empathy, and infinite kindness.",
    "inLove": "Poetic, tender, and deeply intuitive. Pisces gives their whole heart, tuning into their partner's unspoken emotions, fantasies, and soul needs.",
    "marriageStyle": "A sacred and tender sanctuary. Fills the home with kindness, music, artistic beauty, emotional safety, and spiritual connection.",
    "strengths": [
      "Boundless empathy and forgiveness",
      "Deep romantic and spiritual intuition",
      "Devoted and gentle partner in times of grief"
    ],
    "shadows": [
      "Can lose healthy boundaries",
      "Escapism when reality feels harsh",
      "Idealizing partners beyond reality"
    ],
    "idealPartners": [
      "Cancer",
      "Scorpio",
      "Taurus",
      "Capricorn"
    ]
  }
];

const ZODIAC_PAIRS = {
  "aries_aries": {
    "sign1": "aries",
    "sign2": "aries",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Aries & Aries: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 82,
      "romance": 88,
      "trust": 82,
      "stability": 77,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Aries and Aries instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Aries & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_taurus": {
    "sign1": "aries",
    "sign2": "taurus",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Aries & Taurus: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Aries introduces Taurus to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aries & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_gemini": {
    "sign1": "aries",
    "sign2": "gemini",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Aries & Gemini: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 85,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aries and Gemini instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Paul Rudd (Aries) & Julie Yaeger (Gemini)",
    "genderAdvice": {
      "male_female": "When a Aries man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_cancer": {
    "sign1": "aries",
    "sign2": "cancer",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Aries & Cancer: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 42,
      "communication": 52,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Aries introduces Cancer to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aries & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_leo": {
    "sign1": "aries",
    "sign2": "leo",
    "overallScore": 96,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Aries & Leo: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 96,
      "communication": 96,
      "romance": 98,
      "trust": 96,
      "stability": 91,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aries and Leo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Sarah Jessica Parker (Aries) & Matthew Broderick (Aries) / Kourtney Kardashian (Aries) & Travis Barker (Scorpio)",
    "genderAdvice": {
      "male_female": "When a Aries man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_virgo": {
    "sign1": "aries",
    "sign2": "virgo",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Aries & Virgo: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 49,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Aries's instinctual approach may confuse Virgo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Aries & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_libra": {
    "sign1": "aries",
    "sign2": "libra",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Aries & Libra: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 78,
      "communication": 84,
      "romance": 86,
      "trust": 80,
      "stability": 79,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Aries and Libra instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Michael Douglas (Libra) & Catherine Zeta-Jones (Libra)",
    "genderAdvice": {
      "male_female": "When a Aries man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_scorpio": {
    "sign1": "aries",
    "sign2": "scorpio",
    "overallScore": 50,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Aries & Scorpio: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 40,
      "communication": 50,
      "romance": 47,
      "trust": 50,
      "stability": 52,
      "lifestyle": 42
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Aries introduces Scorpio to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aries & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_sagittarius": {
    "sign1": "aries",
    "sign2": "sagittarius",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Aries & Sagittarius: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 97,
      "communication": 97,
      "romance": 98,
      "trust": 97,
      "stability": 92,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aries and Sagittarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Aries & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_capricorn": {
    "sign1": "aries",
    "sign2": "capricorn",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Aries & Capricorn: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 52,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Aries introduces Capricorn to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aries & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_aquarius": {
    "sign1": "aries",
    "sign2": "aquarius",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Aries & Aquarius: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aries and Aquarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Aries & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aries_pisces": {
    "sign1": "aries",
    "sign2": "pisces",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Aries & Pisces: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 52,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Aries introduces Pisces to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aries & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aries man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aries woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aries and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_aries": {
    "sign1": "taurus",
    "sign2": "aries",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Taurus & Aries: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Taurus introduces Aries to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Taurus & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_taurus": {
    "sign1": "taurus",
    "sign2": "taurus",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Taurus & Taurus: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 82,
      "romance": 79,
      "trust": 87,
      "stability": 88,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Taurus and Taurus instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Taurus & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_gemini": {
    "sign1": "taurus",
    "sign2": "gemini",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Taurus & Gemini: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Taurus introduces Gemini to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Taurus & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_cancer": {
    "sign1": "taurus",
    "sign2": "cancer",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Taurus & Cancer: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Taurus and Cancer instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "George Clooney (Taurus) & Amal Clooney (Aquarius)",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_leo": {
    "sign1": "taurus",
    "sign2": "leo",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Taurus & Leo: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 52,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Taurus introduces Leo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Taurus & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_virgo": {
    "sign1": "taurus",
    "sign2": "virgo",
    "overallScore": 96,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Taurus & Virgo: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 96,
      "communication": 94,
      "romance": 93,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Taurus and Virgo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Taurus & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_libra": {
    "sign1": "taurus",
    "sign2": "libra",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Taurus & Libra: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Taurus's instinctual approach may confuse Libra.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Taurus & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_scorpio": {
    "sign1": "taurus",
    "sign2": "scorpio",
    "overallScore": 83,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Taurus & Scorpio: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 85,
      "communication": 83,
      "romance": 91,
      "trust": 88,
      "stability": 89,
      "lifestyle": 83
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Taurus and Scorpio instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Taurus & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_sagittarius": {
    "sign1": "taurus",
    "sign2": "sagittarius",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Taurus & Sagittarius: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Taurus's instinctual approach may confuse Sagittarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Taurus & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_capricorn": {
    "sign1": "taurus",
    "sign2": "capricorn",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Taurus & Capricorn: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 91,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Taurus and Capricorn instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "David Beckham (Taurus) & Victoria Beckham (Aries/Taurus)",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_aquarius": {
    "sign1": "taurus",
    "sign2": "aquarius",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Taurus & Aquarius: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 47,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Taurus introduces Aquarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Taurus & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "taurus_pisces": {
    "sign1": "taurus",
    "sign2": "pisces",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Taurus & Pisces: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Taurus and Pisces instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Taurus & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Taurus man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Taurus woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Taurus and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_aries": {
    "sign1": "gemini",
    "sign2": "aries",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Gemini & Aries: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 85,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Gemini and Aries instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Paul Rudd (Aries) & Julie Yaeger (Gemini)",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_taurus": {
    "sign1": "gemini",
    "sign2": "taurus",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Gemini & Taurus: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Gemini introduces Taurus to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Gemini & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_gemini": {
    "sign1": "gemini",
    "sign2": "gemini",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Gemini & Gemini: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 87,
      "romance": 79,
      "trust": 76,
      "stability": 77,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Gemini and Gemini instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Gemini & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_cancer": {
    "sign1": "gemini",
    "sign2": "cancer",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Gemini & Cancer: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 54,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Gemini introduces Cancer to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Gemini & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_leo": {
    "sign1": "gemini",
    "sign2": "leo",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Gemini & Leo: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Gemini and Leo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Gemini & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_virgo": {
    "sign1": "gemini",
    "sign2": "virgo",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Gemini & Virgo: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 47,
      "romance": 49,
      "trust": 46,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Gemini introduces Virgo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Gemini & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_libra": {
    "sign1": "gemini",
    "sign2": "libra",
    "overallScore": 96,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Gemini & Libra: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 96,
      "communication": 98,
      "romance": 93,
      "trust": 96,
      "stability": 91,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Gemini and Libra instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Will Smith (Libra) & Jada Pinkett Smith (Virgo)",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_scorpio": {
    "sign1": "gemini",
    "sign2": "scorpio",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Gemini & Scorpio: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Gemini's instinctual approach may confuse Scorpio.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Gemini & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_sagittarius": {
    "sign1": "gemini",
    "sign2": "sagittarius",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Gemini & Sagittarius: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 78,
      "communication": 84,
      "romance": 86,
      "trust": 74,
      "stability": 79,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Gemini and Sagittarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Gemini & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_capricorn": {
    "sign1": "gemini",
    "sign2": "capricorn",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Gemini & Capricorn: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Gemini's instinctual approach may confuse Capricorn.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Gemini & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_aquarius": {
    "sign1": "gemini",
    "sign2": "aquarius",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Gemini & Aquarius: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 98,
      "romance": 91,
      "trust": 94,
      "stability": 89,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Gemini and Aquarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Kanye West (Gemini) & Kim Kardashian (Libra/Aquarius dynamics)",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "gemini_pisces": {
    "sign1": "gemini",
    "sign2": "pisces",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Gemini & Pisces: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 44,
      "communication": 47,
      "romance": 49,
      "trust": 46,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Gemini introduces Pisces to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Gemini & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Gemini man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Gemini woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Gemini and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_aries": {
    "sign1": "cancer",
    "sign2": "aries",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Cancer & Aries: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 42,
      "communication": 52,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Cancer introduces Aries to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Cancer & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_taurus": {
    "sign1": "cancer",
    "sign2": "taurus",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Cancer & Taurus: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Cancer and Taurus instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "George Clooney (Taurus) & Amal Clooney (Aquarius)",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_gemini": {
    "sign1": "cancer",
    "sign2": "gemini",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Cancer & Gemini: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 54,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Cancer introduces Gemini to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Cancer & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_cancer": {
    "sign1": "cancer",
    "sign2": "cancer",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Cancer & Cancer: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 86,
      "communication": 82,
      "romance": 79,
      "trust": 82,
      "stability": 81,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Cancer and Cancer instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Cancer & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_leo": {
    "sign1": "cancer",
    "sign2": "leo",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Cancer & Leo: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 52,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Cancer introduces Leo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Cancer & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_virgo": {
    "sign1": "cancer",
    "sign2": "virgo",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Cancer & Virgo: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 89,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Cancer and Virgo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Cancer & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_libra": {
    "sign1": "cancer",
    "sign2": "libra",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Cancer & Libra: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 44,
      "communication": 47,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Cancer introduces Libra to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Cancer & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_scorpio": {
    "sign1": "cancer",
    "sign2": "scorpio",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Cancer & Scorpio: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 98,
      "communication": 97,
      "romance": 94,
      "trust": 97,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Cancer and Scorpio instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Cancer & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_sagittarius": {
    "sign1": "cancer",
    "sign2": "sagittarius",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Cancer & Sagittarius: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 40,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Cancer's instinctual approach may confuse Sagittarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Cancer & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_capricorn": {
    "sign1": "cancer",
    "sign2": "capricorn",
    "overallScore": 84,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Cancer & Capricorn: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 86,
      "communication": 84,
      "romance": 92,
      "trust": 89,
      "stability": 90,
      "lifestyle": 84
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Cancer and Capricorn instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Prince William (Cancer) & Kate Middleton (Capricorn)",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_aquarius": {
    "sign1": "cancer",
    "sign2": "aquarius",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Cancer & Aquarius: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Cancer's instinctual approach may confuse Aquarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Cancer & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "cancer_pisces": {
    "sign1": "cancer",
    "sign2": "pisces",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Cancer & Pisces: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 98,
      "communication": 94,
      "romance": 91,
      "trust": 94,
      "stability": 93,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Cancer and Pisces instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Cancer & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Cancer man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Cancer woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Cancer and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_aries": {
    "sign1": "leo",
    "sign2": "aries",
    "overallScore": 96,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Leo & Aries: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 96,
      "communication": 96,
      "romance": 98,
      "trust": 96,
      "stability": 91,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Leo and Aries instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Sarah Jessica Parker (Aries) & Matthew Broderick (Aries) / Kourtney Kardashian (Aries) & Travis Barker (Scorpio)",
    "genderAdvice": {
      "male_female": "When a Leo man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_taurus": {
    "sign1": "leo",
    "sign2": "taurus",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Leo & Taurus: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 52,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Leo introduces Taurus to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Leo & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_gemini": {
    "sign1": "leo",
    "sign2": "gemini",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Leo & Gemini: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Leo and Gemini instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Leo & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_cancer": {
    "sign1": "leo",
    "sign2": "cancer",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Leo & Cancer: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 52,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Leo introduces Cancer to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Leo & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_leo": {
    "sign1": "leo",
    "sign2": "leo",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Leo & Leo: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 82,
      "romance": 88,
      "trust": 86,
      "stability": 77,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Leo and Leo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Leo & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_virgo": {
    "sign1": "leo",
    "sign2": "virgo",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Leo & Virgo: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 65,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Leo introduces Virgo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Leo & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_libra": {
    "sign1": "leo",
    "sign2": "libra",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Leo & Libra: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Leo and Libra instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Leo & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_scorpio": {
    "sign1": "leo",
    "sign2": "scorpio",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Leo & Scorpio: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 42,
      "communication": 52,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Leo introduces Scorpio to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Leo & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_sagittarius": {
    "sign1": "leo",
    "sign2": "sagittarius",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Leo & Sagittarius: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 98,
      "trust": 94,
      "stability": 89,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Leo and Sagittarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Barack Obama (Leo) & Michelle Obama (Capricorn/Sagittarius cusp) / Jennifer Lopez & Ben Affleck",
    "genderAdvice": {
      "male_female": "When a Leo man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_capricorn": {
    "sign1": "leo",
    "sign2": "capricorn",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Leo & Capricorn: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Leo's instinctual approach may confuse Capricorn.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Leo & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_aquarius": {
    "sign1": "leo",
    "sign2": "aquarius",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Leo & Aquarius: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 78,
      "communication": 84,
      "romance": 86,
      "trust": 84,
      "stability": 82,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Leo and Aquarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Ashton Kutcher (Aquarius) & Mila Kunis (Leo)",
    "genderAdvice": {
      "male_female": "When a Leo man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "leo_pisces": {
    "sign1": "leo",
    "sign2": "pisces",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Leo & Pisces: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 40,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Leo's instinctual approach may confuse Pisces.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Leo & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Leo man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Leo woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Leo and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_aries": {
    "sign1": "virgo",
    "sign2": "aries",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Virgo & Aries: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 49,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Virgo's instinctual approach may confuse Aries.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Virgo & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_taurus": {
    "sign1": "virgo",
    "sign2": "taurus",
    "overallScore": 96,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Virgo & Taurus: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 96,
      "communication": 94,
      "romance": 93,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Virgo and Taurus instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Virgo & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_gemini": {
    "sign1": "virgo",
    "sign2": "gemini",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Virgo & Gemini: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 47,
      "romance": 49,
      "trust": 46,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Virgo introduces Gemini to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Virgo & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_cancer": {
    "sign1": "virgo",
    "sign2": "cancer",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Virgo & Cancer: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 89,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Virgo and Cancer instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Virgo & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_leo": {
    "sign1": "virgo",
    "sign2": "leo",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Virgo & Leo: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 65,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Virgo introduces Leo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Virgo & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_virgo": {
    "sign1": "virgo",
    "sign2": "virgo",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Virgo & Virgo: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 85,
      "romance": 79,
      "trust": 87,
      "stability": 88,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Virgo and Virgo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Virgo & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_libra": {
    "sign1": "virgo",
    "sign2": "libra",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Virgo & Libra: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Virgo introduces Libra to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Virgo & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_scorpio": {
    "sign1": "virgo",
    "sign2": "scorpio",
    "overallScore": 91,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Virgo & Scorpio: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 93,
      "communication": 94,
      "romance": 92,
      "trust": 96,
      "stability": 97,
      "lifestyle": 91
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Virgo and Scorpio instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Ryan Reynolds (Scorpio) & Blake Lively (Virgo)",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_sagittarius": {
    "sign1": "virgo",
    "sign2": "sagittarius",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Virgo & Sagittarius: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 55,
      "romance": 49,
      "trust": 46,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Virgo introduces Sagittarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Jay-Z (Sagittarius) & Beyonc\u00e9 (Virgo)",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_capricorn": {
    "sign1": "virgo",
    "sign2": "capricorn",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Virgo & Capricorn: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 91,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Virgo and Capricorn instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Virgo & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_aquarius": {
    "sign1": "virgo",
    "sign2": "aquarius",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Virgo & Aquarius: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Virgo's instinctual approach may confuse Aquarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Virgo & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "virgo_pisces": {
    "sign1": "virgo",
    "sign2": "pisces",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Virgo & Pisces: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 82,
      "communication": 83,
      "romance": 88,
      "trust": 85,
      "stability": 86,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Virgo and Pisces instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Virgo & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Virgo man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Virgo woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Virgo and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_aries": {
    "sign1": "libra",
    "sign2": "aries",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Libra & Aries: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 78,
      "communication": 84,
      "romance": 86,
      "trust": 80,
      "stability": 79,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Libra and Aries instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Michael Douglas (Libra) & Catherine Zeta-Jones (Libra)",
    "genderAdvice": {
      "male_female": "When a Libra man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_taurus": {
    "sign1": "libra",
    "sign2": "taurus",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Libra & Taurus: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Libra's instinctual approach may confuse Taurus.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Libra & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_gemini": {
    "sign1": "libra",
    "sign2": "gemini",
    "overallScore": 96,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Libra & Gemini: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 96,
      "communication": 98,
      "romance": 93,
      "trust": 96,
      "stability": 91,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Libra and Gemini instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Will Smith (Libra) & Jada Pinkett Smith (Virgo)",
    "genderAdvice": {
      "male_female": "When a Libra man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_cancer": {
    "sign1": "libra",
    "sign2": "cancer",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Libra & Cancer: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 44,
      "communication": 47,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Libra introduces Cancer to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Libra & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_leo": {
    "sign1": "libra",
    "sign2": "leo",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Libra & Leo: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Libra and Leo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Libra & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_virgo": {
    "sign1": "libra",
    "sign2": "virgo",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Libra & Virgo: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Libra introduces Virgo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Libra & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_libra": {
    "sign1": "libra",
    "sign2": "libra",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Libra & Libra: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 87,
      "romance": 79,
      "trust": 82,
      "stability": 77,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Libra and Libra instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Libra & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_scorpio": {
    "sign1": "libra",
    "sign2": "scorpio",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Libra & Scorpio: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 54,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Libra introduces Scorpio to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Libra & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_sagittarius": {
    "sign1": "libra",
    "sign2": "sagittarius",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Libra & Sagittarius: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 85,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Libra and Sagittarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Libra & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_capricorn": {
    "sign1": "libra",
    "sign2": "capricorn",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Libra & Capricorn: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 47,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Libra introduces Capricorn to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Libra & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_aquarius": {
    "sign1": "libra",
    "sign2": "aquarius",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Libra & Aquarius: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 98,
      "romance": 91,
      "trust": 94,
      "stability": 89,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Libra and Aquarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Libra & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "libra_pisces": {
    "sign1": "libra",
    "sign2": "pisces",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Libra & Pisces: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Libra's instinctual approach may confuse Pisces.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Libra & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Libra man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Libra woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Libra and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_aries": {
    "sign1": "scorpio",
    "sign2": "aries",
    "overallScore": 50,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Scorpio & Aries: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 40,
      "communication": 50,
      "romance": 47,
      "trust": 50,
      "stability": 52,
      "lifestyle": 42
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Scorpio introduces Aries to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Scorpio & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_taurus": {
    "sign1": "scorpio",
    "sign2": "taurus",
    "overallScore": 83,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Scorpio & Taurus: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 85,
      "communication": 83,
      "romance": 91,
      "trust": 88,
      "stability": 89,
      "lifestyle": 83
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Scorpio and Taurus instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Scorpio & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_gemini": {
    "sign1": "scorpio",
    "sign2": "gemini",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Scorpio & Gemini: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Scorpio's instinctual approach may confuse Gemini.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Scorpio & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_cancer": {
    "sign1": "scorpio",
    "sign2": "cancer",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Scorpio & Cancer: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 98,
      "communication": 97,
      "romance": 94,
      "trust": 97,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Scorpio and Cancer instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Scorpio & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_leo": {
    "sign1": "scorpio",
    "sign2": "leo",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Scorpio & Leo: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 42,
      "communication": 52,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Scorpio introduces Leo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Scorpio & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_virgo": {
    "sign1": "scorpio",
    "sign2": "virgo",
    "overallScore": 91,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Scorpio & Virgo: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 93,
      "communication": 94,
      "romance": 92,
      "trust": 96,
      "stability": 97,
      "lifestyle": 91
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Scorpio and Virgo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Ryan Reynolds (Scorpio) & Blake Lively (Virgo)",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_libra": {
    "sign1": "scorpio",
    "sign2": "libra",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Scorpio & Libra: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 54,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Scorpio introduces Libra to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Scorpio & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_scorpio": {
    "sign1": "scorpio",
    "sign2": "scorpio",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Scorpio & Scorpio: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 86,
      "communication": 82,
      "romance": 79,
      "trust": 86,
      "stability": 84,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Scorpio and Scorpio instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Scorpio & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_sagittarius": {
    "sign1": "scorpio",
    "sign2": "sagittarius",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Scorpio & Sagittarius: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 52,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Scorpio introduces Sagittarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Scorpio & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_capricorn": {
    "sign1": "scorpio",
    "sign2": "capricorn",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Scorpio & Capricorn: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Scorpio and Capricorn instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Scorpio & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_aquarius": {
    "sign1": "scorpio",
    "sign2": "aquarius",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Scorpio & Aquarius: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 44,
      "communication": 47,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Scorpio introduces Aquarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Scorpio & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "scorpio_pisces": {
    "sign1": "scorpio",
    "sign2": "pisces",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Scorpio & Pisces: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 98,
      "communication": 94,
      "romance": 91,
      "trust": 94,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Scorpio and Pisces instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Goldie Hawn (Scorpio) & Kurt Russell (Pisces)",
    "genderAdvice": {
      "male_female": "When a Scorpio man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Scorpio woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Scorpio and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_aries": {
    "sign1": "sagittarius",
    "sign2": "aries",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Sagittarius & Aries: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 97,
      "communication": 97,
      "romance": 98,
      "trust": 97,
      "stability": 92,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Sagittarius and Aries instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_taurus": {
    "sign1": "sagittarius",
    "sign2": "taurus",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Sagittarius & Taurus: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Sagittarius's instinctual approach may confuse Taurus.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_gemini": {
    "sign1": "sagittarius",
    "sign2": "gemini",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Sagittarius & Gemini: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 78,
      "communication": 84,
      "romance": 86,
      "trust": 74,
      "stability": 79,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Sagittarius and Gemini instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_cancer": {
    "sign1": "sagittarius",
    "sign2": "cancer",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Sagittarius & Cancer: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 40,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Sagittarius's instinctual approach may confuse Cancer.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_leo": {
    "sign1": "sagittarius",
    "sign2": "leo",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Sagittarius & Leo: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 98,
      "trust": 94,
      "stability": 89,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Sagittarius and Leo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Barack Obama (Leo) & Michelle Obama (Capricorn/Sagittarius cusp) / Jennifer Lopez & Ben Affleck",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_virgo": {
    "sign1": "sagittarius",
    "sign2": "virgo",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Sagittarius & Virgo: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 55,
      "romance": 49,
      "trust": 46,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Sagittarius introduces Virgo to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Jay-Z (Sagittarius) & Beyonc\u00e9 (Virgo)",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_libra": {
    "sign1": "sagittarius",
    "sign2": "libra",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Sagittarius & Libra: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 85,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Sagittarius and Libra instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_scorpio": {
    "sign1": "sagittarius",
    "sign2": "scorpio",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Sagittarius & Scorpio: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 52,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Sagittarius introduces Scorpio to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_sagittarius": {
    "sign1": "sagittarius",
    "sign2": "sagittarius",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Sagittarius & Sagittarius: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 82,
      "romance": 88,
      "trust": 76,
      "stability": 77,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Sagittarius and Sagittarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_capricorn": {
    "sign1": "sagittarius",
    "sign2": "capricorn",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Sagittarius & Capricorn: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Sagittarius introduces Capricorn to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_aquarius": {
    "sign1": "sagittarius",
    "sign2": "aquarius",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Sagittarius & Aquarius: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Sagittarius and Aquarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "sagittarius_pisces": {
    "sign1": "sagittarius",
    "sign2": "pisces",
    "overallScore": 55,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Sagittarius & Pisces: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 45,
      "communication": 55,
      "romance": 52,
      "trust": 49,
      "stability": 54,
      "lifestyle": 47
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Sagittarius introduces Pisces to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Fire reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Sagittarius man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Sagittarius woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Sagittarius and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_aries": {
    "sign1": "capricorn",
    "sign2": "aries",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Capricorn & Aries: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 52,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Capricorn introduces Aries to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Capricorn & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_taurus": {
    "sign1": "capricorn",
    "sign2": "taurus",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Capricorn & Taurus: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 91,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Capricorn and Taurus instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "David Beckham (Taurus) & Victoria Beckham (Aries/Taurus)",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_gemini": {
    "sign1": "capricorn",
    "sign2": "gemini",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Capricorn & Gemini: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Capricorn's instinctual approach may confuse Gemini.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Capricorn & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_cancer": {
    "sign1": "capricorn",
    "sign2": "cancer",
    "overallScore": 84,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Capricorn & Cancer: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 86,
      "communication": 84,
      "romance": 92,
      "trust": 89,
      "stability": 90,
      "lifestyle": 84
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Capricorn and Cancer instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Prince William (Cancer) & Kate Middleton (Capricorn)",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_leo": {
    "sign1": "capricorn",
    "sign2": "leo",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Capricorn & Leo: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Capricorn's instinctual approach may confuse Leo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Capricorn & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_virgo": {
    "sign1": "capricorn",
    "sign2": "virgo",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Capricorn & Virgo: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 91,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Capricorn and Virgo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Capricorn & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_libra": {
    "sign1": "capricorn",
    "sign2": "libra",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Capricorn & Libra: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 47,
      "romance": 49,
      "trust": 52,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Dynamic growth: Capricorn introduces Libra to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Capricorn & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_scorpio": {
    "sign1": "capricorn",
    "sign2": "scorpio",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Capricorn & Scorpio: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Capricorn and Scorpio instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Capricorn & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_sagittarius": {
    "sign1": "capricorn",
    "sign2": "sagittarius",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Capricorn & Sagittarius: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Capricorn introduces Sagittarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Capricorn & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_capricorn": {
    "sign1": "capricorn",
    "sign2": "capricorn",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Capricorn & Capricorn: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 82,
      "romance": 79,
      "trust": 87,
      "stability": 88,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Foundation)",
      "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
    },
    "modalitySynergy": "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles.",
    "strengths": [
      "Natural understanding: Capricorn and Capricorn instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Capricorn & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_aquarius": {
    "sign1": "capricorn",
    "sign2": "aquarius",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Capricorn & Aquarius: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Capricorn introduces Aquarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Earth reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Capricorn & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "capricorn_pisces": {
    "sign1": "capricorn",
    "sign2": "pisces",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Capricorn & Pisces: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Capricorn and Pisces instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Capricorn & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Capricorn man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Capricorn woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Capricorn and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_aries": {
    "sign1": "aquarius",
    "sign2": "aries",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Aquarius & Aries: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aquarius and Aries instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Aquarius & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_taurus": {
    "sign1": "aquarius",
    "sign2": "taurus",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Aquarius & Taurus: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 50,
      "communication": 47,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Aquarius introduces Taurus to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aquarius & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_gemini": {
    "sign1": "aquarius",
    "sign2": "gemini",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Aquarius & Gemini: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 98,
      "romance": 91,
      "trust": 94,
      "stability": 89,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aquarius and Gemini instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Justin Timberlake (Aquarius) & Jessica Biel (Pisces)",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_cancer": {
    "sign1": "aquarius",
    "sign2": "cancer",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Aquarius & Cancer: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Aquarius's instinctual approach may confuse Cancer.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Aquarius & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_leo": {
    "sign1": "aquarius",
    "sign2": "leo",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Aquarius & Leo: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 78,
      "communication": 84,
      "romance": 86,
      "trust": 84,
      "stability": 82,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Aquarius and Leo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Ashton Kutcher (Aquarius) & Mila Kunis (Leo)",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_virgo": {
    "sign1": "aquarius",
    "sign2": "virgo",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Aquarius & Virgo: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 44,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Aquarius's instinctual approach may confuse Virgo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Aquarius & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_libra": {
    "sign1": "aquarius",
    "sign2": "libra",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Aquarius & Libra: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 94,
      "communication": 98,
      "romance": 91,
      "trust": 94,
      "stability": 89,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aquarius and Libra instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Aquarius & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_scorpio": {
    "sign1": "aquarius",
    "sign2": "scorpio",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Aquarius & Scorpio: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 44,
      "communication": 47,
      "romance": 49,
      "trust": 56,
      "stability": 54,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Dynamic growth: Aquarius introduces Scorpio to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aquarius & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_sagittarius": {
    "sign1": "aquarius",
    "sign2": "sagittarius",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Aquarius & Sagittarius: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 84,
      "communication": 90,
      "romance": 92,
      "trust": 86,
      "stability": 88,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Catalyst)",
      "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Aquarius and Sagittarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Aquarius & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_capricorn": {
    "sign1": "aquarius",
    "sign2": "capricorn",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Aquarius & Capricorn: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 60,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Aquarius introduces Capricorn to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Earth.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aquarius & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_aquarius": {
    "sign1": "aquarius",
    "sign2": "aquarius",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Aquarius & Aquarius: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 87,
      "romance": 79,
      "trust": 86,
      "stability": 77,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
    },
    "modalitySynergy": "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs.",
    "strengths": [
      "Natural understanding: Aquarius and Aquarius instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Aquarius & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "aquarius_pisces": {
    "sign1": "aquarius",
    "sign2": "pisces",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Aquarius & Pisces: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 54,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Aquarius introduces Pisces to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Air reacts differently to stress than Water.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Aquarius & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Aquarius man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Aquarius woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Aquarius and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_aries": {
    "sign1": "pisces",
    "sign2": "aries",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Pisces & Aries: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 52,
      "communication": 62,
      "romance": 59,
      "trust": 62,
      "stability": 61,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Pisces introduces Aries to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Pisces & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Aries woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Aries man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Aries energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_taurus": {
    "sign1": "pisces",
    "sign2": "taurus",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Pisces & Taurus: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Pisces and Taurus instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Pisces & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Taurus woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Taurus man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Taurus energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_gemini": {
    "sign1": "pisces",
    "sign2": "gemini",
    "overallScore": 52,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Pisces & Gemini: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 44,
      "communication": 47,
      "romance": 49,
      "trust": 46,
      "stability": 51,
      "lifestyle": 44
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Pisces introduces Gemini to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Pisces & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Gemini woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Gemini man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Gemini energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_cancer": {
    "sign1": "pisces",
    "sign2": "cancer",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Pisces & Cancer: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 98,
      "communication": 94,
      "romance": 91,
      "trust": 94,
      "stability": 93,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Pisces and Cancer instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Pisces & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Cancer woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Cancer man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Cancer energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_leo": {
    "sign1": "pisces",
    "sign2": "leo",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Pisces & Leo: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 40,
      "communication": 46,
      "romance": 43,
      "trust": 46,
      "stability": 48,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Pisces's instinctual approach may confuse Leo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Pisces & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Leo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Leo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Leo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_virgo": {
    "sign1": "pisces",
    "sign2": "virgo",
    "overallScore": 80,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Opposition (Cosmic Magnetism & Polar Balance)",
    "headline": "Pisces & Virgo: Magnetic Attraction & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership.",
    "parameters": {
      "emotional": 82,
      "communication": 83,
      "romance": 88,
      "trust": 85,
      "stability": 86,
      "lifestyle": 80
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Pisces and Virgo instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Pisces & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Virgo woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Virgo man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Virgo energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_libra": {
    "sign1": "pisces",
    "sign2": "libra",
    "overallScore": 46,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
    "headline": "Pisces & Libra: Enigmatic Attraction Demanding Patience",
    "summary": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 43,
      "trust": 46,
      "stability": 45,
      "lifestyle": 38
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both individuals to mature emotionally.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Pisces's instinctual approach may confuse Libra.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Pisces & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Libra woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Libra man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Libra energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_scorpio": {
    "sign1": "pisces",
    "sign2": "scorpio",
    "overallScore": 94,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Trine (Divine Soulmate Element)",
    "headline": "Pisces & Scorpio: Effortless Harmony & Natural Soul Resonance",
    "summary": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together.",
    "parameters": {
      "emotional": 98,
      "communication": 94,
      "romance": 91,
      "trust": 94,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Pisces and Scorpio instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Goldie Hawn (Scorpio) & Kurt Russell (Pisces)",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Scorpio woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Scorpio man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Scorpio energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_sagittarius": {
    "sign1": "pisces",
    "sign2": "sagittarius",
    "overallScore": 55,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Square (Passionate Friction & Dynamic Growth)",
    "headline": "Pisces & Sagittarius: Electrifying Spark with Creative Challenge",
    "summary": "Signs at a 90\u00b0 square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise.",
    "parameters": {
      "emotional": 45,
      "communication": 55,
      "romance": 52,
      "trust": 49,
      "stability": 54,
      "lifestyle": 47
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Chemistry)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Dynamic growth: Pisces introduces Sagittarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Fire.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Pisces & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Sagittarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Sagittarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Sagittarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_capricorn": {
    "sign1": "pisces",
    "sign2": "capricorn",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Sextile (Harmonious Elemental Flow)",
    "headline": "Pisces & Capricorn: Stimulating Synergy & Easy Friendship",
    "summary": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 88,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Natural understanding: Pisces and Capricorn instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Pisces & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Capricorn woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Capricorn man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Capricorn energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_aquarius": {
    "sign1": "pisces",
    "sign2": "aquarius",
    "overallScore": 62,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "Semisextile (Neighboring Contrast)",
    "headline": "Pisces & Aquarius: Complementary Growth & Mutual Learning",
    "summary": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced.",
    "parameters": {
      "emotional": 54,
      "communication": 57,
      "romance": 59,
      "trust": 62,
      "stability": 64,
      "lifestyle": 62
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Dynamic growth: Pisces introduces Aquarius to new perspectives and vice versa.",
      "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
      "High potential for joint success when combining your distinct elemental skills."
    ],
    "challenges": [
      "Differing communication styles: Water reacts differently to stress than Air.",
      "Occasional friction over lifestyle pacing or decision-making speed."
    ],
    "tips": [
      "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic dialect.",
      "Celebrate your differences as unique strengths rather than flaws to be corrected."
    ],
    "celebrityCouples": "Celebrated Pisces & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Aquarius woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Aquarius man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Aquarius energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  },
  "pisces_pisces": {
    "sign1": "pisces",
    "sign2": "pisces",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "Conjunction (Mirror Alignment)",
    "headline": "Pisces & Pisces: Deep Mirror Empathy & Shared Instincts",
    "summary": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots.",
    "parameters": {
      "emotional": 86,
      "communication": 82,
      "romance": 79,
      "trust": 76,
      "stability": 81,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Bond)",
      "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
    },
    "modalitySynergy": "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines.",
    "strengths": [
      "Natural understanding: Pisces and Pisces instinctively comprehend each other's core motivations.",
      "Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
      "Shared vision for relationship growth, shared laughter, and high mutual respect."
    ],
    "challenges": [
      "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
      "Assuming your partner always reads your mind without having to voice tender desires."
    ],
    "tips": [
      "Continue scheduling intentional date nights to maintain the electric spark.",
      "Express appreciation for the quiet ways your partner supports your goals.",
      "Celebrate your shared victories with your wider circle of family and friends."
    ],
    "celebrityCouples": "Celebrated Pisces & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "When a Pisces man and a Pisces woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
      "female_male": "When a Pisces woman and a Pisces man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
      "same_sex": "In a union between two souls with Pisces and Pisces energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }
  }
};

// Map for quick sign lookup by id
const ZODIAC_MAP = ZODIAC_SIGNS.reduce((acc, sign) => {
  acc[sign.id] = sign;
  return acc;
}, {});

/**
 * Determine Sun Sign from Date of Birth (Month: 1-12, Day: 1-31)
 * @param {string|Date} dobInput - 'YYYY-MM-DD' or Date object
 * @returns {object} Zodiac sign object
 */
function getZodiacSignFromDOB(dobInput) {
  if (!dobInput) return null;
  
  let month, day;
  if (typeof dobInput === 'string') {
    const parts = dobInput.split('-');
    if (parts.length >= 3) {
      month = parseInt(parts[1], 10);
      day = parseInt(parts[2], 10);
    } else {
      const d = new Date(dobInput);
      month = d.getUTCMonth() + 1;
      day = d.getUTCDate();
    }
  } else if (dobInput instanceof Date) {
    month = dobInput.getUTCMonth() + 1;
    day = dobInput.getUTCDate();
  }

  if (isNaN(month) || isNaN(day)) return null;

  // Astrological Boundaries (Tropical Western Zodiac)
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return ZODIAC_MAP['aries'];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return ZODIAC_MAP['taurus'];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return ZODIAC_MAP['gemini'];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return ZODIAC_MAP['cancer'];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return ZODIAC_MAP['leo'];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return ZODIAC_MAP['virgo'];
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return ZODIAC_MAP['libra'];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return ZODIAC_MAP['scorpio'];
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return ZODIAC_MAP['sagittarius'];
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return ZODIAC_MAP['capricorn'];
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return ZODIAC_MAP['aquarius'];
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return ZODIAC_MAP['pisces'];

  return ZODIAC_MAP['aries'];
}

/**
 * Get Compatibility Data between two Zodiac Sign IDs
 * @param {string} signId1 
 * @param {string} signId2 
 * @returns {object} Compatibility profile
 */
function getPairCompatibility(signId1, signId2) {
  if (!signId1 || !signId2) return null;
  const s1 = signId1.toLowerCase();
  const s2 = signId2.toLowerCase();
  const key = `${s1}_${s2}`;
  if (ZODIAC_PAIRS[key]) {
    return ZODIAC_PAIRS[key];
  }
  // Fallback to reciprocal key if necessary
  const altKey = `${s2}_${s1}`;
  return ZODIAC_PAIRS[altKey] || null;
}

/**
 * Returns Color Classification Details for a given score (0-100)
 * @param {number} score 
 * @returns {object} Color token, classes, label, and hex codes
 */
function getColorShade(score) {
  if (score >= 75) {
    return {
      category: 'green',
      label: 'Harmonious Union (High)',
      bgClass: 'bg-emerald-500/15',
      textClass: 'text-emerald-400',
      borderClass: 'border-emerald-500/40',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
      glowClass: 'shadow-emerald-500/20',
      hex: '#10b981',
      gradient: 'from-emerald-500 to-teal-400',
      emoji: '🟢'
    };
  } else if (score >= 50) {
    return {
      category: 'amber',
      label: 'Dynamic Potential (Moderate)',
      bgClass: 'bg-amber-500/15',
      textClass: 'text-amber-400',
      borderClass: 'border-amber-500/40',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
      glowClass: 'shadow-amber-500/20',
      hex: '#f59e0b',
      gradient: 'from-amber-500 to-yellow-400',
      emoji: '🟡'
    };
  } else {
    return {
      category: 'red',
      label: 'Growth Challenge (Low)',
      bgClass: 'bg-rose-500/15',
      textClass: 'text-rose-400',
      borderClass: 'border-rose-500/40',
      badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/50',
      glowClass: 'shadow-rose-500/20',
      hex: '#f43f5e',
      gradient: 'from-rose-500 to-red-600',
      emoji: '🔴'
    };
  }
}

// Export for browser window and Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ZODIAC_SIGNS,
    ZODIAC_PAIRS,
    ZODIAC_MAP,
    getZodiacSignFromDOB,
    getPairCompatibility,
    getColorShade
  };
}
