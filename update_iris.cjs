const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

content = content.replace(
  /name: "Iris Landi",\s*role: "Internal - Research and Knowledge Management Officer",\s*bio: "([^"]+)",\s*image: "([^"]+)",\s*type: "Consultant"/g,
  'name: "Iris Landi",\n    role: "Research and Knowledge Management Officer",\n    bio: "$1",\n    image: "$2",\n    type: "Staff"'
);

fs.writeFileSync('constants.tsx', content);
console.log("Updated Iris Landi profile");
