"""
Generator for zodiac-data.js
Calibrated with Linda Goodman's 'Love Signs' (1978) & 'Sun Signs' (1968).
Integrates Linda Goodman's Seven Karmic Sun Sign Vibrations:
1-1, 2-12, 3-11, 4-10, 5-9, 6-8, and 7-7.
"""

import json
import os

SIGNS = [
    {
        "id": "aries",
        "name": "Aries",
        "symbol": "♈",
        "latin": "The Ram",
        "dates": "Mar 21 – Apr 19",
        "startMonth": 3, "startDay": 21,
        "endMonth": 4, "endDay": 19,
        "element": "Fire",
        "modality": "Cardinal",
        "ruler": "Mars",
        "polarity": "Yang (Masculine / Assertive)",
        "house": "1st House of Self, Vitality & Initiative",
        "colors": ["Crimson Red", "Coral", "Scarlet"],
        "gemstone": "Diamond, Bloodstone & Ruby",
        "keywords": ["Pioneering", "Courageous", "Passionate", "Independent", "Spontaneous", "Impulsive"],
        "overview": "Aries is the dynamic trailblazer and first sign of the zodiac. Ruled by Mars, Aries radiates boundless energy, fearless initiative, and a vibrant zest for life. In love, they pursue with heartfelt honesty and crave partners who match their courage.",
        "inLove": "Fierce, direct, and enthusiastically devoted. An Aries doesn't play subtle mind games; when they love, they love loudly and champion their partner wholeheartedly.",
        "marriageStyle": "Dynamic, loyal, and energetic. Thrives when both partners share joint adventures, celebrate mutual triumphs, and maintain healthy personal freedom.",
        "strengths": ["Bold initiative & honesty", "Infectious optimism", "Passionate protector of loved ones"],
        "shadows": ["Can be quick-tempered", "Impatience with slow pace", "Sometimes overlooks subtle emotional cues"],
        "idealPartners": ["Leo", "Sagittarius", "Gemini", "Aquarius"],
        "lindaGoodmanMale": "The Aries Man is the gallant knight in shining armor. He demands total devotion and romantic belief in his ideals. Never wound his proud masculine ego; support his crusades, and he will defend you against the whole world.",
        "lindaGoodmanFemale": "The Aries Woman can run a corporation and fix a carburetor, but secretly longs to be swept off her feet by a partner strong enough to match her fiery spirit without ever trying to cage her wings.",
        "lindaGoodmanSecret": "Never be sluggish, deceptive, or overly critical. Champion their dreams with genuine enthusiasm."
    },
    {
        "id": "taurus",
        "name": "Taurus",
        "symbol": "♉",
        "latin": "The Bull",
        "dates": "Apr 20 – May 20",
        "startMonth": 4, "startDay": 20,
        "endMonth": 5, "endDay": 20,
        "element": "Earth",
        "modality": "Fixed",
        "ruler": "Venus",
        "polarity": "Yin (Feminine / Receptive)",
        "house": "2nd House of Values, Security & Wealth",
        "colors": ["Emerald Green", "Rose Pink", "Earthy Taupe"],
        "gemstone": "Emerald, Sapphire & Rose Quartz",
        "keywords": ["Steadfast", "Sensual", "Devoted", "Practical", "Patient", "Stubborn"],
        "overview": "Taurus is the sensual anchor and steadfast builder of the zodiac. Governed by Venus, Taurus appreciates life's finest comforts, exquisite food, enduring loyalty, and emotional stability.",
        "inLove": "Deeply affectionate, loyal, and physically attentive. Taurus woos through consistent presence, gourmet dining, comforting touches, and dependable actions.",
        "marriageStyle": "The unshakeable bedrock of the household. Exceptionally loyal, dedicated to home comforts, financial prudence, and building a peaceful sanctuary.",
        "strengths": ["Unwavering loyalty & reliability", "Warm, comforting presence", "Mastery of financial and domestic harmony"],
        "shadows": ["Resistant to sudden change", "Can hold onto grievances", "Possessiveness when insecure"],
        "idealPartners": ["Virgo", "Capricorn", "Cancer", "Pisces"],
        "lindaGoodmanMale": "The Taurus Man is the steady oak tree in life's storm. Deliberate, quietly humorous, and devoted to family security. He will never abandon you for fickle thrills if you make his home a sanctuary of comfort and delicious meals.",
        "lindaGoodmanFemale": "The Taurus Woman is the quintessential Earth Mother. She possesses immense emotional endurance, hates artificial pretense, and creates a cozy haven filled with fragrant flowers, soft linens, and unshakeable fidelity.",
        "lindaGoodmanSecret": "Never push or rush them. Respect their need for contemplation and physical comfort."
    },
    {
        "id": "gemini",
        "name": "Gemini",
        "symbol": "♊",
        "latin": "The Twins",
        "dates": "May 21 – Jun 20",
        "startMonth": 5, "startDay": 21,
        "endMonth": 6, "endDay": 20,
        "element": "Air",
        "modality": "Mutable",
        "ruler": "Mercury",
        "polarity": "Yang (Masculine / Assertive)",
        "house": "3rd House of Communication, Intellect & Curiosity",
        "colors": ["Solar Yellow", "Electric Blue", "Silver"],
        "gemstone": "Agate, Aquamarine & Citrine",
        "keywords": ["Curious", "Witty", "Adaptable", "Charming", "Expressive", "Versatile"],
        "overview": "Gemini is the quick-witted conversationalist and insatiable learner of the cosmos. Ruled by Mercury, Gemini thrives on lively ideas, infectious laughter, spontaneous trips, and playful banter.",
        "inLove": "Attracted primarily through the mind. A Gemini falls deeply for someone who can match their quick banter, challenge their intellect, and keep curiosity burning.",
        "marriageStyle": "A youthful, stimulating partnership. Gemini needs a best friend and confidant with whom they can exchange books, travel, and laugh every single day.",
        "strengths": ["Brilliant communication", "Playful & youthful spirit", "Effortless adaptability to circumstances"],
        "shadows": ["Can seem emotionally restless", "Overthinking feelings", "Difficulty settling into heavy routines"],
        "idealPartners": ["Libra", "Aquarius", "Aries", "Leo"],
        "lindaGoodmanMale": "The Gemini Man is Peter Pan with silver wings on his tongue. Forever youthful, versatile, and mentally agile. If you can change with his changing moods and engage his restless intellect, he will never leave your side.",
        "lindaGoodmanFemale": "The Gemini Woman is a dozen fascinating women wrapped into one captivating bundle. She is a witty companion, an astute conversationalist, and a playful soul who needs intellectual air to breathe freely.",
        "lindaGoodmanSecret": "Keep the conversation alive and interesting. Never smother them with monotonous routine."
    },
    {
        "id": "cancer",
        "name": "Cancer",
        "symbol": "♋",
        "latin": "The Crab",
        "dates": "Jun 21 – Jul 22",
        "startMonth": 6, "startDay": 21,
        "endMonth": 7, "endDay": 22,
        "element": "Water",
        "modality": "Cardinal",
        "ruler": "Moon",
        "polarity": "Yin (Feminine / Receptive)",
        "house": "4th House of Home, Family & Emotional Sanctuary",
        "colors": ["Pearl White", "Silver", "Seafoam Blue"],
        "gemstone": "Moonstone, Pearl & Ruby",
        "keywords": ["Nurturing", "Intuitive", "Empathetic", "Protective", "Devoted", "Sentimental"],
        "overview": "Cancer is the deeply intuitive nurturer and emotional guardian of the zodiac. Ruled by the luminous Moon, Cancer feels everything deeply and possesses a profound capacity for unconditional devotion and protective care.",
        "inLove": "Soulful, tender, and protective. Cancer builds emotional safety and remembers every meaningful date. They love with nostalgic warmth and total devotion.",
        "marriageStyle": "The sacred keeper of home and hearth. Dedicated to family unity, emotional intimacy, warm kitchens, and generational bonds.",
        "strengths": ["Deep emotional empathy", "Fierce loyalty to partner and family", "Intuitive understanding of unspoken needs"],
        "shadows": ["Mood swings aligned with lunar cycles", "Can retreat into shell when hurt", "Cautious to forgive perceived slights"],
        "idealPartners": ["Scorpio", "Pisces", "Taurus", "Virgo"],
        "lindaGoodmanMale": "The Cancer Man hides a vulnerable poet's soul beneath a hard crustacean shell. Deeply devoted to his mother and family, financially prudent, and sentimental. He will hold onto love with unyielding lunar tenacity.",
        "lindaGoodmanFemale": "The Cancer Woman is the Moon maiden: enchantingly gentle, deeply protective, and rich with empathetic intuition. Treat her tender heart with reverence, and her loyalty will outlast the stars themselves.",
        "lindaGoodmanSecret": "Reassure them often of your love and security. Never mock their sensitivities or family treasures."
    },
    {
        "id": "leo",
        "name": "Leo",
        "symbol": "♌",
        "latin": "The Lion",
        "dates": "Jul 23 – Aug 22",
        "startMonth": 7, "startDay": 23,
        "endMonth": 8, "endDay": 22,
        "element": "Fire",
        "modality": "Fixed",
        "ruler": "Sun",
        "polarity": "Yang (Masculine / Assertive)",
        "house": "5th House of Joy, Creativity, Romance & Play",
        "colors": ["Solar Gold", "Amber", "Royal Purple"],
        "gemstone": "Peridot, Amber & Golden Topaz",
        "keywords": ["Generous", "Magnetic", "Charismatic", "Loyal", "Warm-hearted", "Proud"],
        "overview": "Leo is the radiant monarch and warm-hearted champion of the zodiac. Governed by the Sun itself, Leo radiates solar warmth, boundless generosity, theatrical flair, and unwavering loyalty.",
        "inLove": "Grand, generous, and proud. Leo treats their partner like royalty, showering them with gifts, public admiration, and intense romantic devotion.",
        "marriageStyle": "Chivalrous and supportive. Brings celebration, joy, social elegance, and steadfast protection to the family union.",
        "strengths": ["Tremendous generosity of spirit", "Charismatic and uplifting energy", "Unflinching loyalty through adversity"],
        "shadows": ["Prone to pride and hurt ego", "Needs continuous validation", "Can be dramatic during disagreements"],
        "idealPartners": ["Aries", "Sagittarius", "Gemini", "Libra"],
        "lindaGoodmanMale": "The Leo Man is the king of beasts: generous, noble, chivalrous, and proud. Stroke his magnificent mane with praise and respect, and he will pour the riches of his solar warmth at your feet.",
        "lindaGoodmanFemale": "The Leo Woman is the golden queen: proud, radiant, and intensely loyal. She demands courting fit for royalty. Treat her with chivalry and dignity, and she will shine light upon your entire life.",
        "lindaGoodmanSecret": "Praise them sincerely in public and private. Never diminish their dignity or wound their pride."
    },
    {
        "id": "virgo",
        "name": "Virgo",
        "symbol": "♍",
        "latin": "The Maiden",
        "dates": "Aug 23 – Sep 22",
        "startMonth": 8, "startDay": 23,
        "endMonth": 9, "endDay": 22,
        "element": "Earth",
        "modality": "Mutable",
        "ruler": "Mercury",
        "polarity": "Yin (Feminine / Receptive)",
        "house": "6th House of Wellness, Craft & Devoted Service",
        "colors": ["Forest Green", "Soft Ochre", "Navy Blue"],
        "gemstone": "Sapphire, Carnelian & Peridot",
        "keywords": ["Analytical", "Devoted", "Thoughtful", "Practical", "Discerning", "Supportive"],
        "overview": "Virgo is the discerning mastermind and thoughtful caregiver of the zodiac. Ruled by Mercury, Virgo expresses affection through attentive acts of service, practical problem-solving, and quiet devotion.",
        "inLove": "Modest, loyal, and observant. Virgo notices every detail about what makes their partner happy, from their favorite tea to their subtle shifts in mood.",
        "marriageStyle": "The master organizer of daily life. Ensures the home is orderly, healthy, fiscally sound, and emotionally grounded.",
        "strengths": ["Unmatched attentiveness and care", "Practical problem-solver in crisis", "Fiercely dependable and honest"],
        "shadows": ["Over-critical of self and partner", "Tendency to worry or overanalyze", "Hesitation to show vulnerability early on"],
        "idealPartners": ["Taurus", "Capricorn", "Cancer", "Scorpio"],
        "lindaGoodmanMale": "The Virgo Man is the pragmatic gentleman. He may not shower you with dramatic theatrical poetry, but he will ensure your car is serviced, your health is protected, and your life is quietly and reliably anchored.",
        "lindaGoodmanFemale": "The Virgo Woman possesses a pristine, clear-eyed intellect and gentle modesty. Her devotion is expressed through thoughtful care, immaculate integrity, and steadfast support through sickness and health.",
        "lindaGoodmanSecret": "Value their quiet acts of service and keep your promises. Practice cleanliness and punctuality."
    },
    {
        "id": "libra",
        "name": "Libra",
        "symbol": "♎",
        "latin": "The Scales",
        "dates": "Sep 23 – Oct 22",
        "startMonth": 9, "startDay": 23,
        "endMonth": 10, "endDay": 22,
        "element": "Air",
        "modality": "Cardinal",
        "ruler": "Venus",
        "polarity": "Yang (Masculine / Assertive)",
        "house": "7th House of Partnership, Balance & Marriage",
        "colors": ["Pastel Rose", "Celestial Blue", "Ivory"],
        "gemstone": "Opal, Lapis Lazuli & Tourmaline",
        "keywords": ["Harmonious", "Charming", "Diplomatic", "Romantic", "Fair-minded", "Graceful"],
        "overview": "Libra is the cosmic diplomat and aesthetic romantic of the zodiac. Ruled by Venus, Libra is wired for partnership and seeks beauty, peaceful balance, intellectual harmony, and egalitarian love.",
        "inLove": "Hopeless romantic and charming companion. Libra creates magical dates, values gentle communication, and bends backwards to ensure peace and mutual respect.",
        "marriageStyle": "The quintessential co-pilot. Dedicated to equality, thoughtful compromises, shared social circles, and aesthetic marital harmony.",
        "strengths": ["Graceful diplomat and peacemaker", "Naturally attuned to partner's needs", "Creates an aesthetically beautiful life"],
        "shadows": ["Conflict avoidance leading to suppression", "Indecisiveness on practical matters", "Can over-prioritize pleasing others"],
        "idealPartners": ["Gemini", "Aquarius", "Leo", "Sagittarius"],
        "lindaGoodmanMale": "The Libra Man is Venus's charming strategist. He seeks complete harmony, fair play, and aesthetic partnership. He weighs every decision with careful deliberation and blossoms when his home is serene and elegant.",
        "lindaGoodmanFemale": "The Libra Woman blends velvet softness with razor-sharp logic. She is a dedicated companion who looks magnificent by your side and provides brilliant counsel for your joint ambitions.",
        "lindaGoodmanSecret": "Maintain peaceful surroundings and soft tones. Never yell or create harsh, vulgar disharmony."
    },
    {
        "id": "scorpio",
        "name": "Scorpio",
        "symbol": "♏",
        "latin": "The Scorpion",
        "dates": "Oct 23 – Nov 21",
        "startMonth": 10, "startDay": 23,
        "endMonth": 11, "endDay": 21,
        "element": "Water",
        "modality": "Fixed",
        "ruler": "Pluto & Mars",
        "polarity": "Yin (Feminine / Receptive)",
        "house": "8th House of Intimacy, Transformation & Rebirth",
        "colors": ["Obsidian Black", "Burgundy", "Deep Crimson"],
        "gemstone": "Topaz, Garnet & Obsidian",
        "keywords": ["Intense", "Magnetic", "Profound", "Passionate", "Loyal", "Transformative"],
        "overview": "Scorpio is the enigmatic powerhouse and soul-diver of the zodiac. Governed by Pluto and Mars, Scorpio seeks all-or-nothing emotional depth, psychological truth, and unbreakable loyalty.",
        "inLove": "Electrifying, intense, and unconditionally devoted. Scorpio does not do casual surface interactions; they want to know your deepest dreams, fears, and truths.",
        "marriageStyle": "An impenetrable emotional fortress. Scorpio defends their family with immense passion and bonds at a profound soul level.",
        "strengths": ["Fierce, unbreakable loyalty", "Deep intuitive psychological insight", "Transformative support in difficult times"],
        "shadows": ["Guarded until absolute trust is earned", "Possessive or jealous tendencies", "Difficulty letting go of past hurts"],
        "idealPartners": ["Cancer", "Pisces", "Virgo", "Capricorn"],
        "lindaGoodmanMale": "The Scorpio Man possesses piercing hypnotic eyes and an impenetrable inner fortress. His love is all-or-nothing, fierce, and transformative. Give him absolute honesty and unflinching loyalty, and he will love you beyond eternity.",
        "lindaGoodmanFemale": "The Scorpio Woman is an enigmatic enchantress of unmatched depth. She sees straight through superficial facades. Her devotion is monumental; once committed, she is an invincible fortress beside her mate.",
        "lindaGoodmanSecret": "Be entirely truthful and transparent. Never flirt with others to make them jealous."
    },
    {
        "id": "sagittarius",
        "name": "Sagittarius",
        "symbol": "♐",
        "latin": "The Archer",
        "dates": "Nov 22 – Dec 21",
        "startMonth": 11, "startDay": 22,
        "endMonth": 12, "endDay": 21,
        "element": "Fire",
        "modality": "Mutable",
        "ruler": "Jupiter",
        "polarity": "Yang (Masculine / Assertive)",
        "house": "9th House of Philosophy, Higher Wisdom & Horizons",
        "colors": ["Royal Purple", "Cobalt Blue", "Turquoise"],
        "gemstone": "Turquoise, Topaz & Tanzanite",
        "keywords": ["Adventurous", "Optimistic", "Philosophical", "Honest", "Generous", "Free-spirited"],
        "overview": "Sagittarius is the joyful philosopher and adventurous seeker of the zodiac. Governed by benevolent Jupiter, Sagittarius brings uplifting humor, philosophical insight, and boundless zest for world discovery.",
        "inLove": "Fun-loving, candid, and passionate. Sagittarius needs a partner who is both a lover and a fellow adventurer, ready to explore new lands, ideas, and philosophies together.",
        "marriageStyle": "An expansive, exciting partnership. Flourishes when both partners grow continuously, explore cultures, and avoid suffocating micro-management.",
        "strengths": ["Contagious optimism and humor", "Honest and transparent intentions", "Expansive worldview and generosity"],
        "shadows": ["Can be blunt or tactless in speech", "Restless with repetitive domesticity", "Commitment hesitation if feeling confined"],
        "idealPartners": ["Aries", "Leo", "Libra", "Aquarius"],
        "lindaGoodmanMale": "The Sagittarius Man is Jupiter's joyful archer. Honest, generous, and endlessly idealistic. He speaks candidly without malice. Give him broad horizons and trust his integrity, and he will make life a grand adventure.",
        "lindaGoodmanFemale": "The Sagittarius Woman is the spirited explorer: candid, fiercely honest, warm, and playful. She values intellectual camaraderie and open skies. Never smother her with possessiveness, and she will be your joyful companion forever.",
        "lindaGoodmanSecret": "Allow them physical and mental freedom. Laugh with them and never cage their enthusiasm."
    },
    {
        "id": "capricorn",
        "name": "Capricorn",
        "symbol": "♑",
        "latin": "The Sea-Goat",
        "dates": "Dec 22 – Jan 19",
        "startMonth": 12, "startDay": 22,
        "endMonth": 1, "endDay": 19,
        "element": "Earth",
        "modality": "Cardinal",
        "ruler": "Saturn",
        "polarity": "Yin (Feminine / Receptive)",
        "house": "10th House of Ambition, Legacy & Integrity",
        "colors": ["Charcoal Grey", "Forest Green", "Midnight Blue"],
        "gemstone": "Garnet, Onyx & Smoky Quartz",
        "keywords": ["Disciplined", "Ambitious", "Loyal", "Steadfast", "Pragmatic", "Protective"],
        "overview": "Capricorn is the disciplined architect and stoic protector of dynasties. Ruled by Saturn, Capricorn approaches romance with serious devotion, high standards, long-term vision, and unwavering dependability.",
        "inLove": "Prudent and discerning, but deeply romantic underneath. Capricorn expresses devotion through solid security, tangible building of a shared future, and lasting loyalty.",
        "marriageStyle": "The bedrock of enduring success. Committed to financial stability, generational wealth, mutual respect, and family legacy.",
        "strengths": ["Unmatched resilience and work ethic", "Rock-solid reliability in all storms", "Quietly witty and deeply respectful"],
        "shadows": ["Can become work-obsessed", "Guarded with emotional vulnerability", "Rigid expectations of daily routine"],
        "idealPartners": ["Taurus", "Virgo", "Scorpio", "Pisces"],
        "lindaGoodmanMale": "The Capricorn Man is Saturn's master builder. Reserved on the outside, but deeply sentimental underneath. He ages in reverse, growing warmer and happier with each passing decade. He builds a dynasty of security for his family.",
        "lindaGoodmanFemale": "The Capricorn Woman is a lady of substance, quiet dignity, and formidable competence. She seeks enduring family honor and security. Value her ambitions and treat her with gentle courtesy, and she will be an unyielding rock of devotion.",
        "lindaGoodmanSecret": "Respect their family and long-term career ambitions. Provide quiet stability, not fickle drama."
    },
    {
        "id": "aquarius",
        "name": "Aquarius",
        "symbol": "♒",
        "latin": "The Water-Bearer",
        "dates": "Jan 20 – Feb 18",
        "startMonth": 1, "startDay": 20,
        "endMonth": 2, "endDay": 18,
        "element": "Air",
        "modality": "Fixed",
        "ruler": "Uranus & Saturn",
        "polarity": "Yang (Masculine / Assertive)",
        "house": "11th House of Community, Ideals & Humanity",
        "colors": ["Electric Cyan", "Silver", "Ultramarine"],
        "gemstone": "Amethyst, Garnet & Moss Agate",
        "keywords": ["Visionary", "Original", "Intellectual", "Humanitarian", "Authentic", "Independent"],
        "overview": "Aquarius is the avant-garde visionary and humanitarian innovator of the zodiac. Ruled by Uranus and Saturn, Aquarius values intellectual freedom, unique individuality, and authentic equal partnership.",
        "inLove": "Friends first, lovers forever. Aquarius is drawn to unconventional thinkers, sharp minds, and authentic souls who have their own passions and missions in life.",
        "marriageStyle": "An egalitarian alliance of best friends. Marriage is built on deep mutual respect, shared humanitarian goals, and intellectual freedom.",
        "strengths": ["Deeply respectful of individuality", "Progressive, forward-thinking partner", "Unshakable loyalty to core ideals"],
        "shadows": ["Emotional detachment during heated moments", "Stubborn adherence to theories", "Uncomfortable with dramatic displays"],
        "idealPartners": ["Gemini", "Libra", "Aries", "Sagittarius"],
        "lindaGoodmanMale": "The Aquarius Man is the lightning bolt of tomorrow. Free-spirited, unpredictable, and a friend to humanity. He cannot be forced into conventional molds, but if you love his mind and respect his space, he will be your devoted companion.",
        "lindaGoodmanFemale": "The Aquarius Woman is an unconventional butterfly. Fascinating, open-minded, and authentic. She loves without possessive chains and needs a partner who is first and foremost her truest intellectual confidant.",
        "lindaGoodmanSecret": "Never cage them with jealousy or petty suspicions. Appeal to their intellect and sense of fairness."
    },
    {
        "id": "pisces",
        "name": "Pisces",
        "symbol": "♓",
        "latin": "The Two Fishes",
        "dates": "Feb 19 – Mar 20",
        "startMonth": 2, "startDay": 19,
        "endMonth": 3, "endDay": 20,
        "element": "Water",
        "modality": "Mutable",
        "ruler": "Neptune & Jupiter",
        "polarity": "Yin (Feminine / Receptive)",
        "house": "12th House of Dreams, Mysticism & Compassion",
        "colors": ["Seafoam Green", "Lavender", "Aquamarine"],
        "gemstone": "Aquamarine, Amethyst & Jade",
        "keywords": ["Compassionate", "Intuitive", "Dreamy", "Empathetic", "Artistic", "Gentle"],
        "overview": "Pisces is the mystical dreamer and unconditional lover of the zodiac. Ruled by Neptune and Jupiter, Pisces navigates the world with poetic sensitivity, deep spiritual empathy, and infinite kindness.",
        "inLove": "Poetic, tender, and deeply intuitive. Pisces gives their whole heart, tuning into their partner's unspoken emotions, fantasies, and soul needs.",
        "marriageStyle": "A sacred and tender sanctuary. Fills the home with kindness, music, artistic beauty, emotional safety, and spiritual connection.",
        "strengths": ["Boundless empathy and forgiveness", "Deep romantic and spiritual intuition", "Devoted and gentle partner in times of grief"],
        "shadows": ["Can lose healthy boundaries", "Escapism when reality feels harsh", "Idealizing partners beyond reality"],
        "idealPartners": ["Cancer", "Scorpio", "Taurus", "Capricorn"],
        "lindaGoodmanMale": "The Pisces Man is Neptune's gentle poet. Highly intuitive, compassionate, and richly imaginative. He needs a partner who provides warm, grounding encouragement without crushing his delicate creative dreams.",
        "lindaGoodmanFemale": "The Pisces Woman is the mystical mermaid. Soft, tender, and deeply sympathetic. She makes her mate feel cherished, understood, and protective. In her quiet presence, worldly troubles melt away.",
        "lindaGoodmanSecret": "Treat their dreams with gentle care. Provide grounding support without cynicism or harsh rebukes."
    }
]

