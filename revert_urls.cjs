const fs = require('fs');
const mapping = require('./mappings.json');

const files = ['components/Logo.tsx', 'components/About.tsx', 'components/AboutPage.tsx', 'constants.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  for (const [id, filename] of Object.entries(mapping)) {
    const localUrl = file === 'constants.tsx' && id !== '1hj3SBqipvYlF3hJs6wTErfLINnnWEboV' && id !== '1De3GysxtCdJ8VaMuM9HUpaycNcXi2-aA' && id !== '1EiByhvCUjkqYeHLUWL6Swf8JVzTr8TiY' 
      ? `/images/partners/${filename}` 
      : (id === '1EiByhvCUjkqYeHLUWL6Swf8JVzTr8TiY' ? `/images/team/${filename}` : `/images/${filename}`);
      
    // Revert it!
    content = content.split(`"${localUrl}"`).join(`"https://lh3.googleusercontent.com/d/${id}"`);
    content = content.split(`'${localUrl}'`).join(`'https://lh3.googleusercontent.com/d/${id}'`);
  }
  fs.writeFileSync(file, content);
}
console.log("Reverted");
