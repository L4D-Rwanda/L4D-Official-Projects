const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

content = content.replace(
  'image: "https://ui-avatars.com/api/?name=Iris+Landi&background=115e59&color=fff&size=512"',
  'image: "/team/iris_43.jpg"'
);

content = content.replace(
  'image: "https://ui-avatars.com/api/?name=Bridget+Vuguziga&background=115e59&color=fff&size=512"',
  'image: "/team/bridget_43.jpg"'
);

fs.writeFileSync('constants.tsx', content);
console.log("Updated constants.tsx with new images");
