const fs = require('fs');

let content = fs.readFileSync('constants.tsx', 'utf-8');

const mapping = {
  "/images/team/Marie_Chantal.png": "/images/team/marie_chantal_sq.jpg",
  "/images/team/Teferi_Tensay.png": "/images/team/teferi_sq.jpg",
  "/images/team/Jean Bosco_Nkurikiye.png": "/images/team/jean_bosco_sq.jpg",
  "/images/team/Divine_Irakoze.png": "/images/team/divine_sq.jpg",
  "/images/team/Iris_Landi.png": "/images/team/iris_sq.jpg",
  "/images/team/Richard_Ngabo.png": "/images/team/richard_sq.jpg",
  "/images/team/Bridget_Vuguziga.png": "/images/team/bridget_sq.jpg",
  "/images/team/Bona_Mugabe.png": "/images/team/bonaventure_sq.jpg",
  "/images/team/Kevin_Kimenyi.png": "/images/team/kevin_sq.jpg",
  "/images/team/Harrison_Manyumwa.jpeg": "/images/team/harrison_sq.jpg"
};

for (const [badUrl, goodUrl] of Object.entries(mapping)) {
  content = content.replace(`image: "${badUrl}"`, `image: "${goodUrl}"`);
}

fs.writeFileSync('constants.tsx', content);
console.log("Reverted bad names to original names");
