const fs = require('fs');
const bundle = fs.readFileSync('bundle.js', 'utf8');

// List of potential page-related strings
const pageKeywords = [
  'WhoWeArePage', 'OurWorkPage', 'PolicyResearchPage', 'LeadershipCoachingPage', 
  'ImpactMelPage', 'Who We Are', 'Our Work', 'Policy Research', 'Coaching', 
  'Monitoring', 'Advisory', 'Applied Research', 'Mentorship', 'Impact'
];

for (const keyword of pageKeywords) {
  const index = bundle.indexOf(keyword);
  if (index !== -1) {
    console.log(`--- Page Keyword: "${keyword}" at index ${index} ---`);
    const start = Math.max(0, index - 300);
    const end = Math.min(bundle.length, index + 1200);
    console.log(bundle.substring(start, end));
    console.log('\n======================================\n');
  } else {
    console.log(`--- Page Keyword: "${keyword}" NOT found ---`);
  }
}
