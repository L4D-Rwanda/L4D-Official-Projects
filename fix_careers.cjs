const fs = require('fs');
let content = fs.readFileSync('components/CareersPage.tsx', 'utf-8');

// 1. Remove Back to Home
const backToHomeStart = content.indexOf('      {/* Top Navigation */}');
const backToHomeEnd = content.indexOf('      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">', backToHomeStart);
if (backToHomeStart !== -1 && backToHomeEnd !== -1) {
  content = content.substring(0, backToHomeStart) + content.substring(backToHomeEnd);
}

// 2. Fix cards
const floatingStart = content.indexOf('                {/* Floating Stats/Culture Cards */}');
const floatingEnd = content.indexOf('            </div>\n        </div>', floatingStart);

if (floatingStart !== -1 && floatingEnd !== -1) {
  const newFloating = `                {/* Floating Stats/Culture Cards */}
                <div className="md:w-2/5 w-full flex flex-col sm:flex-row md:flex-col gap-6 justify-center items-center py-10 print:hidden">
                    <Reveal delay={500} className="w-full max-w-[260px] md:-ml-12">
                        <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-white/20 w-full">
                            <Heart className="text-burgundy-400 h-10 w-10 mb-3" />
                            <p className="text-white font-bold text-xl mb-1">Work-Life Balance</p>
                            <p className="text-teal-100 text-sm">Flexible hours & remote options</p>
                        </div>
                    </Reveal>
                    
                    <Reveal delay={600} className="w-full max-w-[260px] md:ml-12 z-10">
                        <div className="p-6 bg-white/90 backdrop-blur-md border border-white/20 text-teal-950 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl w-full">
                            <Users className="text-teal-600 h-10 w-10 mb-3" />
                            <p className="font-bold text-xl mb-1">Great Culture</p>
                            <p className="text-teal-800 text-sm">Inclusive & Collaborative</p>
                        </div>
                    </Reveal>
                    
                    <Reveal delay={700} className="w-full max-w-[260px] md:-ml-4">
                        <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-white/20 w-full">
                            <Zap className="text-teal-400 h-10 w-10 mb-3" />
                            <p className="text-white font-bold text-xl mb-1">Fast Growth</p>
                            <p className="text-teal-100 text-sm">Mentorship & Career paths</p>
                        </div>
                    </Reveal>
                </div>
`;
  content = content.substring(0, floatingStart) + newFloating + content.substring(floatingEnd);
}

fs.writeFileSync('components/CareersPage.tsx', content);
console.log("Updated CareersPage.tsx");
