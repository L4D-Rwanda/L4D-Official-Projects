const fs = require('fs');
let content = fs.readFileSync('components/AboutPage.tsx', 'utf-8');

const oldCode = `        {isFounder ? (
          <div className="h-80 overflow-hidden relative bg-gray-50 flex items-center justify-center p-6">
            <img referrerPolicy="no-referrer" 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl shadow-sm bg-white"
              loading="lazy"
            />
            <div className="absolute inset-x-6 inset-y-6 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        ) : (
          <div className="h-80 overflow-hidden relative bg-gradient-to-br from-teal-50 to-teal-100/50 flex items-center justify-center p-6">
            <div className="w-24 h-24 rounded-full bg-teal-800 text-white flex items-center justify-center text-3xl font-bold font-serif shadow-inner group-hover:scale-110 transition-transform duration-500">
              {initials}
            </div>
            {/* Subtle decorative patterns for staff */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-300/20 rounded-full blur-xl -ml-10 -mb-10"></div>
          </div>
        )}`;

const newCode = `        {member.image && !member.image.includes('ui-avatars.com') ? (
          <div className="h-80 overflow-hidden relative bg-gray-50 flex items-center justify-center p-6">
            <img referrerPolicy="no-referrer" 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl shadow-sm bg-white"
              loading="lazy"
            />
            <div className="absolute inset-x-6 inset-y-6 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        ) : (
          <div className="h-80 overflow-hidden relative bg-gradient-to-br from-teal-50 to-teal-100/50 flex items-center justify-center p-6">
            <div className="w-24 h-24 rounded-full bg-teal-800 text-white flex items-center justify-center text-3xl font-bold font-serif shadow-inner group-hover:scale-110 transition-transform duration-500">
              {initials}
            </div>
            {/* Subtle decorative patterns for staff */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-300/20 rounded-full blur-xl -ml-10 -mb-10"></div>
          </div>
        )}`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('components/AboutPage.tsx', content);
console.log("Updated AboutPage.tsx");
