const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

// Undo the wrong replacement:
content = content.replace(/,\n  \{\n    name: "Kevin Kimenyi"[\s\S]*?researchFocus: \["Monitoring", "Evaluation"\]\n  \}\n\];/, '\n];');

// Add properly to TEAM:
const newStaff = `,
  {
    name: "Kevin Kimenyi",
    role: "Data Analyst",
    bio: "Skilled data analyst contributing to the interpretation of quantitative and qualitative data.",
    image: "https://ui-avatars.com/api/?name=Kevin+Kimenyi&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Data Analysis"]
  },
  {
    name: "Harrison Manyumwa",
    role: "Monitoring, Evaluation, and Learning (MEL) Coordinator",
    bio: "Coordinates monitoring, evaluation, and learning to ensure project effectiveness and continuous improvement.",
    image: "https://ui-avatars.com/api/?name=Harrison+Manyumwa&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Monitoring", "Evaluation"]
  }
];`;

content = content.replace(/  \}\n\];\n\nexport const CONTACT_INFO/, '  }' + newStaff + '\\n\\nexport const CONTACT_INFO');

fs.writeFileSync('constants.tsx', content);
console.log("Fixed constants.tsx");