SIGN_MAP = {s["id"]: s for s in SIGNS}
SIGN_IDS = [s["id"] for s in SIGNS]

# Linda Goodman's Seven Karmic Sun Sign Vibrations (from Linda Goodman's Love Signs)
# 0: 1-1 Vibration (Same Sign)
# 1: 2-12 Vibration (Adjacent Signs / 30°)
# 2: 3-11 Vibration (Sextile / 60°)
# 3: 4-10 Vibration (Square / 90°)
# 4: 5-9 Vibration (Trine / 120°)
# 5: 6-8 Vibration (Inconjunct / Quincunx / 150°)
# 6: 7-7 Vibration (Opposition / 180°)

LINDA_GOODMAN_VIBRATIONS = {
    0: {
        "code": "1-1",
        "name": "1-1 Sun Sign Pattern (The Cosmic Mirror)",
        "baseScore": 82,
        "theme": "Mirror Empathy & Double Ego Reflection",
        "description": "In Linda Goodman's Love Signs, the 1-1 vibration is like gazing directly into an astrological mirror. You recognize each other's hidden virtues and deepest faults instantly. This creates profound telepathic empathy, but both partners must guard against magnifying identical blind spots.",
        "karmicLesson": "Cultivating emotional humility and learning self-acceptance through observing your own nature reflected in your mate."
    },
    1: {
        "code": "2-12",
        "name": "2-12 Sun Sign Pattern (The Karmic Teacher & Pupil)",
        "baseScore": 64,
        "theme": "Karmic Learning, Compassion & Gentle Tutoring",
        "description": "According to Linda Goodman, the 2-12 vibration signifies that one sign has spiritually passed through the other's grade in the cosmic school. There is a deep, unspoken bond of patience, protection, and gentle tutoring. Tolerating different pacing unlocks profound mutual growth.",
        "karmicLesson": "Bridging contrasting elemental perspectives through patient compassion and secret mutual admiration."
    },
    2: {
        "code": "3-11",
        "name": "3-11 Sun Sign Pattern (Karmic Friends & Sympathetic Lovers)",
        "baseScore": 88,
        "theme": "Enduring Camaraderie, Easy Forgiveness & High Devotion",
        "description": "Linda Goodman considered the 3-11 vibration one of the happiest and most enduring in the cosmos. Your signs form a natural sextile of friendship. Even through intense misunderstandings, 3-11 lovers remain steadfast allies, quick to forgive and eager to laugh.",
        "karmicLesson": "Nurturing lifelong loyalty, humanitarian generosity, and effortless mutual forgiveness."
    },
    3: {
        "code": "4-10",
        "name": "4-10 Sun Sign Pattern (The Karmic Challenge & Crucible)",
        "baseScore": 54,
        "theme": "Passionate Friction, Dramatic Chemistry & Soul Crucible",
        "description": "Linda Goodman described the 4-10 square vibration as the classic crucible of soul growth. Sharing the same modality but differing elements produces magnetic physical attraction paired with clashes of will. If ego yields to love, this union builds invincible diamond strength.",
        "karmicLesson": "Transcending stubborn pride and mastering the noble art of sacrificial compromise."
    },
    4: {
        "code": "5-9",
        "name": "5-9 Sun Sign Pattern (The Divine Cosmic Blessing)",
        "baseScore": 95,
        "theme": "Golden Trine, Soulmate Telepathy & Natural Sympathy",
        "description": "Linda Goodman's most celebrated synastry pattern! Sharing the same sacred element (Fire, Earth, Air, or Water) brings instant soul recognition. You forgive each other almost effortlessly, inspire each other's dreams, and enjoy an almost telepathic understanding.",
        "karmicLesson": "Preserving sacred gratitude and avoiding taking your effortless soul harmony for granted."
    },
    5: {
        "code": "6-8",
        "name": "6-8 Sun Sign Pattern (Karmic Mystery & Devoted Service)",
        "baseScore": 48,
        "theme": "Enigmatic Fascination, Hypnotic Pull & Karmic Duty",
        "description": "According to Linda Goodman, the 6-8 quincunx vibration is cloaked in hypnotic fascination and karmic debt. One partner feels drawn to serve, protect, or nurture the other, generating deep emotional or physical magnetism that requires profound patience to untangle.",
        "karmicLesson": "Practicing unconditional love free from selfish demands, embracing differences that cannot be logically explained."
    },
    6: {
        "code": "7-7",
        "name": "7-7 Sun Sign Pattern (Polar Magnetism & Cosmic Complements)",
        "baseScore": 82,
        "theme": "Opposites Attract, Celestial Electricity & Yin-Yang Balance",
        "description": "Sitting 180° opposite on the zodiac wheel, Linda Goodman saw the 7-7 vibration as two halves of a single soul. What one lacks, the other possesses in abundance. It generates high romantic voltage: either a magnificent lifelong union or an explosive standoff.",
        "karmicLesson": "Finding wholeness through merging opposite qualities into a unified, harmonious whole."
    }
}

