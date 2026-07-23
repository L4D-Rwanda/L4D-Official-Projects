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
  await download('1VUFXV4kUUlmrIpGrKmOAWkPLFua-VQV5', 'public/team/marie_chantal.jpg');
  await download('1HQDoyE37xZ-q3y-ghsusCeDkjQMk3yGt', 'public/team/bonaventure.jpg');
  await download('1-s3iLsTtM2kBVgzVqmSytgnRI9OLsiKZ', 'public/team/teferi.jpg');
  await download('1EqBf1G8SNXaK63Ccdl6rllCBK_x7k1AS', 'public/team/harrison.jpg');
  console.log("Downloaded new images");
}

main();
