const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

const replacements = [
  { name: "Divine Irakoze", path: "/team/divine_gen_43.jpg" },
  { name: "Jean Bosco Nkurikiye", path: "/team/jean_bosco_gen_43.jpg" },
  { name: "Kevin Kimenyi", path: "/team/kevin_gen_43.jpg" },
  { name: "Richard Ngabo", path: "/team/richard_gen_43.jpg" },
  { name: "Iris Landi", path: "/team/iris_gen_43.jpg" },
  { name: "Bridget Vuguziga", path: "/team/bridget_gen_43.jpg" }
];

replacements.forEach(({name, path}) => {
  const regex = new RegExp(`name: "${name}",\\s*role: "[^"]+",\\s*bio: "[^"]+",\\s*image: "[^"]+"`);
  content = content.replace(regex, (match) => {
    return match.replace(/image: "[^"]+"/, `image: "${path}"`);
  });
});

// Also fix some specific ones just in case regex failed
content = content.replace(/image: "https:\/\/lh3.googleusercontent.com\/d\/15S1YHxCNHNVAeXjhYJMKfwrmSTtL26q6"/, 'image: "/team/divine_gen_43.jpg"');
content = content.replace(/image: "https:\/\/lh3.googleusercontent.com\/d\/1YfCZOtPOZuAOhTmHf8YmIy9BWU5u5wyr"/, 'image: "/team/jean_bosco_gen_43.jpg"');
content = content.replace(/image: "https:\/\/lh3.googleusercontent.com\/d\/1LEJY6wJMBD8M3_ME5va721535qiaUQGJ"/, 'image: "/team/kevin_gen_43.jpg"');
content = content.replace(/image: "https:\/\/lh3.googleusercontent.com\/d\/1aMlt22ABoWSOz5OVVGSp2O09aPny7lOj"/, 'image: "/team/richard_gen_43.jpg"');
content = content.replace(/image: "https:\/\/lh3.googleusercontent.com\/d\/1Q0Tgofso5Gf8uP4Eq1BGWq2tNw68NOk1"/, 'image: "/team/iris_gen_43.jpg"');
content = content.replace(/image: "https:\/\/lh3.googleusercontent.com\/d\/1ReQG89i2OfSlUQJhmx9VieWpDdCdh2zw"/, 'image: "/team/bridget_gen_43.jpg"');

fs.writeFileSync('constants.tsx', content);
console.log("Updated constants.tsx to use local 4:3 images");
