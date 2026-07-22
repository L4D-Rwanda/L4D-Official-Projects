const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');
content = content.replace('];\\n\\nexport const CONTACT_INFO', '];\n\nexport const CONTACT_INFO');
fs.writeFileSync('constants.tsx', content);