FAMOUS_COUPLES = {
    ("leo", "sagittarius"): "Barack Obama (Leo) & Michelle Obama (Capricorn/Sagittarius cusp) / Jennifer Lopez & Ben Affleck",
    ("leo", "aries"): "Sarah Jessica Parker (Aries) & Matthew Broderick (Aries) / Kourtney Kardashian (Aries) & Travis Barker (Scorpio)",
    ("cancer", "capricorn"): "Prince William (Cancer) & Kate Middleton (Capricorn)",
    ("scorpio", "virgo"): "Ryan Reynolds (Scorpio) & Blake Lively (Virgo)",
    ("sagittarius", "virgo"): "Jay-Z (Sagittarius) & Beyoncé (Virgo)",
    ("aries", "gemini"): "Paul Rudd (Aries) & Julie Yaeger (Gemini)",
    ("taurus", "capricorn"): "David Beckham (Taurus) & Victoria Beckham (Aries/Taurus)",
    ("gemini", "aquarius"): "Kanye West (Gemini) & Kim Kardashian (Libra/Aquarius dynamics)",
    ("aquarius", "gemini"): "Justin Timberlake (Aquarius) & Jessica Biel (Pisces)",
    ("libra", "gemini"): "Will Smith (Libra) & Jada Pinkett Smith (Virgo)",
    ("pisces", "scorpio"): "Goldie Hawn (Scorpio) & Kurt Russell (Pisces)",
    ("taurus", "cancer"): "George Clooney (Taurus) & Amal Clooney (Aquarius)",
    ("aries", "libra"): "Michael Douglas (Libra) & Catherine Zeta-Jones (Libra)",
    ("leo", "aquarius"): "Ashton Kutcher (Aquarius) & Mila Kunis (Leo)"
}

