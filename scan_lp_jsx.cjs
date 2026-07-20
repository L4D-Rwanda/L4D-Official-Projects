const fs = require('fs');
const lpCode = fs.readFileSync('lp_full_extracted.txt', 'utf8');

// Find where the JSX begins (look for children: or return)
const returnIndex = lpCode.indexOf('return');
if (returnIndex !== -1) {
  console.log("JSX begins around index:", returnIndex);
  // Write the JSX block to a file
  fs.writeFileSync('lp_jsx.txt', lpCode.substring(returnIndex, returnIndex + 20000));
} else {
  console.log("Could not find return statement in lp");
}
