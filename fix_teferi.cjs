const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

content = content.replace(
  'image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"',
  'image: "https://ui-avatars.com/api/?name=Teferi+Tensay+Mequaninte&background=115e59&color=fff&size=512"'
);

fs.writeFileSync('constants.tsx', content);
console.log("Updated Teferi image");