def generate_pairs():
    pairs = {}
    for i, s1 in enumerate(SIGNS):
        id1 = s1["id"]
        for j, s2 in enumerate(SIGNS):
            id2 = s2["id"]
            
            raw_dist = abs(i - j)
            circ_dist = min(raw_dist, 12 - raw_dist)
            
            vibration = LINDA_GOODMAN_VIBRATIONS[circ_dist]
            base_score = vibration["baseScore"]
            
            # Refinements for classic Linda Goodman legendary pairs
            score_adj = 0
            if (id1, id2) in [("cancer", "scorpio"), ("scorpio", "cancer")]:
                score_adj = 3
            elif (id1, id2) in [("taurus", "virgo"), ("virgo", "taurus")]:
                score_adj = 2
            elif (id1, id2) in [("aries", "sagittarius"), ("sagittarius", "aries")]:
                score_adj = 3
            elif (id1, id2) in [("gemini", "libra"), ("libra", "gemini")]:
                score_adj = 2
            elif (id1, id2) in [("cancer", "capricorn"), ("capricorn", "cancer")]:
                score_adj = 4
            elif (id1, id2) in [("scorpio", "virgo"), ("virgo", "scorpio")]:
                score_adj = 4
            elif (id1, id2) in [("leo", "aries"), ("aries", "leo")]:
                score_adj = 2
            elif (id1, id2) in [("taurus", "scorpio"), ("scorpio", "taurus")]:
                score_adj = 3
            elif (id1, id2) in [("aries", "scorpio"), ("scorpio", "aries")]:
                score_adj = 3
                
            overall_score = max(38, min(98, base_score + score_adj))
            
            if overall_score >= 75:
                color_cat = "green"
                shade_label = "Harmonious Union"
            elif overall_score >= 50:
                color_cat = "amber"
                shade_label = "Dynamic Potential"
            else:
                color_cat = "red"
                shade_label = "Growth Challenge"
                
            elem1, elem2 = s1["element"], s2["element"]
            mod1, mod2 = s1["modality"], s2["modality"]
            
            # Emotional parameter
            if elem1 == "Water" or elem2 == "Water":
                if elem1 == elem2:
                    emotional = min(98, overall_score + 4)
                elif (elem1 == "Water" and elem2 == "Earth") or (elem1 == "Earth" and elem2 == "Water"):
                    emotional = min(96, overall_score + 2)
                elif (elem1 == "Water" and elem2 == "Fire") or (elem1 == "Fire" and elem2 == "Water"):
                    emotional = max(40, overall_score - 10)
                else:
                    emotional = max(42, overall_score - 8)
            elif elem1 == elem2:
                emotional = overall_score
            else:
                emotional = overall_score - 2
                
            # Communication parameter
            if elem1 == "Air" or elem2 == "Air":
                if elem1 == elem2:
                    comm = min(98, overall_score + 5)
                elif (elem1 == "Air" and elem2 == "Fire") or (elem1 == "Fire" and elem2 == "Air"):
                    comm = min(95, overall_score + 4)
                else:
                    comm = max(45, overall_score - 5)
            elif s1["ruler"] == "Mercury" or s2["ruler"] == "Mercury":
                comm = min(94, overall_score + 3)
            else:
                comm = overall_score
                
            # Romance & Chemistry
            if (elem1 == "Fire" and elem2 == "Fire") or (elem1 == "Fire" and elem2 == "Air") or (elem1 == "Air" and elem2 == "Fire"):
                romance = min(98, overall_score + 6)
            elif circ_dist == 6:
                romance = min(96, overall_score + 8)
            elif (elem1 == "Water" and elem2 == "Earth") or (elem1 == "Earth" and elem2 == "Water"):
                romance = min(92, overall_score + 2)
            else:
                romance = max(42, overall_score - 3)
                
            # Trust & Values
            if (elem1 == "Earth" and elem2 == "Earth") or (elem1 == "Earth" and elem2 == "Water") or (elem1 == "Water" and elem2 == "Earth"):
                trust = min(98, overall_score + 5)
            elif mod1 == "Fixed" and mod2 == "Fixed":
                trust = min(95, overall_score + 4)
            elif mod1 == "Mutable" and mod2 == "Mutable":
                trust = max(46, overall_score - 6)
            else:
                trust = overall_score
                
            # Stability & Marriage
            if (elem1 == "Earth" or elem2 == "Earth") and (elem1 in ["Earth", "Water"] and elem2 in ["Earth", "Water"]):
                stability = min(98, overall_score + 6)
            elif (elem1 == "Fire" and elem2 == "Fire") or (elem1 == "Air" and elem2 == "Air"):
                stability = max(45, overall_score - 5)
            elif mod1 == "Fixed" or mod2 == "Fixed":
                stability = min(94, overall_score + 2)
            else:
                stability = overall_score - 1
                
            # Lifestyle & Daily Harmony
            if circ_dist in [4, 0]:
                lifestyle = min(96, overall_score + 3)
            elif circ_dist in [3, 5]:
                lifestyle = max(38, overall_score - 8)
            else:
                lifestyle = overall_score
                
            parameters = {
                "emotional": max(35, min(99, int(emotional))),
                "communication": max(35, min(99, int(comm))),
                "romance": max(35, min(99, int(romance))),
                "trust": max(35, min(99, int(trust))),
                "stability": max(35, min(99, int(stability))),
                "lifestyle": max(35, min(99, int(lifestyle)))
            }
            
            element_synergy = get_element_synergy(elem1, elem2)
            modality_synergy = get_modality_synergy(mod1, mod2)
            strengths, challenges, tips = get_relationship_advice(s1, s2, circ_dist, overall_score)
            celeb = FAMOUS_COUPLES.get((id1, id2)) or FAMOUS_COUPLES.get((id2, id1)) or f"Celebrated {s1['name']} & {s2['name']} cosmic pairs"
            
            # Linda Goodman Love Signs Gender Narratives
            linda_gender_dynamics = get_linda_goodman_gender_dynamics(s1, s2, vibration)
            
            headline = f"{s1['name']} & {s2['name']}: {vibration['theme']}"
            
            pair_key = f"{id1}_{id2}"
            pairs[pair_key] = {
                "sign1": id1,
                "sign2": id2,
                "overallScore": overall_score,
                "colorCategory": color_cat,
                "shadeLabel": shade_label,
                "aspectName": vibration["name"],
                "vibrationCode": vibration["code"],
                "lindaVibration": {
                    "code": vibration["code"],
                    "title": vibration["name"],
                    "theme": vibration["theme"],
                    "summary": vibration["description"],
                    "karmicLesson": vibration["karmicLesson"],
                },
                "headline": headline,
                "summary": vibration["description"],
                "parameters": parameters,
                "elementSynergy": element_synergy,
                "modalitySynergy": modality_synergy,
                "strengths": strengths,
                "challenges": challenges,
                "tips": tips,
                "celebrityCouples": celeb,
                "genderAdvice": linda_gender_dynamics
            }
            
    return pairs

