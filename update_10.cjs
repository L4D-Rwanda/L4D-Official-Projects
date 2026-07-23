const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

const replacements = [
  { name: "Divine Irakoze", path: "/team/divine_sq.jpg" },
  { name: "Jean Bosco Nkurikiye", path: "/team/jean_bosco_sq.jpg" },
  { name: "Kevin Kimenyi", path: "/team/kevin_sq.jpg" },
  { name: "Richard Ngabo", path: "/team/richard_sq.jpg" },
  { name: "Iris Landi", path: "/team/iris_sq.jpg" },
  { name: "Bridget Vuguziga", path: "/team/bridget_sq.jpg" },
  { name: "Marie Chantal Rwakazina", path: "/team/marie_chantal_sq.jpg" },
  { name: "Bonaventure Mugabe", path: "/team/bonaventure_sq.jpg" },
  { name: "Dr. Teferi Tensay Mequaninte", path: "/team/teferi_sq.jpg" },
  { name: "Harrison Manyumwa", path: "/team/harrison_sq.jpg" }
];

replacements.forEach(({name, path}) => {
  const regex = new RegExp(`name: "${name}",\\s*role: "[^"]+",\\s*bio: "[^"]+",\\s*image: "[^"]+"`);
  content = content.replace(regex, (match) => {
    return match.replace(/image: "[^"]+"/, `image: "${path}"`);
  });
});

// For any UI avatars, wait, the regex above matches image: "[^"]+", so it works for ui-avatars too!
// Let's do it with another regex just in case name has spaces or things.
// Actually, let's just do an iterative replace for the ones we know
replacements.forEach(({name, path}) => {
    // simpler regex: look for name, then replace the next image: "..."
    const parts = content.split(`name: "${name}"`);
    if (parts.length > 1) {
        let after = parts[1];
        after = after.replace(/image: "[^"]+"/, `image: "${path}"`);
        content = parts[0] + `name: "${name}"` + after;
    }
});

fs.writeFileSync('constants.tsx', content);
console.log("Updated constants.tsx with all 10 local square images");
