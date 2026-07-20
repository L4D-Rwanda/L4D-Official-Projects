const fs = require('fs');
const bundle = fs.readFileSync('bundle.js', 'utf8');

const startIndex = bundle.indexOf(',lp=({onNavigate:m})');
if (startIndex !== -1) {
  // Let's grab around 25000 characters to make sure we cover the whole component
  const content = bundle.substring(startIndex, startIndex + 25000);
  console.log("Found lp definition starting at:", startIndex);
  fs.writeFileSync('lp_full_extracted.txt', content);
  console.log("Wrote full extracted content to lp_full_extracted.txt");
} else {
  console.log("Could not find the lp start index exactly");
}
