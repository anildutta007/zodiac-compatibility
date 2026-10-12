"""
Generator for zodiac-data.js
Creates rich astrological data for the 12 sun signs and 144 combination pairings.
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
        "idealPartners": ["Leo", "Sagittarius", "Gemini", "Aquarius"]
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
        "idealPartners": ["Virgo", "Capricorn", "Cancer", "Pisces"]
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
        "idealPartners": ["Libra", "Aquarius", "Aries", "Leo"]
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
        "idealPartners": ["Scorpio", "Pisces", "Taurus", "Virgo"]
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
        "inLove": "Grand, generous, and proud. Leo treats their partner like a king or queen, showering them with gifts, public admiration, and intense romantic devotion.",
        "marriageStyle": "Chivalrous and supportive. Brings celebration, joy, social elegance, and steadfast protection to the family union.",
        "strengths": ["Tremendous generosity of spirit", "Charismatic and uplifting energy", "Unflinching loyalty through adversity"],
        "shadows": ["Prone to pride and hurt ego", "Needs continuous validation", "Can be dramatic during disagreements"],
        "idealPartners": ["Aries", "Sagittarius", "Gemini", "Libra"]
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
        "idealPartners": ["Taurus", "Capricorn", "Cancer", "Scorpio"]
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
        "idealPartners": ["Gemini", "Aquarius", "Leo", "Sagittarius"]
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
        "idealPartners": ["Cancer", "Pisces", "Virgo", "Capricorn"]
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
        "idealPartners": ["Aries", "Leo", "Libra", "Aquarius"]
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
        "idealPartners": ["Taurus", "Virgo", "Scorpio", "Pisces"]
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
        "idealPartners": ["Gemini", "Libra", "Aries", "Sagittarius"]
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
        "idealPartners": ["Cancer", "Scorpio", "Taurus", "Capricorn"]
    }
]

SIGN_MAP = {s["id"]: s for s in SIGNS}
SIGN_IDS = [s["id"] for s in SIGNS]

# Astrological Aspect Model
# Distances:
# 0: Conjunction (Same Sign) -> ~80-84%
# 1: Semisextile (30°) -> ~58-66%
# 2: Sextile (60° - Fire/Air or Earth/Water) -> ~82-90%
# 3: Square (90° - Cardinal/Cardinal, Fixed/Fixed, Mutable/Mutable) -> ~46-58%
# 4: Trine (120° - Same Element) -> ~90-97%
# 5: Quincunx (150° - Awkward aspect) -> ~42-52%
# 6: Opposition (180° - Polar Opposites) -> ~76-86%

ASPECT_PROFILES = {
    0: {
        "aspect": "Conjunction (Mirror Alignment)",
        "baseScore": 82,
        "theme": "Deep Mirror Empathy & Shared Instincts",
        "description": "Sharing the exact same sun sign gives you an instinctual understanding of each other's drives and vulnerabilities. You understand each other's moods intuitively, though you must guard against magnifying shared blind spots."
    },
    1: {
        "aspect": "Semisextile (Neighboring Contrast)",
        "baseScore": 62,
        "theme": "Complementary Growth & Mutual Learning",
        "description": "As neighboring signs, you operate from contrasting elemental perspectives. This match creates a learning journey where each partner expands the other's horizons if patience is practiced."
    },
    2: {
        "aspect": "Sextile (Harmonious Elemental Flow)",
        "baseScore": 86,
        "theme": "Stimulating Synergy & Easy Friendship",
        "description": "Your elements naturally complement each other (Fire invigorates Air, or Water nourishes Earth). Communication flows effortlessly, laughter comes easily, and mutual respect flourishes."
    },
    3: {
        "aspect": "Square (Passionate Friction & Dynamic Growth)",
        "baseScore": 52,
        "theme": "Electrifying Spark with Creative Challenge",
        "description": "Signs at a 90° square share the same modality but clash elementally. This generates high attraction, intense emotional chemistry, and spirited debates that demand conscious diplomacy and mutual compromise."
    },
    4: {
        "aspect": "Trine (Divine Soulmate Element)",
        "baseScore": 94,
        "theme": "Effortless Harmony & Natural Soul Resonance",
        "description": "Sharing the same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) creates an instinctive, harmonious flow. You breathe the same spiritual air, understand each other's pacing, and feel deeply at home together."
    },
    5: {
        "aspect": "Quincunx (Mysterious Intrigue & Karmic Adjustment)",
        "baseScore": 46,
        "theme": "Enigmatic Attraction Demanding Patience",
        "description": "Separated by five signs, you have little in common astrologically, which creates an intriguing magnetic mystery. Succeeding together requires appreciating your partner's entirely unique perspective on life."
    },
    6: {
        "aspect": "Opposition (Cosmic Magnetism & Polar Balance)",
        "baseScore": 80,
        "theme": "Magnetic Attraction & Yin-Yang Balance",
        "description": "Sitting 180° across the zodiac wheel, you are polar opposites. What one lacks, the other possesses in abundance. The chemistry is electric, offering the potential to form an unbeatable yin-and-yang partnership."
    }
}

# Famous celebrity couples database for iconic pairs
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
            
            # calculate circular distance
            raw_dist = abs(i - j)
            circ_dist = min(raw_dist, 12 - raw_dist)
            
            aspect_info = ASPECT_PROFILES[circ_dist]
            base_score = aspect_info["baseScore"]
            
            # Specific nuance fine-tuning for legendary pairs
            score_adj = 0
            if (id1, id2) in [("cancer", "scorpio"), ("scorpio", "cancer")]:
                score_adj = 3  # Water trine soulmates
            elif (id1, id2) in [("taurus", "virgo"), ("virgo", "taurus")]:
                score_adj = 2  # Earth trine rock solid
            elif (id1, id2) in [("aries", "sagittarius"), ("sagittarius", "aries")]:
                score_adj = 3  # Fire adventure powerhouse
            elif (id1, id2) in [("gemini", "libra"), ("libra", "gemini")]:
                score_adj = 2  # Air intellectual brilliance
            elif (id1, id2) in [("cancer", "capricorn"), ("capricorn", "cancer")]:
                score_adj = 4  # Cardinal opposition powerhouse (William & Kate)
            elif (id1, id2) in [("scorpio", "virgo"), ("virgo", "scorpio")]:
                score_adj = 5  # Earth + Water sextile (Ryan & Blake)
            elif (id1, id2) in [("leo", "aries"), ("aries", "leo")]:
                score_adj = 2
            elif (id1, id2) in [("taurus", "scorpio"), ("scorpio", "taurus")]:
                score_adj = 3  # Fixed polarity passion
            elif (id1, id2) in [("aries", "scorpio"), ("scorpio", "aries")]:
                score_adj = 4  # Mars co-ruled chemistry
            elif (id1, id2) in [("sagittarius", "pisces"), ("pisces", "sagittarius")]:
                score_adj = 3  # Jupiter co-ruled spiritual kinship
                
            overall_score = max(38, min(98, base_score + score_adj))
            
            # Determine color shade
            if overall_score >= 75:
                color_cat = "green"
                shade_label = "Harmonious Union"
                badge_bg = "emerald"
            elif overall_score >= 50:
                color_cat = "amber"
                shade_label = "Dynamic Potential"
                badge_bg = "amber"
            else:
                color_cat = "red"
                shade_label = "Growth Challenge"
                badge_bg = "rose"
                
            # Compute the 6 Parameters
            # 1. Emotional
            # 2. Communication
            # 3. Romance & Chemistry
            # 4. Trust & Values
            # 5. Stability & Marriage
            # 6. Lifestyle & Harmony
            
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
                else: # Water + Air
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
            elif circ_dist == 6: # Opposites have extreme chemistry
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
                
            # Clamp all parameters strictly between 35 and 99
            parameters = {
                "emotional": max(35, min(99, int(emotional))),
                "communication": max(35, min(99, int(comm))),
                "romance": max(35, min(99, int(romance))),
                "trust": max(35, min(99, int(trust))),
                "stability": max(35, min(99, int(stability))),
                "lifestyle": max(35, min(99, int(lifestyle)))
            }
            
            # Elemental synergy description
            element_synergy = get_element_synergy(elem1, elem2)
            modality_synergy = get_modality_synergy(mod1, mod2)
            
            # Generate custom strengths & challenges
            strengths, challenges, tips = get_relationship_advice(s1, s2, circ_dist, overall_score)
            
            # Celebrity couple example
            celeb = FAMOUS_COUPLES.get((id1, id2)) or FAMOUS_COUPLES.get((id2, id1)) or f"Celebrated {s1['name']} & {s2['name']} cosmic pairs"
            
            headline = f"{s1['name']} & {s2['name']}: {aspect_info['theme']}"
            
            pair_key = f"{id1}_{id2}"
            pairs[pair_key] = {
                "sign1": id1,
                "sign2": id2,
                "overallScore": overall_score,
                "colorCategory": color_cat,
                "shadeLabel": shade_label,
                "aspectName": aspect_info["aspect"],
                "headline": headline,
                "summary": aspect_info["description"],
                "parameters": parameters,
                "elementSynergy": element_synergy,
                "modalitySynergy": modality_synergy,
                "strengths": strengths,
                "challenges": challenges,
                "tips": tips,
                "celebrityCouples": celeb,
                "genderAdvice": get_gender_advice(s1, s2)
            }
            
    return pairs

def get_element_synergy(e1, e2):
    pair = tuple(sorted([e1, e2]))
    mapping = {
        ("Fire", "Fire"): {
            "title": "Double Fire (Electric Blaze)",
            "text": "Intense passion, shared ambition, and instant adrenaline. You fuel each other's dreams, but must ensure competitive sparks don't burn down emotional bridges."
        },
        ("Earth", "Earth"): {
            "title": "Double Earth (Unshakeable Foundation)",
            "text": "Deep practical grounding, financial prudence, and rock-solid loyalty. You build lasting wealth and a cozy empire together."
        },
        ("Air", "Air"): {
            "title": "Double Air (Mental Telepathy)",
            "text": "Incredible intellectual banter, endless laughter, and shared curiosity. A partnership where minds connect on a sparkling wavelength."
        },
        ("Water", "Water"): {
            "title": "Double Water (Oceanic Soul Bond)",
            "text": "Intuitive, deeply emotional, and almost telepathic understanding. You hold space for each other's deepest vulnerabilities and dreams."
        },
        ("Air", "Fire"): {
            "title": "Fire & Air (Inspirational Catalyst)",
            "text": "Air fuels Fire's passion, while Fire brings warmth and bold action to Air's inventive ideas. An exciting, socially vibrant union."
        },
        ("Earth", "Water"): {
            "title": "Earth & Water (Fertile Nurturing)",
            "text": "Water softens Earth with empathy and emotion; Earth provides Water with steady shores of stability. A classic recipe for enduring married happiness."
        },
        ("Fire", "Water"): {
            "title": "Fire & Water (Steam & Intense Chemistry)",
            "text": "Extremely passionate and emotionally turbulent. Fire inspires Water to take bold leaps; Water teaches Fire the beauty of tender emotional depth."
        },
        ("Air", "Earth"): {
            "title": "Earth & Air (Pragmatic Strategy)",
            "text": "Earth brings tangible discipline and organization; Air brings innovative ideas and sparkling conversational agility."
        },
        ("Earth", "Fire"): {
            "title": "Fire & Earth (Hearthstone Fire)",
            "text": "Fire provides creative energy and visionary boldness; Earth builds the practical structures to turn those visions into reality."
        },
        ("Air", "Water"): {
            "title": "Air & Water (Wind & Waves)",
            "text": "Air analyzes experiences intellectually while Water experiences them through deep emotion. Finding balance creates profound holistic insight."
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
            return "Both Cardinal: Two visionary leaders who love initiating projects. Take turns steering to prevent power struggles."
        elif m1 == "Fixed":
            return "Both Fixed: Unshakable loyalty and steadfast commitment. Practice active compromise to prevent stubborn standoffs."
        else: # Mutable
            return "Both Mutable: High flexibility, continuous laughter, and easy adaptability. Anchor your connection with structured routines."
    else:
        return f"{m1} + {m2}: A balanced dynamic where one partner initiates, stabilizes, or provides adaptable perspective to the other."

def get_relationship_advice(s1, s2, circ_dist, score):
    strengths = []
    challenges = []
    tips = []
    
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
            "Adopt the 24-hour cooling off rule during heated arguments before revisiting sensitive topics.",
            f"Remember that {name2} communicates love in their own authentic dialect.",
            "Celebrate your differences as unique strengths rather than flaws to be corrected."
        ]
    else:
        strengths = [
            "Powerful karmic pull that pushes both individuals to mature emotionally.",
            "Unforgettable chemistry and passion born from sheer elemental contrast.",
            "Opportunity to develop immense patience, empathy, and unconditional love."
        ]
        challenges = [
            f"Fundamental contrast in priorities: {name1}'s instinctual approach may confuse {name2}.",
            "Tendency to misinterpret your partner's need for space or emotional expression."
        ]
        tips = [
            "Practice active listening without immediately jumping into defensive reactions.",
            "Establish crystal-clear agreements regarding personal boundaries, finances, and private time.",
            "Focus on the deep qualities you originally fell in love with during trying moments."
        ]
        
    return strengths, challenges, tips

def get_gender_advice(s1, s2):
    return {
        "male_female": f"When a {s1['name']} man and a {s2['name']} woman unite, balancing his Mars/solar leadership with her emotional sanctuary fosters lasting harmony.",
        "female_male": f"When a {s1['name']} woman and a {s2['name']} man unite, celebrating her creative initiative while valuing his steadfast protection builds an unbreakable bond.",
        "same_sex": f"In a union between two souls with {s1['name']} and {s2['name']} energies, open communication and honoring personal autonomy keeps the romance deeply alive."
    }

def main():
    pairs = generate_pairs()
    
    output_path = r"c:\Anil Google Projects\zodiac-compatibility\zodiac-data.js"
    
    js_content = f"""/**
 * Zodiac Compatibility Engine & Knowledge Base
 * Built for Anil Dutta - ZodiacMatch AI
 * Tropical Sun Sign Calculation & Comprehensive 144-Pair Matrix
 */

