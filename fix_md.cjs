const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

content = content.replace(
  'image: "https://images.unsplash.com/photo-1573496359-136d475583dc?auto=format&fit=crop&q=80&w=800"',
  'image: "https://ui-avatars.com/api/?name=Marie+Chantal+Rwakazina&background=115e59&color=fff&size=512"'
);

fs.writeFileSync('constants.tsx', content);
console.log("Updated MD image");
