const https = require('https');
const fs = require('fs');

function download(fileId, dest) {
  return new Promise((resolve, reject) => {
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 303) {
        https.get(res.headers.location, (res2) => {
          const file = fs.createWriteStream(dest);
          res2.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }
    }).on('error', reject);
  });
}

async function main() {
  await download('15S1YHxCNHNVAeXjhYJMKfwrmSTtL26q6', 'public/team/divine.jpg');
  await download('1YfCZOtPOZuAOhTmHf8YmIy9BWU5u5wyr', 'public/team/jean_bosco.jpg');
  await download('1LEJY6wJMBD8M3_ME5va721535qiaUQGJ', 'public/team/kevin.jpg');
  await download('1aMlt22ABoWSOz5OVVGSp2O09aPny7lOj', 'public/team/richard.jpg');
  await download('1Q0Tgofso5Gf8uP4Eq1BGWq2tNw68NOk1', 'public/team/iris.jpg');
  await download('1ReQG89i2OfSlUQJhmx9VieWpDdCdh2zw', 'public/team/bridget.jpg');
  console.log("Downloaded all");
}

main();