const ZODIAC_SIGNS = {json.dumps(SIGNS, indent=2)};

const ZODIAC_PAIRS = {json.dumps(pairs, indent=2)};

// Map for quick sign lookup by id
const ZODIAC_MAP = ZODIAC_SIGNS.reduce((acc, sign) => {{
  acc[sign.id] = sign;
  return acc;
}}, {{}});

/**
 * Determine Sun Sign from Date of Birth (Month: 1-12, Day: 1-31)
 * @param {{string|Date}} dobInput - 'YYYY-MM-DD' or Date object
 * @returns {{object}} Zodiac sign object
 */
function getZodiacSignFromDOB(dobInput) {{
  if (!dobInput) return null;
  
  let month, day;
  if (typeof dobInput === 'string') {{
    const parts = dobInput.split('-');
    if (parts.length >= 3) {{
      month = parseInt(parts[1], 10);
      day = parseInt(parts[2], 10);
    }} else {{
      const d = new Date(dobInput);
      month = d.getUTCMonth() + 1;
      day = d.getUTCDate();
    }}
  }} else if (dobInput instanceof Date) {{
    month = dobInput.getUTCMonth() + 1;
    day = dobInput.getUTCDate();
  }}

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
}}

/**
 * Get Compatibility Data between two Zodiac Sign IDs
 * @param {{string}} signId1 
 * @param {{string}} signId2 
 * @returns {{object}} Compatibility profile
 */
function getPairCompatibility(signId1, signId2) {{
  if (!signId1 || !signId2) return null;
  const s1 = signId1.toLowerCase();
  const s2 = signId2.toLowerCase();
  const key = `${{s1}}_${{s2}}`;
  if (ZODIAC_PAIRS[key]) {{
    return ZODIAC_PAIRS[key];
  }}
  // Fallback to reciprocal key if necessary
  const altKey = `${{s2}}_${{s1}}`;
  return ZODIAC_PAIRS[altKey] || null;
}}

/**
 * Returns Color Classification Details for a given score (0-100)
 * @param {{number}} score 
 * @returns {{object}} Color token, classes, label, and hex codes
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

// Export for browser window and Node.js environments
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{
    ZODIAC_SIGNS,
    ZODIAC_PAIRS,
    ZODIAC_MAP,
    getZodiacSignFromDOB,
    getPairCompatibility,
    getColorShade
  }};
}}
"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Generated zodiac-data.js successfully! Length: {len(js_content)} bytes")
    print(f"Total signs: {len(SIGNS)}, Total pairs: {len(pairs)}")

if __name__ == "__main__":
    main()
