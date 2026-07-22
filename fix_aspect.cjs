const fs = require('fs');
let content = fs.readFileSync('components/AboutPage.tsx', 'utf-8');

content = content.replace(
  '<div className="aspect-[4/5] overflow-hidden relative bg-gray-50 flex items-center justify-center p-6">',
  '<div className={`${isFounder ? "aspect-square" : "aspect-[4/5]"} overflow-hidden relative bg-gray-50 flex items-center justify-center p-6`}>'
);

content = content.replace(
  '<div className="aspect-[4/5] overflow-hidden relative bg-gradient-to-br from-teal-50 to-teal-100/50 flex items-center justify-center p-6">',
  '<div className={`${isFounder ? "aspect-square" : "aspect-[4/5]"} overflow-hidden relative bg-gradient-to-br from-teal-50 to-teal-100/50 flex items-center justify-center p-6`}>'
);

fs.writeFileSync('components/AboutPage.tsx', content);
console.log("Updated aspect ratio logic in AboutPage.tsx");
