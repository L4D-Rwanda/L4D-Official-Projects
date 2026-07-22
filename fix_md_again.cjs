const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

content = content.replace(
  'image: "https://ui-avatars.com/api/?name=Marie+Chantal+Rwakazina&background=115e59&color=fff&size=512"',
  'image: "https://ui-avatars.com/api/?name=Marie+Chantal+Rwakazina&background=115e59&color=fff&size=512"' // Wait, it might be something else
);

// Actually, let's just use regex to make sure we replace the MD's image.
content = content.replace(
  /name: "Marie Chantal Rwakazina",\n\s*role: "Managing Director",\n\s*bio: "[^"]+",\n\s*image: "[^"]+"/,
  'name: "Marie Chantal Rwakazina",\n    role: "Managing Director",\n    bio: "Experienced executive driving operational excellence and strategic partnerships to strengthen credible development initiatives.",\n    image: "https://ui-avatars.com/api/?name=Marie+Chantal+Rwakazina&background=115e59&color=fff&size=512"'
);

fs.writeFileSync('constants.tsx', content);
console.log("Updated MD image in constants.tsx");
