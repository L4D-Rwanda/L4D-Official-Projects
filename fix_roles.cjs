const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

content = content.replace('role: "Founder & President"', 'role: "Founder & Chair"');
content = content.replace('role: "Policy Research Fellow/Data Manager"', 'role: "Research Fellow/Data Manager"');
content = content.replace('role: "Policy Research Fellow/Data Analyst"', 'role: "Research Fellow/Data Analyst"');
content = content.replace('role: "Policy Research Operations Manager"', 'role: "Research Operations Manager"');
content = content.replace(/role: "Policy Research Assistant\/Field Supervisor"/g, 'role: "Research Assistant/Field Supervisor"');

fs.writeFileSync('constants.tsx', content);
console.log("Updated roles in constants.tsx");
