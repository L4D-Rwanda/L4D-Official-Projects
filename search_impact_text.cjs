const fs = require('fs');
const bundle = fs.readFileSync('bundle.js', 'utf8');

// Search for strings in the bundle that might be inside lp
const keywords = ['National Impact', 'Policy & National Impact', 'national-impact', 'Policy and National Impact'];

for (const kw of keywords) {
  let index = 0;
  while ((index = bundle.indexOf(kw, index)) !== -1) {
    console.log(`Found "${kw}" at index ${index}:`);
    const start = Math.max(0, index - 200);
    const end = Math.min(bundle.length, index + 1000);
    console.log(bundle.substring(start, end));
    console.log("-------------------------\n");
    index += kw.length;
  }
}
