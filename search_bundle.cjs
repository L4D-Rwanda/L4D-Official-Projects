const fs = require('fs');
const bundle = fs.readFileSync('bundle.js', 'utf8');

// Print sections of the bundle
const keywords = ['Bizoza', 'NAV_ITEMS', 'PROJECTS', 'PUBLICATIONS', 'SERVICES', 'CONTACT_INFO', 'JOBS', 'TESTIMONIALS'];

for (const keyword of keywords) {
  const index = bundle.indexOf(keyword);
  if (index !== -1) {
    console.log(`--- Keyword: ${keyword} at index ${index} ---`);
    // Print 500 characters before and 3500 characters after
    const start = Math.max(0, index - 500);
    const end = Math.min(bundle.length, index + 3500);
    console.log(bundle.substring(start, end));
    console.log('\n======================================\n');
  } else {
    console.log(`--- Keyword: ${keyword} NOT found ---`);
  }
}
