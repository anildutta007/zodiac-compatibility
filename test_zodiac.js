/**
 * Automated Verification Suite for ZodiacMatch AI
 */

const assert = require('assert');
const {
  ZODIAC_SIGNS,
  ZODIAC_PAIRS,
  ZODIAC_MAP,
  getZodiacSignFromDOB,
  getPairCompatibility,
  getColorShade
} = require('./zodiac-data.js');

console.log('🧪 Starting ZodiacMatch AI Verification Suite...\n');

let passedTests = 0;

// Test 1: Signs Count
assert.strictEqual(ZODIAC_SIGNS.length, 12, 'Must have exactly 12 zodiac signs');
console.log('✅ Test 1: Exactly 12 zodiac signs present.');
passedTests++;

// Test 2: Date Boundary Tests for All 12 Signs
const boundaryTests = [
  { dob: '2000-03-21', expected: 'aries' },
  { dob: '1995-04-19', expected: 'aries' },
  { dob: '1990-04-20', expected: 'taurus' },
  { dob: '1988-05-20', expected: 'taurus' },
  { dob: '1992-05-21', expected: 'gemini' },
  { dob: '2001-06-20', expected: 'gemini' },
  { dob: '1985-06-21', expected: 'cancer' },
  { dob: '1999-07-22', expected: 'cancer' },
  { dob: '1994-07-23', expected: 'leo' },
  { dob: '1998-08-22', expected: 'leo' },
  { dob: '1993-08-23', expected: 'virgo' },
  { dob: '1987-09-22', expected: 'virgo' },
  { dob: '1991-09-23', expected: 'libra' },
  { dob: '2002-10-22', expected: 'libra' },
  { dob: '1996-10-23', expected: 'scorpio' },
  { dob: '1989-11-21', expected: 'scorpio' },
  { dob: '1997-11-22', expected: 'sagittarius' },
  { dob: '1986-12-21', expected: 'sagittarius' },
  { dob: '1990-12-22', expected: 'capricorn' },
  { dob: '2000-01-19', expected: 'capricorn' },
  { dob: '1995-01-20', expected: 'aquarius' },
  { dob: '1993-02-18', expected: 'aquarius' },
  { dob: '1998-02-19', expected: 'pisces' },
  { dob: '2004-02-29', expected: 'pisces' }, // Leap year test
  { dob: '1984-03-20', expected: 'pisces' }
];

boundaryTests.forEach(({ dob, expected }) => {
  const sign = getZodiacSignFromDOB(dob);
  assert.ok(sign, `DOB ${dob} must return a sign`);
  assert.strictEqual(sign.id, expected, `DOB ${dob} should be ${expected}, got ${sign.id}`);
});
console.log(`✅ Test 2: All ${boundaryTests.length} Zodiac Date Boundaries verified successfully (including leap years).`);
passedTests++;

// Test 3: Total Pairs Count (12 x 12 = 144)
const pairKeys = Object.keys(ZODIAC_PAIRS);
assert.strictEqual(pairKeys.length, 144, 'Must have exactly 144 sign pair combinations');
console.log('✅ Test 3: Exactly 144 sign pairs exist in database.');
passedTests++;

// Test 4: Parameter Completeness & Range Check for All 144 Pairs
const requiredParams = ['emotional', 'communication', 'romance', 'trust', 'stability', 'lifestyle'];
let greenCount = 0;
let amberCount = 0;
let redCount = 0;

pairKeys.forEach(key => {
  const pair = ZODIAC_PAIRS[key];
  assert.ok(pair.overallScore >= 0 && pair.overallScore <= 100, `Pair ${key} overallScore invalid`);
  assert.ok(pair.summary && pair.summary.length > 10, `Pair ${key} summary missing or too short`);
  assert.ok(Array.isArray(pair.strengths) && pair.strengths.length > 0, `Pair ${key} strengths missing`);
  assert.ok(Array.isArray(pair.challenges) && pair.challenges.length > 0, `Pair ${key} challenges missing`);
  assert.ok(Array.isArray(pair.tips) && pair.tips.length > 0, `Pair ${key} tips missing`);
  
  requiredParams.forEach(param => {
    const val = pair.parameters[param];
    assert.ok(typeof val === 'number', `Pair ${key} param ${param} must be number`);
    assert.ok(val >= 0 && val <= 100, `Pair ${key} param ${param} must be between 0 and 100, got ${val}`);
  });

  const shade = getColorShade(pair.overallScore);
  if (shade.category === 'green') greenCount++;
  else if (shade.category === 'amber') amberCount++;
  else redCount++;
});

console.log(`✅ Test 4: All 144 pairs validated for 6 parameters (Emotional, Comm, Romance, Trust, Stability, Lifestyle).`);
console.log(`   Color Distribution: 🟢 Green: ${greenCount} pairs, 🟡 Amber: ${amberCount} pairs, 🔴 Red: ${redCount} pairs.`);
passedTests++;

// Test 5: Color Shade Function
assert.strictEqual(getColorShade(95).category, 'green');
assert.strictEqual(getColorShade(75).category, 'green');
assert.strictEqual(getColorShade(74).category, 'amber');
assert.strictEqual(getColorShade(50).category, 'amber');
assert.strictEqual(getColorShade(49).category, 'red');
assert.strictEqual(getColorShade(30).category, 'red');
console.log('✅ Test 5: Color shade categorization thresholds verified (Green >=75%, Amber 50-74%, Red <50%).');
passedTests++;

console.log(`\n🎉 ALL ${passedTests} TEST SUITES PASSED FLAWLESSLY!`);
