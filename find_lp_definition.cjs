const fs = require('fs');
const bundle = fs.readFileSync('bundle.js', 'utf8');

// Find lp = or function lp( or lp=
const targets = [
  'lp=',
  'const lp',
  'function lp',
  'lp = ('
];

for (const target of targets) {
  let index = 0;
  while ((index = bundle.indexOf(target, index)) !== -1) {
    console.log(`Found target "${target}" at index ${index}:`);
    const start = Math.max(0, index - 100);
    const end = Math.min(bundle.length, index + 3000);
    console.log(bundle.substring(start, end));
    console.log("-------------------------\n");
    index += target.length;
  }
}
