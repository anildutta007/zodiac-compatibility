/**
 * Zodiac Compatibility Engine & Knowledge Base
 * Calibrated with Linda Goodman's 'Love Signs' (1978) & 'Sun Signs' (1968)
 * Built for Anil Dutta - ZodiacMatch AI
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
    ],
    "lindaGoodmanMale": "The Aries Man is the gallant knight in shining armor. He demands total devotion and romantic belief in his ideals. Never wound his proud masculine ego; support his crusades, and he will defend you against the whole world.",
    "lindaGoodmanFemale": "The Aries Woman can run a corporation and fix a carburetor, but secretly longs to be swept off her feet by a partner strong enough to match her fiery spirit without ever trying to cage her wings.",
    "lindaGoodmanSecret": "Never be sluggish, deceptive, or overly critical. Champion their dreams with genuine enthusiasm."
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
    ],
    "lindaGoodmanMale": "The Taurus Man is the steady oak tree in life's storm. Deliberate, quietly humorous, and devoted to family security. He will never abandon you for fickle thrills if you make his home a sanctuary of comfort and delicious meals.",
    "lindaGoodmanFemale": "The Taurus Woman is the quintessential Earth Mother. She possesses immense emotional endurance, hates artificial pretense, and creates a cozy haven filled with fragrant flowers, soft linens, and unshakeable fidelity.",
    "lindaGoodmanSecret": "Never push or rush them. Respect their need for contemplation and physical comfort."
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
    ],
    "lindaGoodmanMale": "The Gemini Man is Peter Pan with silver wings on his tongue. Forever youthful, versatile, and mentally agile. If you can change with his changing moods and engage his restless intellect, he will never leave your side.",
    "lindaGoodmanFemale": "The Gemini Woman is a dozen fascinating women wrapped into one captivating bundle. She is a witty companion, an astute conversationalist, and a playful soul who needs intellectual air to breathe freely.",
    "lindaGoodmanSecret": "Keep the conversation alive and interesting. Never smother them with monotonous routine."
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
    ],
    "lindaGoodmanMale": "The Cancer Man hides a vulnerable poet's soul beneath a hard crustacean shell. Deeply devoted to his mother and family, financially prudent, and sentimental. He will hold onto love with unyielding lunar tenacity.",
    "lindaGoodmanFemale": "The Cancer Woman is the Moon maiden: enchantingly gentle, deeply protective, and rich with empathetic intuition. Treat her tender heart with reverence, and her loyalty will outlast the stars themselves.",
    "lindaGoodmanSecret": "Reassure them often of your love and security. Never mock their sensitivities or family treasures."
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
    "inLove": "Grand, generous, and proud. Leo treats their partner like royalty, showering them with gifts, public admiration, and intense romantic devotion.",
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
    ],
    "lindaGoodmanMale": "The Leo Man is the king of beasts: generous, noble, chivalrous, and proud. Stroke his magnificent mane with praise and respect, and he will pour the riches of his solar warmth at your feet.",
    "lindaGoodmanFemale": "The Leo Woman is the golden queen: proud, radiant, and intensely loyal. She demands courting fit for royalty. Treat her with chivalry and dignity, and she will shine light upon your entire life.",
    "lindaGoodmanSecret": "Praise them sincerely in public and private. Never diminish their dignity or wound their pride."
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
    ],
    "lindaGoodmanMale": "The Virgo Man is the pragmatic gentleman. He may not shower you with dramatic theatrical poetry, but he will ensure your car is serviced, your health is protected, and your life is quietly and reliably anchored.",
    "lindaGoodmanFemale": "The Virgo Woman possesses a pristine, clear-eyed intellect and gentle modesty. Her devotion is expressed through thoughtful care, immaculate integrity, and steadfast support through sickness and health.",
    "lindaGoodmanSecret": "Value their quiet acts of service and keep your promises. Practice cleanliness and punctuality."
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
    ],
    "lindaGoodmanMale": "The Libra Man is Venus's charming strategist. He seeks complete harmony, fair play, and aesthetic partnership. He weighs every decision with careful deliberation and blossoms when his home is serene and elegant.",
    "lindaGoodmanFemale": "The Libra Woman blends velvet softness with razor-sharp logic. She is a dedicated companion who looks magnificent by your side and provides brilliant counsel for your joint ambitions.",
    "lindaGoodmanSecret": "Maintain peaceful surroundings and soft tones. Never yell or create harsh, vulgar disharmony."
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
    ],
    "lindaGoodmanMale": "The Scorpio Man possesses piercing hypnotic eyes and an impenetrable inner fortress. His love is all-or-nothing, fierce, and transformative. Give him absolute honesty and unflinching loyalty, and he will love you beyond eternity.",
    "lindaGoodmanFemale": "The Scorpio Woman is an enigmatic enchantress of unmatched depth. She sees straight through superficial facades. Her devotion is monumental; once committed, she is an invincible fortress beside her mate.",
    "lindaGoodmanSecret": "Be entirely truthful and transparent. Never flirt with others to make them jealous."
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
    ],
    "lindaGoodmanMale": "The Sagittarius Man is Jupiter's joyful archer. Honest, generous, and endlessly idealistic. He speaks candidly without malice. Give him broad horizons and trust his integrity, and he will make life a grand adventure.",
    "lindaGoodmanFemale": "The Sagittarius Woman is the spirited explorer: candid, fiercely honest, warm, and playful. She values intellectual camaraderie and open skies. Never smother her with possessiveness, and she will be your joyful companion forever.",
    "lindaGoodmanSecret": "Allow them physical and mental freedom. Laugh with them and never cage their enthusiasm."
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
    ],
    "lindaGoodmanMale": "The Capricorn Man is Saturn's master builder. Reserved on the outside, but deeply sentimental underneath. He ages in reverse, growing warmer and happier with each passing decade. He builds a dynasty of security for his family.",
    "lindaGoodmanFemale": "The Capricorn Woman is a lady of substance, quiet dignity, and formidable competence. She seeks enduring family honor and security. Value her ambitions and treat her with gentle courtesy, and she will be an unyielding rock of devotion.",
    "lindaGoodmanSecret": "Respect their family and long-term career ambitions. Provide quiet stability, not fickle drama."
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
    ],
    "lindaGoodmanMale": "The Aquarius Man is the lightning bolt of tomorrow. Free-spirited, unpredictable, and a friend to humanity. He cannot be forced into conventional molds, but if you love his mind and respect his space, he will be your devoted companion.",
    "lindaGoodmanFemale": "The Aquarius Woman is an unconventional butterfly. Fascinating, open-minded, and authentic. She loves without possessive chains and needs a partner who is first and foremost her truest intellectual confidant.",
    "lindaGoodmanSecret": "Never cage them with jealousy or petty suspicions. Appeal to their intellect and sense of fairness."
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
    ],
    "lindaGoodmanMale": "The Pisces Man is Neptune's gentle poet. Highly intuitive, compassionate, and richly imaginative. He needs a partner who provides warm, grounding encouragement without crushing his delicate creative dreams.",
    "lindaGoodmanFemale": "The Pisces Woman is the mystical mermaid. Soft, tender, and deeply sympathetic. She makes her mate feel cherished, understood, and protective. In her quiet presence, worldly troubles melt away.",
    "lindaGoodmanSecret": "Treat their dreams with gentle care. Provide grounding support without cynicism or harsh rebukes."
  }
];

const ZODIAC_PAIRS = {
  "aries_aries": {
    "sign1": "aries",
    "sign2": "aries",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Aries & Aries: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
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
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Aries Woman (1-1 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Aries Man (1-1 Vibration): She brings Aries's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Aries and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_taurus": {
    "sign1": "aries",
    "sign2": "taurus",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Aries & Taurus: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aries & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Taurus Woman (2-12 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Taurus Man (2-12 Vibration): She brings Aries's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Aries and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_gemini": {
    "sign1": "aries",
    "sign2": "gemini",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Aries & Gemini: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 87,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Gemini Woman (3-11 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Gemini Man (3-11 Vibration): She brings Aries's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Aries and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_cancer": {
    "sign1": "aries",
    "sign2": "cancer",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Aries & Cancer: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 44,
      "communication": 54,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aries & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Cancer Woman (4-10 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Cancer Man (4-10 Vibration): She brings Aries's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Aries and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_leo": {
    "sign1": "aries",
    "sign2": "leo",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Aries & Leo: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
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
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Leo Woman (5-9 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Leo Man (5-9 Vibration): She brings Aries's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Aries and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_virgo": {
    "sign1": "aries",
    "sign2": "virgo",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Aries & Virgo: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 51,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Aries's instinctual approach may baffle Virgo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Aries & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Virgo Woman (6-8 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Virgo Man (6-8 Vibration): She brings Aries's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Aries and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_libra": {
    "sign1": "aries",
    "sign2": "libra",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Aries & Libra: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 80,
      "communication": 86,
      "romance": 88,
      "trust": 82,
      "stability": 81,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Libra Woman (7-7 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Libra Man (7-7 Vibration): She brings Aries's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Aries and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_scorpio": {
    "sign1": "aries",
    "sign2": "scorpio",
    "overallScore": 51,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Aries & Scorpio: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 41,
      "communication": 51,
      "romance": 48,
      "trust": 51,
      "stability": 53,
      "lifestyle": 43
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aries & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Scorpio Woman (6-8 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Scorpio Man (6-8 Vibration): She brings Aries's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Aries and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_sagittarius": {
    "sign1": "aries",
    "sign2": "sagittarius",
    "overallScore": 98,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Aries & Sagittarius: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 98,
      "romance": 98,
      "trust": 98,
      "stability": 93,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Sagittarius Woman (5-9 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Sagittarius Man (5-9 Vibration): She brings Aries's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Aries and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_capricorn": {
    "sign1": "aries",
    "sign2": "capricorn",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Aries & Capricorn: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 54,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aries & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Capricorn Woman (4-10 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Capricorn Man (4-10 Vibration): She brings Aries's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Aries and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_aquarius": {
    "sign1": "aries",
    "sign2": "aquarius",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Aries & Aquarius: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Aquarius Woman (3-11 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Aquarius Man (3-11 Vibration): She brings Aries's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Aries and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aries_pisces": {
    "sign1": "aries",
    "sign2": "pisces",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Aries & Pisces: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 54,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aries & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aries Man with the Pisces Woman (2-12 Vibration): He expresses his masculine planetary energy through Mars, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aries Woman with the Pisces Man (2-12 Vibration): She brings Aries's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Aries and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_aries": {
    "sign1": "taurus",
    "sign2": "aries",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Taurus & Aries: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Taurus & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Aries Woman (2-12 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Aries Man (2-12 Vibration): She brings Taurus's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Taurus and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_taurus": {
    "sign1": "taurus",
    "sign2": "taurus",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Taurus & Taurus: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 82,
      "romance": 79,
      "trust": 87,
      "stability": 88,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Taurus Woman (1-1 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Taurus Man (1-1 Vibration): She brings Taurus's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Taurus and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_gemini": {
    "sign1": "taurus",
    "sign2": "gemini",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Taurus & Gemini: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Taurus & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Gemini Woman (2-12 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Gemini Man (2-12 Vibration): She brings Taurus's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Taurus and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_cancer": {
    "sign1": "taurus",
    "sign2": "cancer",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Taurus & Cancer: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Cancer Woman (3-11 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Cancer Man (3-11 Vibration): She brings Taurus's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Taurus and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_leo": {
    "sign1": "taurus",
    "sign2": "leo",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Taurus & Leo: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 54,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Taurus & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Leo Woman (4-10 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Leo Man (4-10 Vibration): She brings Taurus's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Taurus and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_virgo": {
    "sign1": "taurus",
    "sign2": "virgo",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Taurus & Virgo: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 97,
      "communication": 94,
      "romance": 94,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Virgo Woman (5-9 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Virgo Man (5-9 Vibration): She brings Taurus's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Taurus and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_libra": {
    "sign1": "taurus",
    "sign2": "libra",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Taurus & Libra: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Taurus's instinctual approach may baffle Libra.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Taurus & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Libra Woman (6-8 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Libra Man (6-8 Vibration): She brings Taurus's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Taurus and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_scorpio": {
    "sign1": "taurus",
    "sign2": "scorpio",
    "overallScore": 85,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Taurus & Scorpio: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 87,
      "communication": 85,
      "romance": 93,
      "trust": 90,
      "stability": 91,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Scorpio Woman (7-7 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Scorpio Man (7-7 Vibration): She brings Taurus's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Taurus and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_sagittarius": {
    "sign1": "taurus",
    "sign2": "sagittarius",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Taurus & Sagittarius: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Taurus's instinctual approach may baffle Sagittarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Taurus & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Sagittarius Woman (6-8 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Sagittarius Man (6-8 Vibration): She brings Taurus's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Taurus and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_capricorn": {
    "sign1": "taurus",
    "sign2": "capricorn",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Taurus & Capricorn: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 95,
      "romance": 92,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Capricorn Woman (5-9 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Capricorn Man (5-9 Vibration): She brings Taurus's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Taurus and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_aquarius": {
    "sign1": "taurus",
    "sign2": "aquarius",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Taurus & Aquarius: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 49,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Taurus & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Aquarius Woman (4-10 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Aquarius Man (4-10 Vibration): She brings Taurus's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Taurus and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "taurus_pisces": {
    "sign1": "taurus",
    "sign2": "pisces",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Taurus & Pisces: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Taurus Man with the Pisces Woman (3-11 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Taurus Woman with the Pisces Man (3-11 Vibration): She brings Taurus's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Taurus and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_aries": {
    "sign1": "gemini",
    "sign2": "aries",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Gemini & Aries: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 87,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Aries Woman (3-11 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Aries Man (3-11 Vibration): She brings Gemini's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Gemini and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_taurus": {
    "sign1": "gemini",
    "sign2": "taurus",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Gemini & Taurus: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Gemini & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Taurus Woman (2-12 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Taurus Man (2-12 Vibration): She brings Gemini's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Gemini and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_gemini": {
    "sign1": "gemini",
    "sign2": "gemini",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Gemini & Gemini: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
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
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Gemini Woman (1-1 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Gemini Man (1-1 Vibration): She brings Gemini's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Gemini and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_cancer": {
    "sign1": "gemini",
    "sign2": "cancer",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Gemini & Cancer: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 56,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Gemini & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Cancer Woman (2-12 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Cancer Man (2-12 Vibration): She brings Gemini's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Gemini and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_leo": {
    "sign1": "gemini",
    "sign2": "leo",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Gemini & Leo: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Leo Woman (3-11 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Leo Man (3-11 Vibration): She brings Gemini's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Gemini and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_virgo": {
    "sign1": "gemini",
    "sign2": "virgo",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Gemini & Virgo: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 49,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Gemini & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Virgo Woman (4-10 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Virgo Man (4-10 Vibration): She brings Gemini's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Gemini and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_libra": {
    "sign1": "gemini",
    "sign2": "libra",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Gemini & Libra: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 97,
      "communication": 98,
      "romance": 94,
      "trust": 97,
      "stability": 92,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Libra Woman (5-9 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Libra Man (5-9 Vibration): She brings Gemini's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Gemini and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_scorpio": {
    "sign1": "gemini",
    "sign2": "scorpio",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Gemini & Scorpio: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Gemini's instinctual approach may baffle Scorpio.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Gemini & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Scorpio Woman (6-8 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Scorpio Man (6-8 Vibration): She brings Gemini's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Gemini and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_sagittarius": {
    "sign1": "gemini",
    "sign2": "sagittarius",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Gemini & Sagittarius: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 80,
      "communication": 86,
      "romance": 88,
      "trust": 76,
      "stability": 81,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Sagittarius Woman (7-7 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Sagittarius Man (7-7 Vibration): She brings Gemini's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Gemini and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_capricorn": {
    "sign1": "gemini",
    "sign2": "capricorn",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Gemini & Capricorn: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Gemini's instinctual approach may baffle Capricorn.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Gemini & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Capricorn Woman (6-8 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Capricorn Man (6-8 Vibration): She brings Gemini's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Gemini and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_aquarius": {
    "sign1": "gemini",
    "sign2": "aquarius",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Gemini & Aquarius: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 98,
      "romance": 92,
      "trust": 95,
      "stability": 90,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Aquarius Woman (5-9 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Aquarius Man (5-9 Vibration): She brings Gemini's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Gemini and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "gemini_pisces": {
    "sign1": "gemini",
    "sign2": "pisces",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Gemini & Pisces: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 46,
      "communication": 49,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Gemini & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Gemini Man with the Pisces Woman (4-10 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Gemini Woman with the Pisces Man (4-10 Vibration): She brings Gemini's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Gemini and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_aries": {
    "sign1": "cancer",
    "sign2": "aries",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Cancer & Aries: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 44,
      "communication": 54,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Cancer & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Aries Woman (4-10 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Aries Man (4-10 Vibration): She brings Cancer's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Cancer and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_taurus": {
    "sign1": "cancer",
    "sign2": "taurus",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Cancer & Taurus: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Taurus Woman (3-11 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Taurus Man (3-11 Vibration): She brings Cancer's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Cancer and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_gemini": {
    "sign1": "cancer",
    "sign2": "gemini",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Cancer & Gemini: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 56,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Cancer & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Gemini Woman (2-12 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Gemini Man (2-12 Vibration): She brings Cancer's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Cancer and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_cancer": {
    "sign1": "cancer",
    "sign2": "cancer",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Cancer & Cancer: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
    "parameters": {
      "emotional": 86,
      "communication": 82,
      "romance": 79,
      "trust": 82,
      "stability": 81,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Cancer Woman (1-1 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Cancer Man (1-1 Vibration): She brings Cancer's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Cancer and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_leo": {
    "sign1": "cancer",
    "sign2": "leo",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Cancer & Leo: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 54,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Cancer & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Leo Woman (2-12 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Leo Man (2-12 Vibration): She brings Cancer's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Cancer and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_virgo": {
    "sign1": "cancer",
    "sign2": "virgo",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Cancer & Virgo: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 91,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Virgo Woman (3-11 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Virgo Man (3-11 Vibration): She brings Cancer's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Cancer and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_libra": {
    "sign1": "cancer",
    "sign2": "libra",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Cancer & Libra: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 46,
      "communication": 49,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Cancer & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Libra Woman (4-10 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Libra Man (4-10 Vibration): She brings Cancer's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Cancer and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_scorpio": {
    "sign1": "cancer",
    "sign2": "scorpio",
    "overallScore": 98,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Cancer & Scorpio: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 98,
      "romance": 95,
      "trust": 98,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Scorpio Woman (5-9 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Scorpio Man (5-9 Vibration): She brings Cancer's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Cancer and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_sagittarius": {
    "sign1": "cancer",
    "sign2": "sagittarius",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Cancer & Sagittarius: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 40,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Cancer's instinctual approach may baffle Sagittarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Cancer & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Sagittarius Woman (6-8 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Sagittarius Man (6-8 Vibration): She brings Cancer's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Cancer and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_capricorn": {
    "sign1": "cancer",
    "sign2": "capricorn",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Cancer & Capricorn: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 94,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Capricorn Woman (7-7 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Capricorn Man (7-7 Vibration): She brings Cancer's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Cancer and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_aquarius": {
    "sign1": "cancer",
    "sign2": "aquarius",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Cancer & Aquarius: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Cancer's instinctual approach may baffle Aquarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Cancer & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Aquarius Woman (6-8 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Aquarius Man (6-8 Vibration): She brings Cancer's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Cancer and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "cancer_pisces": {
    "sign1": "cancer",
    "sign2": "pisces",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Cancer & Pisces: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 95,
      "romance": 92,
      "trust": 95,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Cancer Man with the Pisces Woman (5-9 Vibration): He expresses his masculine planetary energy through Moon, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Cancer Woman with the Pisces Man (5-9 Vibration): She brings Cancer's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Cancer and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_aries": {
    "sign1": "leo",
    "sign2": "aries",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Leo & Aries: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
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
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Aries Woman (5-9 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Aries Man (5-9 Vibration): She brings Leo's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Leo and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_taurus": {
    "sign1": "leo",
    "sign2": "taurus",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Leo & Taurus: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 54,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Leo & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Taurus Woman (4-10 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Taurus Man (4-10 Vibration): She brings Leo's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Leo and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_gemini": {
    "sign1": "leo",
    "sign2": "gemini",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Leo & Gemini: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Gemini Woman (3-11 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Gemini Man (3-11 Vibration): She brings Leo's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Leo and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_cancer": {
    "sign1": "leo",
    "sign2": "cancer",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Leo & Cancer: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 54,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Leo & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Cancer Woman (2-12 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Cancer Man (2-12 Vibration): She brings Leo's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Leo and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_leo": {
    "sign1": "leo",
    "sign2": "leo",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Leo & Leo: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
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
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Leo Woman (1-1 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Leo Man (1-1 Vibration): She brings Leo's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Leo and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_virgo": {
    "sign1": "leo",
    "sign2": "virgo",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Leo & Virgo: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 67,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Leo & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Virgo Woman (2-12 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Virgo Man (2-12 Vibration): She brings Leo's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Leo and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_libra": {
    "sign1": "leo",
    "sign2": "libra",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Leo & Libra: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Libra Woman (3-11 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Libra Man (3-11 Vibration): She brings Leo's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Leo and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_scorpio": {
    "sign1": "leo",
    "sign2": "scorpio",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Leo & Scorpio: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 44,
      "communication": 54,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Leo & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Scorpio Woman (4-10 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Scorpio Man (4-10 Vibration): She brings Leo's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Leo and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_sagittarius": {
    "sign1": "leo",
    "sign2": "sagittarius",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Leo & Sagittarius: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 95,
      "romance": 98,
      "trust": 95,
      "stability": 90,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Sagittarius Woman (5-9 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Sagittarius Man (5-9 Vibration): She brings Leo's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Leo and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_capricorn": {
    "sign1": "leo",
    "sign2": "capricorn",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Leo & Capricorn: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Leo's instinctual approach may baffle Capricorn.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Leo & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Capricorn Woman (6-8 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Capricorn Man (6-8 Vibration): She brings Leo's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Leo and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_aquarius": {
    "sign1": "leo",
    "sign2": "aquarius",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Leo & Aquarius: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 80,
      "communication": 86,
      "romance": 88,
      "trust": 86,
      "stability": 84,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Aquarius Woman (7-7 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Aquarius Man (7-7 Vibration): She brings Leo's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Leo and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "leo_pisces": {
    "sign1": "leo",
    "sign2": "pisces",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Leo & Pisces: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 40,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Leo's instinctual approach may baffle Pisces.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Leo & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Leo Man with the Pisces Woman (6-8 Vibration): He expresses his masculine planetary energy through Sun, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Leo Woman with the Pisces Man (6-8 Vibration): She brings Leo's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Leo and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_aries": {
    "sign1": "virgo",
    "sign2": "aries",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Virgo & Aries: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 51,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Virgo's instinctual approach may baffle Aries.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Virgo & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Aries Woman (6-8 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Aries Man (6-8 Vibration): She brings Virgo's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Virgo and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_taurus": {
    "sign1": "virgo",
    "sign2": "taurus",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Virgo & Taurus: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 97,
      "communication": 94,
      "romance": 94,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Taurus Woman (5-9 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Taurus Man (5-9 Vibration): She brings Virgo's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Virgo and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_gemini": {
    "sign1": "virgo",
    "sign2": "gemini",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Virgo & Gemini: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 49,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Virgo & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Gemini Woman (4-10 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Gemini Man (4-10 Vibration): She brings Virgo's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Virgo and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_cancer": {
    "sign1": "virgo",
    "sign2": "cancer",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Virgo & Cancer: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 91,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Cancer Woman (3-11 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Cancer Man (3-11 Vibration): She brings Virgo's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Virgo and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_leo": {
    "sign1": "virgo",
    "sign2": "leo",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Virgo & Leo: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 67,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Virgo & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Leo Woman (2-12 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Leo Man (2-12 Vibration): She brings Virgo's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Virgo and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_virgo": {
    "sign1": "virgo",
    "sign2": "virgo",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Virgo & Virgo: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 85,
      "romance": 79,
      "trust": 87,
      "stability": 88,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Virgo Woman (1-1 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Virgo Man (1-1 Vibration): She brings Virgo's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Virgo and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_libra": {
    "sign1": "virgo",
    "sign2": "libra",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Virgo & Libra: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Virgo & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Libra Woman (2-12 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Libra Man (2-12 Vibration): She brings Virgo's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Virgo and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_scorpio": {
    "sign1": "virgo",
    "sign2": "scorpio",
    "overallScore": 92,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Virgo & Scorpio: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 92,
      "trust": 97,
      "stability": 98,
      "lifestyle": 92
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Scorpio Woman (3-11 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Scorpio Man (3-11 Vibration): She brings Virgo's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Virgo and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_sagittarius": {
    "sign1": "virgo",
    "sign2": "sagittarius",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Virgo & Sagittarius: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 57,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Jay-Z (Sagittarius) & Beyonc\u00e9 (Virgo)",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Sagittarius Woman (4-10 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Sagittarius Man (4-10 Vibration): She brings Virgo's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Virgo and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_capricorn": {
    "sign1": "virgo",
    "sign2": "capricorn",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Virgo & Capricorn: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 94,
      "romance": 92,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Capricorn Woman (5-9 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Capricorn Man (5-9 Vibration): She brings Virgo's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Virgo and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_aquarius": {
    "sign1": "virgo",
    "sign2": "aquarius",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Virgo & Aquarius: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Virgo's instinctual approach may baffle Aquarius.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Virgo & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Aquarius Woman (6-8 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Aquarius Man (6-8 Vibration): She brings Virgo's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Virgo and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "virgo_pisces": {
    "sign1": "virgo",
    "sign2": "pisces",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Virgo & Pisces: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 84,
      "communication": 85,
      "romance": 90,
      "trust": 87,
      "stability": 88,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Virgo Man with the Pisces Woman (7-7 Vibration): He expresses his masculine planetary energy through Mercury, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Virgo Woman with the Pisces Man (7-7 Vibration): She brings Virgo's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Virgo and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_aries": {
    "sign1": "libra",
    "sign2": "aries",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Libra & Aries: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 80,
      "communication": 86,
      "romance": 88,
      "trust": 82,
      "stability": 81,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Aries Woman (7-7 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Aries Man (7-7 Vibration): She brings Libra's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Libra and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_taurus": {
    "sign1": "libra",
    "sign2": "taurus",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Libra & Taurus: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Libra's instinctual approach may baffle Taurus.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Libra & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Taurus Woman (6-8 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Taurus Man (6-8 Vibration): She brings Libra's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Libra and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_gemini": {
    "sign1": "libra",
    "sign2": "gemini",
    "overallScore": 97,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Libra & Gemini: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 97,
      "communication": 98,
      "romance": 94,
      "trust": 97,
      "stability": 92,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Gemini Woman (5-9 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Gemini Man (5-9 Vibration): She brings Libra's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Libra and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_cancer": {
    "sign1": "libra",
    "sign2": "cancer",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Libra & Cancer: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 46,
      "communication": 49,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Cancer communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Libra & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Cancer Woman (4-10 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Cancer Man (4-10 Vibration): She brings Libra's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Libra and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_leo": {
    "sign1": "libra",
    "sign2": "leo",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Libra & Leo: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Leo Woman (3-11 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Leo Man (3-11 Vibration): She brings Libra's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Libra and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_virgo": {
    "sign1": "libra",
    "sign2": "virgo",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Libra & Virgo: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Libra & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Virgo Woman (2-12 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Virgo Man (2-12 Vibration): She brings Libra's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Libra and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_libra": {
    "sign1": "libra",
    "sign2": "libra",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Libra & Libra: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
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
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Libra Woman (1-1 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Libra Man (1-1 Vibration): She brings Libra's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Libra and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_scorpio": {
    "sign1": "libra",
    "sign2": "scorpio",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Libra & Scorpio: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 56,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Libra & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Scorpio Woman (2-12 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Scorpio Man (2-12 Vibration): She brings Libra's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Libra and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_sagittarius": {
    "sign1": "libra",
    "sign2": "sagittarius",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Libra & Sagittarius: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 87,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Sagittarius Woman (3-11 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Sagittarius Man (3-11 Vibration): She brings Libra's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Libra and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_capricorn": {
    "sign1": "libra",
    "sign2": "capricorn",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Libra & Capricorn: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 49,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Libra & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Capricorn Woman (4-10 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Capricorn Man (4-10 Vibration): She brings Libra's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Libra and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_aquarius": {
    "sign1": "libra",
    "sign2": "aquarius",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Libra & Aquarius: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 98,
      "romance": 92,
      "trust": 95,
      "stability": 90,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Aquarius Woman (5-9 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Aquarius Man (5-9 Vibration): She brings Libra's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Libra and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "libra_pisces": {
    "sign1": "libra",
    "sign2": "pisces",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Libra & Pisces: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Libra's instinctual approach may baffle Pisces.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Libra & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Libra Man with the Pisces Woman (6-8 Vibration): He expresses his masculine planetary energy through Venus, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Libra Woman with the Pisces Man (6-8 Vibration): She brings Libra's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Libra and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_aries": {
    "sign1": "scorpio",
    "sign2": "aries",
    "overallScore": 51,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Scorpio & Aries: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 41,
      "communication": 51,
      "romance": 48,
      "trust": 51,
      "stability": 53,
      "lifestyle": 43
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Scorpio & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Aries Woman (6-8 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Aries Man (6-8 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Scorpio and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_taurus": {
    "sign1": "scorpio",
    "sign2": "taurus",
    "overallScore": 85,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Scorpio & Taurus: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 87,
      "communication": 85,
      "romance": 93,
      "trust": 90,
      "stability": 91,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Taurus Woman (7-7 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Taurus Man (7-7 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Scorpio and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_gemini": {
    "sign1": "scorpio",
    "sign2": "gemini",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Scorpio & Gemini: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Scorpio's instinctual approach may baffle Gemini.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Scorpio & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Gemini Woman (6-8 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Gemini Man (6-8 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Scorpio and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_cancer": {
    "sign1": "scorpio",
    "sign2": "cancer",
    "overallScore": 98,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Scorpio & Cancer: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 98,
      "romance": 95,
      "trust": 98,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Cancer Woman (5-9 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Cancer Man (5-9 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Scorpio and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_leo": {
    "sign1": "scorpio",
    "sign2": "leo",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Scorpio & Leo: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 44,
      "communication": 54,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Leo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Scorpio & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Leo Woman (4-10 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Leo Man (4-10 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Scorpio and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_virgo": {
    "sign1": "scorpio",
    "sign2": "virgo",
    "overallScore": 92,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Scorpio & Virgo: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 94,
      "communication": 94,
      "romance": 92,
      "trust": 97,
      "stability": 98,
      "lifestyle": 92
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Virgo Woman (3-11 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Virgo Man (3-11 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Scorpio and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_libra": {
    "sign1": "scorpio",
    "sign2": "libra",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Scorpio & Libra: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 56,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Scorpio & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Libra Woman (2-12 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Libra Man (2-12 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Scorpio and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_scorpio": {
    "sign1": "scorpio",
    "sign2": "scorpio",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Scorpio & Scorpio: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
    "parameters": {
      "emotional": 86,
      "communication": 82,
      "romance": 79,
      "trust": 86,
      "stability": 84,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Scorpio Woman (1-1 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Scorpio Man (1-1 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Scorpio and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_sagittarius": {
    "sign1": "scorpio",
    "sign2": "sagittarius",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Scorpio & Sagittarius: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 54,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Scorpio & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Sagittarius Woman (2-12 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Sagittarius Man (2-12 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Scorpio and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_capricorn": {
    "sign1": "scorpio",
    "sign2": "capricorn",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Scorpio & Capricorn: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Capricorn Woman (3-11 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Capricorn Man (3-11 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Scorpio and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_aquarius": {
    "sign1": "scorpio",
    "sign2": "aquarius",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Scorpio & Aquarius: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 46,
      "communication": 49,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Scorpio & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Aquarius Woman (4-10 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Aquarius Man (4-10 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Scorpio and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "scorpio_pisces": {
    "sign1": "scorpio",
    "sign2": "pisces",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Scorpio & Pisces: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 95,
      "romance": 92,
      "trust": 95,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Scorpio Man with the Pisces Woman (5-9 Vibration): He expresses his masculine planetary energy through Pluto & Mars, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Scorpio Woman with the Pisces Man (5-9 Vibration): She brings Scorpio's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Scorpio and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_aries": {
    "sign1": "sagittarius",
    "sign2": "aries",
    "overallScore": 98,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Sagittarius & Aries: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 98,
      "romance": 98,
      "trust": 98,
      "stability": 93,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Aries Woman (5-9 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Aries Man (5-9 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Sagittarius and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_taurus": {
    "sign1": "sagittarius",
    "sign2": "taurus",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Sagittarius & Taurus: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Sagittarius's instinctual approach may baffle Taurus.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Taurus Woman (6-8 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Taurus Man (6-8 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Sagittarius and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_gemini": {
    "sign1": "sagittarius",
    "sign2": "gemini",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Sagittarius & Gemini: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 80,
      "communication": 86,
      "romance": 88,
      "trust": 76,
      "stability": 81,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Gemini Woman (7-7 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Gemini Man (7-7 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Sagittarius and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_cancer": {
    "sign1": "sagittarius",
    "sign2": "cancer",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Sagittarius & Cancer: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 40,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Sagittarius's instinctual approach may baffle Cancer.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Cancer Woman (6-8 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Cancer Man (6-8 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Sagittarius and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_leo": {
    "sign1": "sagittarius",
    "sign2": "leo",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Sagittarius & Leo: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 95,
      "romance": 98,
      "trust": 95,
      "stability": 90,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Fire (Electric Blaze)",
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Leo Woman (5-9 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Leo Man (5-9 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Sagittarius and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_virgo": {
    "sign1": "sagittarius",
    "sign2": "virgo",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Sagittarius & Virgo: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 57,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Virgo communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Jay-Z (Sagittarius) & Beyonc\u00e9 (Virgo)",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Virgo Woman (4-10 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Virgo Man (4-10 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Sagittarius and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_libra": {
    "sign1": "sagittarius",
    "sign2": "libra",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Sagittarius & Libra: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 87,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Libra Woman (3-11 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Libra Man (3-11 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Sagittarius and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_scorpio": {
    "sign1": "sagittarius",
    "sign2": "scorpio",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Sagittarius & Scorpio: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 54,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Scorpio Woman (2-12 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Scorpio Man (2-12 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Sagittarius and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_sagittarius": {
    "sign1": "sagittarius",
    "sign2": "sagittarius",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Sagittarius & Sagittarius: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
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
      "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Sagittarius Woman (1-1 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Sagittarius Man (1-1 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Sagittarius and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_capricorn": {
    "sign1": "sagittarius",
    "sign2": "capricorn",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Sagittarius & Capricorn: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Capricorn Woman (2-12 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Capricorn Man (2-12 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Sagittarius and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_aquarius": {
    "sign1": "sagittarius",
    "sign2": "aquarius",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Sagittarius & Aquarius: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Aquarius Woman (3-11 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Aquarius Man (3-11 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Sagittarius and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "sagittarius_pisces": {
    "sign1": "sagittarius",
    "sign2": "pisces",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Sagittarius & Pisces: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 44,
      "communication": 54,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Sagittarius & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Sagittarius Man with the Pisces Woman (4-10 Vibration): He expresses his masculine planetary energy through Jupiter, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Sagittarius Woman with the Pisces Man (4-10 Vibration): She brings Sagittarius's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Sagittarius and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_aries": {
    "sign1": "capricorn",
    "sign2": "aries",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Capricorn & Aries: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 54,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Capricorn & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Aries Woman (4-10 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Aries Man (4-10 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Capricorn and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_taurus": {
    "sign1": "capricorn",
    "sign2": "taurus",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Capricorn & Taurus: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 95,
      "romance": 92,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Taurus Woman (5-9 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Taurus Man (5-9 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Capricorn and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_gemini": {
    "sign1": "capricorn",
    "sign2": "gemini",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Capricorn & Gemini: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Cardinal + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Capricorn's instinctual approach may baffle Gemini.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Capricorn & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Gemini Woman (6-8 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Gemini Man (6-8 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Capricorn and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_cancer": {
    "sign1": "capricorn",
    "sign2": "cancer",
    "overallScore": 86,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Capricorn & Cancer: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 88,
      "communication": 86,
      "romance": 94,
      "trust": 91,
      "stability": 92,
      "lifestyle": 86
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Cancer Woman (7-7 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Cancer Man (7-7 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Capricorn and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_leo": {
    "sign1": "capricorn",
    "sign2": "leo",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Capricorn & Leo: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
    },
    "modalitySynergy": "Cardinal + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Capricorn's instinctual approach may baffle Leo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Capricorn & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Leo Woman (6-8 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Leo Man (6-8 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Capricorn and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_virgo": {
    "sign1": "capricorn",
    "sign2": "virgo",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Capricorn & Virgo: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 94,
      "romance": 92,
      "trust": 98,
      "stability": 98,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Virgo Woman (5-9 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Virgo Man (5-9 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Capricorn and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_libra": {
    "sign1": "capricorn",
    "sign2": "libra",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Capricorn & Libra: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 49,
      "romance": 51,
      "trust": 54,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Libra communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Capricorn & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Libra Woman (4-10 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Libra Man (4-10 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Capricorn and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_scorpio": {
    "sign1": "capricorn",
    "sign2": "scorpio",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Capricorn & Scorpio: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Scorpio Woman (3-11 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Scorpio Man (3-11 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Capricorn and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_sagittarius": {
    "sign1": "capricorn",
    "sign2": "sagittarius",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Capricorn & Sagittarius: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Earth (Hearthstone Fire)",
      "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Capricorn & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Sagittarius Woman (2-12 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Sagittarius Man (2-12 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Capricorn and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_capricorn": {
    "sign1": "capricorn",
    "sign2": "capricorn",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Capricorn & Capricorn: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
    "parameters": {
      "emotional": 82,
      "communication": 82,
      "romance": 79,
      "trust": 87,
      "stability": 88,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Earth (Unshakeable Bedrock)",
      "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
    },
    "modalitySynergy": "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Capricorn Woman (1-1 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Capricorn Man (1-1 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Capricorn and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_aquarius": {
    "sign1": "capricorn",
    "sign2": "aquarius",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Capricorn & Aquarius: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Capricorn & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Aquarius Woman (2-12 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Aquarius Man (2-12 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Capricorn and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "capricorn_pisces": {
    "sign1": "capricorn",
    "sign2": "pisces",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Capricorn & Pisces: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Capricorn Man with the Pisces Woman (3-11 Vibration): He expresses his masculine planetary energy through Saturn, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Capricorn Woman with the Pisces Man (3-11 Vibration): She brings Capricorn's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Capricorn and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_aries": {
    "sign1": "aquarius",
    "sign2": "aries",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Aquarius & Aries: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Aries Woman (3-11 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Aries Man (3-11 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Aquarius and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_taurus": {
    "sign1": "aquarius",
    "sign2": "taurus",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Aquarius & Taurus: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 52,
      "communication": 49,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Taurus communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aquarius & Taurus cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Taurus Woman (4-10 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Taurus Man (4-10 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Aquarius and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_gemini": {
    "sign1": "aquarius",
    "sign2": "gemini",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Aquarius & Gemini: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 98,
      "romance": 92,
      "trust": 95,
      "stability": 90,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Gemini Woman (5-9 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Gemini Man (5-9 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Aquarius and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_cancer": {
    "sign1": "aquarius",
    "sign2": "cancer",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Aquarius & Cancer: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Fixed + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Aquarius's instinctual approach may baffle Cancer.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Aquarius & Cancer cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Cancer Woman (6-8 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Cancer Man (6-8 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Aquarius and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_leo": {
    "sign1": "aquarius",
    "sign2": "leo",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Aquarius & Leo: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 80,
      "communication": 86,
      "romance": 88,
      "trust": 86,
      "stability": 84,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Leo Woman (7-7 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Leo Man (7-7 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Aquarius and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_virgo": {
    "sign1": "aquarius",
    "sign2": "virgo",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Aquarius & Virgo: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 46,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
    },
    "modalitySynergy": "Fixed + Mutable: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Aquarius's instinctual approach may baffle Virgo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Aquarius & Virgo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Virgo Woman (6-8 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Virgo Man (6-8 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Aquarius and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_libra": {
    "sign1": "aquarius",
    "sign2": "libra",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Aquarius & Libra: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 95,
      "communication": 98,
      "romance": 92,
      "trust": 95,
      "stability": 90,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Air (Mental Telepathy)",
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Libra Woman (5-9 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Libra Man (5-9 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Aquarius and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_scorpio": {
    "sign1": "aquarius",
    "sign2": "scorpio",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Aquarius & Scorpio: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 46,
      "communication": 49,
      "romance": 51,
      "trust": 58,
      "stability": 56,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Scorpio communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aquarius & Scorpio cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Scorpio Woman (4-10 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Scorpio Man (4-10 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Aquarius and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_sagittarius": {
    "sign1": "aquarius",
    "sign2": "sagittarius",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Aquarius & Sagittarius: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 86,
      "communication": 92,
      "romance": 94,
      "trust": 88,
      "stability": 90,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Fire & Air (Inspirational Breeze)",
      "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Sagittarius Woman (3-11 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Sagittarius Man (3-11 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Aquarius and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_capricorn": {
    "sign1": "aquarius",
    "sign2": "capricorn",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Aquarius & Capricorn: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 62,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Earth & Air (Pragmatic Strategy)",
      "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Capricorn communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aquarius & Capricorn cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Capricorn Woman (2-12 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Capricorn Man (2-12 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Aquarius and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_aquarius": {
    "sign1": "aquarius",
    "sign2": "aquarius",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Aquarius & Aquarius: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
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
      "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
    },
    "modalitySynergy": "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Aquarius Woman (1-1 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Aquarius Man (1-1 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Aquarius and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "aquarius_pisces": {
    "sign1": "aquarius",
    "sign2": "pisces",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Aquarius & Pisces: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 56,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Pisces communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Aquarius & Pisces cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Aquarius Man with the Pisces Woman (2-12 Vibration): He expresses his masculine planetary energy through Uranus & Saturn, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Aquarius Woman with the Pisces Man (2-12 Vibration): She brings Aquarius's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Aquarius and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_aries": {
    "sign1": "pisces",
    "sign2": "aries",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Pisces & Aries: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 54,
      "communication": 64,
      "romance": 61,
      "trust": 64,
      "stability": 63,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aries communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Pisces & Aries cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Aries Woman (2-12 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Aries Man (2-12 Vibration): She brings Pisces's radiant initiative to the union, while he offers Aries's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Pisces and Aries celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_taurus": {
    "sign1": "pisces",
    "sign2": "taurus",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Pisces & Taurus: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Taurus Woman (3-11 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Taurus Man (3-11 Vibration): She brings Pisces's radiant initiative to the union, while he offers Taurus's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Pisces and Taurus celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_gemini": {
    "sign1": "pisces",
    "sign2": "gemini",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Pisces & Gemini: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 46,
      "communication": 49,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Gemini communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Pisces & Gemini cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Gemini Woman (4-10 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Gemini Man (4-10 Vibration): She brings Pisces's radiant initiative to the union, while he offers Gemini's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Pisces and Gemini celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_cancer": {
    "sign1": "pisces",
    "sign2": "cancer",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Pisces & Cancer: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 95,
      "romance": 92,
      "trust": 95,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Cancer Woman (5-9 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Moon grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Cancer Man (5-9 Vibration): She brings Pisces's radiant initiative to the union, while he offers Cancer's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Pisces and Cancer celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_leo": {
    "sign1": "pisces",
    "sign2": "leo",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Pisces & Leo: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 40,
      "communication": 48,
      "romance": 45,
      "trust": 48,
      "stability": 50,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Mutable + Fixed: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Pisces's instinctual approach may baffle Leo.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Pisces & Leo cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Leo Woman (6-8 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Sun grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Leo Man (6-8 Vibration): She brings Pisces's radiant initiative to the union, while he offers Leo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Pisces and Leo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_virgo": {
    "sign1": "pisces",
    "sign2": "virgo",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "vibrationCode": "7-7",
    "lindaVibration": {
      "code": "7-7",
      "title": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
      "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
      "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
      "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    },
    "headline": "Pisces & Virgo: Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "summary": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "parameters": {
      "emotional": 84,
      "communication": 85,
      "romance": 90,
      "trust": 87,
      "stability": 88,
      "lifestyle": 82
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Virgo Woman (7-7 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Mercury grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Virgo Man (7-7 Vibration): She brings Pisces's radiant initiative to the union, while he offers Virgo's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (7-7 Vibration): Two souls united under Pisces and Virgo celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_libra": {
    "sign1": "pisces",
    "sign2": "libra",
    "overallScore": 48,
    "colorCategory": "red",
    "shadeLabel": "Growth Challenge",
    "aspectName": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "vibrationCode": "6-8",
    "lindaVibration": {
      "code": "6-8",
      "title": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
      "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
      "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
      "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    "headline": "Pisces & Libra: Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "summary": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "parameters": {
      "emotional": 42,
      "communication": 45,
      "romance": 45,
      "trust": 48,
      "stability": 47,
      "lifestyle": 40
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
    },
    "modalitySynergy": "Mutable + Cardinal: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other.",
    "strengths": [
      "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
      "Unforgettable chemistry and passion born from sheer elemental contrast.",
      "Opportunity to develop immense patience, empathy, and unconditional love."
    ],
    "challenges": [
      "Fundamental contrast in priorities: Pisces's instinctual approach may baffle Libra.",
      "Tendency to misinterpret your partner's need for space or emotional expression."
    ],
    "tips": [
      "Practice active listening without immediately jumping into defensive reactions.",
      "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
      "Focus on the deep qualities you originally fell in love with during trying moments."
    ],
    "celebrityCouples": "Celebrated Pisces & Libra cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Libra Woman (6-8 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Venus grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Libra Man (6-8 Vibration): She brings Pisces's radiant initiative to the union, while he offers Libra's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (6-8 Vibration): Two souls united under Pisces and Libra celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_scorpio": {
    "sign1": "pisces",
    "sign2": "scorpio",
    "overallScore": 95,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "vibrationCode": "5-9",
    "lindaVibration": {
      "code": "5-9",
      "title": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
      "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
      "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
      "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    "headline": "Pisces & Scorpio: Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "summary": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "parameters": {
      "emotional": 98,
      "communication": 95,
      "romance": 92,
      "trust": 95,
      "stability": 94,
      "lifestyle": 96
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Scorpio Woman (5-9 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Pluto & Mars grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Scorpio Man (5-9 Vibration): She brings Pisces's radiant initiative to the union, while he offers Scorpio's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (5-9 Vibration): Two souls united under Pisces and Scorpio celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_sagittarius": {
    "sign1": "pisces",
    "sign2": "sagittarius",
    "overallScore": 54,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "vibrationCode": "4-10",
    "lindaVibration": {
      "code": "4-10",
      "title": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
      "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
      "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
      "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    "headline": "Pisces & Sagittarius: Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "summary": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "parameters": {
      "emotional": 44,
      "communication": 54,
      "romance": 51,
      "trust": 48,
      "stability": 53,
      "lifestyle": 46
    },
    "elementSynergy": {
      "title": "Fire & Water (Steam & Intense Passion)",
      "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Sagittarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Pisces & Sagittarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Sagittarius Woman (4-10 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Sagittarius Man (4-10 Vibration): She brings Pisces's radiant initiative to the union, while he offers Sagittarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (4-10 Vibration): Two souls united under Pisces and Sagittarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_capricorn": {
    "sign1": "pisces",
    "sign2": "capricorn",
    "overallScore": 88,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "vibrationCode": "3-11",
    "lindaVibration": {
      "code": "3-11",
      "title": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
      "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
      "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
      "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    "headline": "Pisces & Capricorn: Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "summary": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "parameters": {
      "emotional": 90,
      "communication": 88,
      "romance": 90,
      "trust": 93,
      "stability": 94,
      "lifestyle": 88
    },
    "elementSynergy": {
      "title": "Earth & Water (Fertile Nurturing)",
      "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Capricorn Woman (3-11 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Capricorn Man (3-11 Vibration): She brings Pisces's radiant initiative to the union, while he offers Capricorn's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (3-11 Vibration): Two souls united under Pisces and Capricorn celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_aquarius": {
    "sign1": "pisces",
    "sign2": "aquarius",
    "overallScore": 64,
    "colorCategory": "amber",
    "shadeLabel": "Dynamic Potential",
    "aspectName": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "vibrationCode": "2-12",
    "lindaVibration": {
      "code": "2-12",
      "title": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
      "theme": "Karmic Learning, Compassion & Gentle Tutoring",
      "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
      "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    "headline": "Pisces & Aquarius: Karmic Learning, Compassion & Gentle Tutoring",
    "summary": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "parameters": {
      "emotional": 56,
      "communication": 59,
      "romance": 61,
      "trust": 64,
      "stability": 66,
      "lifestyle": 64
    },
    "elementSynergy": {
      "title": "Air & Water (Wind & Waves)",
      "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
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
      "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
      "Remember that Aquarius communicates love in their own authentic elemental dialect.",
      "Celebrate your differences as complementary superpowers rather than personal flaws."
    ],
    "celebrityCouples": "Celebrated Pisces & Aquarius cosmic pairs",
    "genderAdvice": {
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Aquarius Woman (2-12 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Uranus & Saturn grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Aquarius Man (2-12 Vibration): She brings Pisces's radiant initiative to the union, while he offers Aquarius's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (2-12 Vibration): Two souls united under Pisces and Aquarius celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  },
  "pisces_pisces": {
    "sign1": "pisces",
    "sign2": "pisces",
    "overallScore": 82,
    "colorCategory": "green",
    "shadeLabel": "Harmonious Union",
    "aspectName": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "vibrationCode": "1-1",
    "lindaVibration": {
      "code": "1-1",
      "title": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
      "theme": "Mirror Empathy & Double Ego Reflection",
      "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
      "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    "headline": "Pisces & Pisces: Mirror Empathy & Double Ego Reflection",
    "summary": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
    "parameters": {
      "emotional": 86,
      "communication": 82,
      "romance": 79,
      "trust": 76,
      "stability": 81,
      "lifestyle": 85
    },
    "elementSynergy": {
      "title": "Double Water (Oceanic Soul Resonance)",
      "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
    },
    "modalitySynergy": "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines.",
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
      "male_female": "In Linda Goodman's Love Signs analysis of the Pisces Man with the Pisces Woman (1-1 Vibration): He expresses his masculine planetary energy through Neptune & Jupiter, while she responds with Neptune & Jupiter grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
      "female_male": "In Linda Goodman's Love Signs analysis of the Pisces Woman with the Pisces Man (1-1 Vibration): She brings Pisces's radiant initiative to the union, while he offers Pisces's steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
      "same_sex": "In Linda Goodman's cosmic synastry (1-1 Vibration): Two souls united under Pisces and Pisces celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }
  }
};

const LINDA_GOODMAN_VIBRATIONS = {
  "0": {
    "code": "1-1",
    "name": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
    "baseScore": 82,
    "theme": "Mirror Empathy & Double Ego Reflection",
    "description": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
    "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
  },
  "1": {
    "code": "2-12",
    "name": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
    "baseScore": 64,
    "theme": "Karmic Learning, Compassion & Gentle Tutoring",
    "description": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
    "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
  },
  "2": {
    "code": "3-11",
    "name": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
    "baseScore": 88,
    "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
    "description": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
    "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
  },
  "3": {
    "code": "4-10",
    "name": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
    "baseScore": 54,
    "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
    "description": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
    "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
  },
  "4": {
    "code": "5-9",
    "name": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
    "baseScore": 95,
    "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
    "description": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
    "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
  },
  "5": {
    "code": "6-8",
    "name": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
    "baseScore": 48,
    "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
    "description": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
    "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
  },
  "6": {
    "code": "7-7",
    "name": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
    "baseScore": 82,
    "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
    "description": "Sitting 180\u00b0 opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
    "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
  }
};

const ZODIAC_MAP = ZODIAC_SIGNS.reduce((acc, sign) => {
  acc[sign.id] = sign;
  return acc;
}, {});

/**
 * Determine Sun Sign from Date of Birth (Month: 1-12, Day: 1-31)
 */
