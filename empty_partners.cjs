const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

// The partner logos are in the `partners` array.
// They look like: logo: 'https://lh3.googleusercontent.com/d/...'
content = content.replace(/logo:\s*['"]https:\/\/lh3\.googleusercontent\.com\/d\/[a-zA-Z0-9_-]+['"]/g, 'logo: ""');

fs.writeFileSync('constants.tsx', content);
console.log("Emptied partner logos");
