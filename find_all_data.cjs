const fs = require('fs');
const bundle = fs.readFileSync('bundle.js', 'utf8');

// Helper to find surrounding text of a pattern
function findContext(pattern, lengthBefore = 200, lengthAfter = 1500) {
  let index = 0;
  let results = [];
  while ((index = bundle.indexOf(pattern, index)) !== -1) {
    const start = Math.max(0, index - lengthBefore);
    const end = Math.min(bundle.length, index + lengthAfter);
    results.push({
      index,
      text: bundle.substring(start, end)
    });
    index += pattern.length;
    if (results.length > 20) break; // limit to 20 per pattern
  }
  return results;
}

console.log("=== SCANNING FOR JOBS / CAREERS ===");
const jobs = findContext('Field Enumerators', 100, 2000);
jobs.forEach((r, i) => {
  console.log(`Job Match ${i+1} at index ${r.index}:`);
  console.log(r.text);
  console.log("-------------------------\n");
});

console.log("=== SCANNING FOR PROJECTS ===");
const projects = findContext('Agricultural Value Chain', 100, 2500);
projects.forEach((r, i) => {
  console.log(`Project Match ${i+1} at index ${r.index}:`);
  console.log(r.text);
  console.log("-------------------------\n");
});

console.log("=== SCANNING FOR PUBLICATIONS ===");
const publications = findContext('pdfUrl', 50, 1500);
publications.forEach((r, i) => {
  console.log(`Publication Match ${i+1} at index ${r.index}:`);
  console.log(r.text);
  console.log("-------------------------\n");
});

console.log("=== SCANNING FOR TEAM ===");
const team = findContext('Founder & President', 100, 2500);
team.forEach((r, i) => {
  console.log(`Team Match ${i+1} at index ${r.index}:`);
  console.log(r.text);
  console.log("-------------------------\n");
});
