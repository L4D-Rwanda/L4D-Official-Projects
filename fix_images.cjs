const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

const replacements = [
  {
    name: "Divine Irakoze",
    path: "https://lh3.googleusercontent.com/d/15S1YHxCNHNVAeXjhYJMKfwrmSTtL26q6"
  },
  {
    name: "Jean Bosco Nkurikiye",
    path: "https://lh3.googleusercontent.com/d/1YfCZOtPOZuAOhTmHf8YmIy9BWU5u5wyr"
  },
  {
    name: "Kevin Kimenyi",
    path: "https://lh3.googleusercontent.com/d/1LEJY6wJMBD8M3_ME5va721535qiaUQGJ"
  },
  {
    name: "Richard Ngabo",
    path: "https://lh3.googleusercontent.com/d/1aMlt22ABoWSOz5OVVGSp2O09aPny7lOj"
  },
  {
    name: "Iris Landi",
    path: "https://lh3.googleusercontent.com/d/1Q0Tgofso5Gf8uP4Eq1BGWq2tNw68NOk1"
  },
  {
    name: "Bridget Vuguziga",
    path: "https://lh3.googleusercontent.com/d/1ReQG89i2OfSlUQJhmx9VieWpDdCdh2zw"
  }
];

replacements.forEach(({name, path}) => {
  const regex = new RegExp(`name: "${name}",\\s*role: "[^"]+",\\s*bio: "[^"]+",\\s*image: "[^"]+"`);
  content = content.replace(regex, (match) => {
    return match.replace(/image: "[^"]+"/, `image: "${path}"`);
  });
});

fs.writeFileSync('constants.tsx', content);
console.log("Updated constants.tsx to use original Google Drive links");
