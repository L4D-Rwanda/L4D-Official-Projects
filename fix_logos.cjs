const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

const correctLogos = [
  "AGRA-Rwanda.png",
  "Mastercard-Foundation.jpg",
  "MINAGRI.png",
  "Ministries.png",
  "NAEB.png",
  "RAB.png",
  "RTI-International.png",
  "SNV Logo.png",
  "Trademark-East-Africa.png",
  "UN-Women.png",
  "University-of-Rwanda.png",
  "Urwego-Finance-1.png",
  "Women-For-Women-International.png",
  "FAO.png",
  "World Bank Group.jpg",
  "USAID.webp",
  "UNDP LOGO.svg",
  "EUROPEAN UNION.webp",
  "GIZ LOGO.svg",
  "IFPRI.png",
  "KOICA.png",
  "GMO.png",
  "Good-Neighbors.jpg",
  "IUCN.png",
  "JICA.png",
  "WRI Logo.png",
  "MINICOM logo.png",
  "MINEDUC.webp",
  "African-development-fund.jpg",
  "World-Vision.png"
];

let i = 0;
content = content.replace(/logo:\s*""/g, () => {
  if (i < correctLogos.length) {
    return `logo: "/images/partners/${correctLogos[i++]}"`;
  }
  return `logo: ""`;
});

fs.writeFileSync('constants.tsx', content);
console.log("Restored logos!");
