const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

const replacements = [
  {
    name: "Divine Irakoze",
    path: "/team/divine_43.jpg"
  },
  {
    name: "Jean Bosco Nkurikiye",
    path: "/team/jean_bosco_43.jpg"
  },
  {
    name: "Kevin Kimenyi",
    path: "/team/kevin_43.jpg"
  },
  {
    name: "Richard Ngabo",
    path: "/team/richard_43.jpg"
  }
];

replacements.forEach(({name, path}) => {
  const regex = new RegExp(`name: "${name}",\\s*role: "[^"]+",\\s*bio: "[^"]+",\\s*image: "[^"]+"`);
  content = content.replace(regex, (match) => {
    return match.replace(/image: "[^"]+"/, `image: "${path}"`);
  });
});

fs.writeFileSync('constants.tsx', content);
console.log("Updated constants.tsx to use local 4:3 images");