def get_element_synergy(e1, e2):
    pair = tuple(sorted([e1, e2]))
    mapping = {
        ("Fire", "Fire"): {
            "title": "Double Fire (Electric Blaze)",
            "text": "As Linda Goodman observed, two Fire signs create immediate enthusiasm and dramatic warmth. You champion each other's boldness, but must take care that competitive sparks don't burn down tender feelings."
        },
        ("Earth", "Earth"): {
            "title": "Double Earth (Unshakeable Bedrock)",
            "text": "Linda Goodman praised double Earth as the rock of domestic security. You share common respect for practical honesty, financial prudence, and building a cozy, enduring haven."
        },
        ("Air", "Air"): {
            "title": "Double Air (Mental Telepathy)",
            "text": "In Love Signs, two Air signs generate brilliant conversational agility and intellectual freedom. Your minds connect on a sparkling frequency filled with books, ideas, and laughter."
        },
        ("Water", "Water"): {
            "title": "Double Water (Oceanic Soul Resonance)",
            "text": "Linda Goodman described two Water signs as deep telepathic soulmates. You sense each other's moods intuitively without words, creating a sacred emotional sanctuary."
        },
        ("Air", "Fire"): {
            "title": "Fire & Air (Inspirational Breeze)",
            "text": "Air fans Fire's flames into glorious creative radiance, while Fire warms Air's visionary ideals into bold reality. An exciting, intellectually vibrant union."
        },
        ("Earth", "Water"): {
            "title": "Earth & Water (Fertile Nurturing)",
            "text": "Water softens Earth with tender emotional empathy; Earth provides Water with comforting shores of physical stability. A classic recipe for a thriving, enduring marriage."
        },
        ("Fire", "Water"): {
            "title": "Fire & Water (Steam & Intense Passion)",
            "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take brave leaps; Water teaches Fire the beauty of quiet emotional vulnerability."
        },
        ("Air", "Earth"): {
            "title": "Earth & Air (Pragmatic Strategy)",
            "text": "Earth brings tangible structure and sensible order; Air introduces inventive concepts and conversational sparkle. Mutual appreciation bridges different tempos."
        },
        ("Earth", "Fire"): {
            "title": "Fire & Earth (Hearthstone Fire)",
            "text": "Fire provides creative courage and solar warmth; Earth builds the practical structures to turn those visions into lasting wealth and security."
        },
        ("Air", "Water"): {
            "title": "Air & Water (Wind & Waves)",
            "text": "Air analyzes experiences intellectually while Water perceives them through psychic emotion. Honoring each other's distinct perception creates rich spiritual growth."
        }
    }
    return mapping.get(pair, {
        "title": f"{e1} & {e2} Interplay",
        "text": f"The dynamic chemistry between {e1} and {e2} provides rich opportunities for personal expansion."
    })

