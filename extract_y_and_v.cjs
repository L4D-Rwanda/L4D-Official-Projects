const fs = require('fs');
const code = fs.readFileSync('lp_full_extracted.txt', 'utf8');

// Find the definition of y
const yStartIndex = code.indexOf(',y=[');
if (yStartIndex !== -1) {
  console.log("Found y definition around index:", yStartIndex);
  console.log(code.substring(yStartIndex, yStartIndex + 3000));
  console.log("\n======================================\n");
} else {
  // Let's search for "y=" or "y = ["
  const yAltIndex = code.indexOf('y=[');
  if (yAltIndex !== -1) {
    console.log("Found yAltIndex around index:", yAltIndex);
    console.log(code.substring(yAltIndex, yAltIndex + 3000));
    console.log("\n======================================\n");
  } else {
    console.log("Could not find y array definition");
  }
}

// Find the definition of v
const vStartIndex = code.indexOf(',v={');
if (vStartIndex !== -1) {
  console.log("Found v definition around index:", vStartIndex);
  console.log(code.substring(vStartIndex, vStartIndex + 5000));
  console.log("\n======================================\n");
} else {
  const vAltIndex = code.indexOf('v={');
  if (vAltIndex !== -1) {
    console.log("Found vAltIndex around index:", vAltIndex);
    console.log(code.substring(vAltIndex, vAltIndex + 5000));
    console.log("\n======================================\n");
  } else {
    console.log("Could not find v object definition");
  }
}
