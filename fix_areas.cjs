const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

const oldToNew = {
  'Agriculture': 'Agricultural Economics & Food Security',
  'Environment & Climate Change': 'Climate Change Adaptation',
  'Gender': 'Gender & Social Inclusion',
  'Socioeconomic Development': 'Rural Development & Livelihoods'
};

const newFocusAreas = `export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Agricultural Economics & Food Security',
    description: 'Analyzing value chains, market dynamics, and sustainable farming practices.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Rural Development & Livelihoods',
    description: 'Assessing interventions that improve socio-economic conditions in rural communities.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Climate Change Adaptation',
    description: 'Researching resilient strategies for vulnerable populations facing environmental shifts.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Gender & Social Inclusion',
    description: 'Ensuring equitable policy outcomes through gender-disaggregated analysis and inclusive methodologies.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
  }
];`;

content = content.replace(/export const FOCUS_AREAS: FocusArea\[\] = \[([\s\S]*?)\];/, newFocusAreas);

for (const [oldCat, newCat] of Object.entries(oldToNew)) {
  const regex = new RegExp(`category: '${oldCat}'`, 'g');
  content = content.replace(regex, `category: '${newCat}'`);
  
  const regexType = new RegExp(`type: '${oldCat}'`, 'g');
  content = content.replace(regexType, `type: '${newCat}'`);
}

fs.writeFileSync('constants.tsx', content);
console.log("Updated constants.tsx");