def get_modality_synergy(m1, m2):
    pair = tuple(sorted([m1, m2]))
    if m1 == m2:
        if m1 == "Cardinal":
            return "Both Cardinal (Initiators): Two natural leaders. Linda Goodman advised taking turns leading joint projects to eliminate power struggles."
        elif m1 == "Fixed":
            return "Both Fixed (Stabilizers): Unshakeable loyalty and rock-solid fidelity. Linda Goodman urged practicing gentle flexibility to resolve stubborn standoffs."
        else:
            return "Both Mutable (Adaptable): Continuous mental agility, laughter, and easy flexibility. Anchor your connection with grounding domestic routines."
    else:
        return f"{m1} + {m2}: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other."

def get_relationship_advice(s1, s2, circ_dist, score):
    name1, name2 = s1["name"], s2["name"]
    if score >= 75:
        strengths = [
            f"Natural understanding: {name1} and {name2} instinctively comprehend each other's core motivations.",
            f"Complimentary emotional rhythms that make daily life and domestic partnership feel comforting and safe.",
            f"Shared vision for relationship growth, shared laughter, and high mutual respect."
        ]
        challenges = [
            "Comfort trap: You may get so cozy that you neglect seeking new outside adventures.",
            "Assuming your partner always reads your mind without having to voice tender desires."
        ]
        tips = [
            "Continue scheduling intentional date nights to maintain the electric spark.",
            "Express appreciation for the quiet ways your partner supports your goals.",
            "Celebrate your shared victories with your wider circle of family and friends."
        ]
    elif score >= 50:
        strengths = [
            f"Dynamic growth: {name1} introduces {name2} to new perspectives and vice versa.",
            "Engaging romantic chemistry where you never run out of intriguing things to discover about each other.",
            "High potential for joint success when combining your distinct elemental skills."
        ]
        challenges = [
            f"Differing communication styles: {s1['element']} reacts differently to stress than {s2['element']}.",
            "Occasional friction over lifestyle pacing or decision-making speed."
        ]
        tips = [
            "Adopt Linda Goodman's cooling-off principle during heated arguments before revisiting sensitive topics.",
            f"Remember that {name2} communicates love in their own authentic elemental dialect.",
            "Celebrate your differences as complementary superpowers rather than personal flaws."
        ]
    else:
        strengths = [
            "Powerful karmic pull that pushes both souls to mature emotionally and spiritually.",
            "Unforgettable chemistry and passion born from sheer elemental contrast.",
            "Opportunity to develop immense patience, empathy, and unconditional love."
        ]
        challenges = [
            f"Fundamental contrast in priorities: {name1}'s instinctual approach may baffle {name2}.",
            "Tendency to misinterpret your partner's need for space or emotional expression."
        ]
        tips = [
            "Practice active listening without immediately jumping into defensive reactions.",
            "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
            "Focus on the deep qualities you originally fell in love with during trying moments."
        ]
    return strengths, challenges, tips