function getZodiacSignFromDOB(dobInput) {
  if (!dobInput) return null;
  
  let month, day;
  if (typeof dobInput === 'string') {
    const clean = dobInput.trim();
    if (clean.includes('/')) {
      // Primary: DD/MM/YYYY format
      const parts = clean.split('/');
      if (parts.length >= 2) {
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
      }
    } else if (clean.includes('-')) {
      const parts = clean.split('-');
      if (parts.length >= 3) {
        if (parts[0].length === 4) {
          // YYYY-MM-DD
          month = parseInt(parts[1], 10);
          day = parseInt(parts[2], 10);
        } else {
          // DD-MM-YYYY
          day = parseInt(parts[0], 10);
          month = parseInt(parts[1], 10);
        }
      }
    } else if (clean.length === 8 && /^\d+$/.test(clean)) {
      // DDMMYYYY raw digits
      day = parseInt(clean.substring(0, 2), 10);
      month = parseInt(clean.substring(2, 4), 10);
    } else {
      const d = new Date(dobInput);
      month = d.getUTCMonth() + 1;
      day = d.getUTCDate();
    }
  } else if (dobInput instanceof Date) {
    month = dobInput.getUTCMonth() + 1;
    day = dobInput.getUTCDate();
  }

  if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) return null;

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
 */
function getPairCompatibility(signId1, signId2) {
  if (!signId1 || !signId2) return null;
  const s1 = signId1.toLowerCase();
  const s2 = signId2.toLowerCase();
  const key = `${s1}_${s2}`;
  if (ZODIAC_PAIRS[key]) {
    return ZODIAC_PAIRS[key];
  }
  const altKey = `${s2}_${s1}`;
  return ZODIAC_PAIRS[altKey] || null;
}

/**
 * Returns Color Classification Details for a given score (0-100)
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ZODIAC_SIGNS,
    ZODIAC_PAIRS,
    LINDA_GOODMAN_VIBRATIONS,
    ZODIAC_MAP,
    getZodiacSignFromDOB,
    getPairCompatibility,
    getColorShade
  };
}
