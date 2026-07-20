const fs = require('fs');
const bundle = fs.readFileSync('bundle.js', 'utf8');

// Find occurrences of national-impact
let index = 0;
let results = [];
while ((index = bundle.indexOf('national-impact', index)) !== -1) {
  const start = Math.max(0, index - 200);
  const end = Math.min(bundle.length, index + 1500);
  results.push({ index, text: bundle.substring(start, end) });
  index += 'national-impact'.length;
}

results.forEach((r, i) => {
  console.log(`Match ${i+1} at index ${r.index}:`);
  console.log(r.text);
  console.log("======================================\n");
});