def get_linda_goodman_gender_dynamics(s1, s2, vibration):
    n1, n2 = s1["name"], s2["name"]
    code = vibration["code"]
    return {
        "male_female": f"In Linda Goodman's Love Signs analysis of the {n1} Man with the {n2} Woman ({code} Vibration): He expresses his masculine planetary energy through {s1['ruler']}, while she responds with {s2['ruler']} grace. Success blooms when he honors her emotional sanctuary and she champions his purposeful ambitions.",
        "female_male": f"In Linda Goodman's Love Signs analysis of the {n1} Woman with the {n2} Man ({code} Vibration): She brings {s1['name']}'s radiant initiative to the union, while he offers {s2['name']}'s steadfast anchor. When she trusts his protective strength and he respects her autonomy, their bond becomes unbreakable.",
        "same_sex": f"In Linda Goodman's cosmic synastry ({code} Vibration): Two souls united under {n1} and {n2} celestial energies find harmony when honoring personal autonomy, balancing giving with receiving, and allowing their elemental natures to enrich each other."
    }

def main():
    pairs = generate_pairs()
    output_path = r"c:\Anil Google Projects\zodiac-compatibility\zodiac-data.js"
    
    js_content = f"""/**
 * Zodiac Compatibility Engine & Knowledge Base
 * Calibrated with Linda Goodman's 'Love Signs' (1978) & 'Sun Signs' (1968)
 * Built for Anil Dutta - ZodiacMatch AI
 */

const ZODIAC_SIGNS = {json.dumps(SIGNS, indent=2)};

const ZODIAC_PAIRS = {json.dumps(pairs, indent=2)};

const LINDA_GOODMAN_VIBRATIONS = {json.dumps(LINDA_GOODMAN_VIBRATIONS, indent=2)};

const ZODIAC_MAP = ZODIAC_SIGNS.reduce((acc, sign) => {{
  acc[sign.id] = sign;
  return acc;
}}, {{}});

/**
 * Determine Sun Sign from Date of Birth (Month: 1-12, Day: 1-31)
 */
function getZodiacSignFromDOB(dobInput) {{
  if (!dobInput) return null;
  
  let month, day;
  if (typeof dobInput === 'string') {{
    const clean = dobInput.trim();
    if (clean.includes('/')) {{
      // Primary: DD/MM/YYYY format
      const parts = clean.split('/');
      if (parts.length >= 2) {{
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
      }}
    }} else if (clean.includes('-')) {{
      const parts = clean.split('-');
      if (parts.length >= 3) {{
        if (parts[0].length === 4) {{
          // YYYY-MM-DD
          month = parseInt(parts[1], 10);
          day = parseInt(parts[2], 10);
        }} else {{
          // DD-MM-YYYY
          day = parseInt(parts[0], 10);
          month = parseInt(parts[1], 10);
        }}
      }}
    }} else if (clean.length === 8 && /^\\d+$/.test(clean)) {{
      // DDMMYYYY raw digits
      day = parseInt(clean.substring(0, 2), 10);
      month = parseInt(clean.substring(2, 4), 10);
    }} else {{
      const d = new Date(dobInput);
      month = d.getUTCMonth() + 1;
      day = d.getUTCDate();
    }}
  }} else if (dobInput instanceof Date) {{
    month = dobInput.getUTCMonth() + 1;
    day = dobInput.getUTCDate();
  }}

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
}}

/**
 * Get Compatibility Data between two Zodiac Sign IDs
 */
function getPairCompatibility(signId1, signId2) {{
  if (!signId1 || !signId2) return null;
  const s1 = signId1.toLowerCase();
  const s2 = signId2.toLowerCase();
  const key = `${{s1}}_${{s2}}`;
  if (ZODIAC_PAIRS[key]) {{
    return ZODIAC_PAIRS[key];
  }}
  const altKey = `${{s2}}_${{s1}}`;
  return ZODIAC_PAIRS[altKey] || null;
}}

/**
 * Returns Color Classification Details for a given score (0-100)
 */
function getColorShade(score) {{
  if (score >= 75) {{
    return {{
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
    }};
  }} else if (score >= 50) {{
    return {{
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
    }};
  }} else {{
    return {{
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
    }};
  }}
}}

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{
    ZODIAC_SIGNS,
    ZODIAC_PAIRS,
    LINDA_GOODMAN_VIBRATIONS,
    ZODIAC_MAP,
    getZodiacSignFromDOB,
    getPairCompatibility,
    getColorShade
  }};
}}
"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Generated Linda Goodman calibrated zodiac-data.js successfully! Length: {len(js_content)} bytes")
    print(f"Total signs: {len(SIGNS)}, Total pairs: {len(pairs)}")

if __name__ == "__main__":
    main()
