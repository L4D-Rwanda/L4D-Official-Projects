import React from 'react';
import Reveal from './Reveal';
import { Linkedin, ExternalLink, MessageCircle, Heart, Share2 } from 'lucide-react';

// SVG for X (Twitter)
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SOCIAL_POSTS = [
  {
    id: 1,
    platform: 'linkedin',
    author: 'High Lands Centre of Leadership for Development',
    handle: '@L4DRwanda',
    date: '2 hours ago',
    content: 'We are excited to share our latest Working Paper exploring the socio-economic impacts of digital education in rural Rwanda. A huge thank you to our field enumerators for their precise qualitative data collection and dedication. Dive into the findings linked below.',
    image: 'https://images.unsplash.com/photo-1571260899304-4250702d0eb1?auto=format&fit=crop&q=80&w=800',
    likes: 184,
    comments: 24,
    link: '#',
  },
  {
    id: 2,
    platform: 'x',
    author: 'L4D Centre',
    handle: '@L4DRwanda',
    date: '1 day ago',
    content: 'Insights from the recent #AgriResilience conference: The data clearly shows that empowering local cooperatives through micro-finance interventions drives sustained productivity in rural areas. 💡🌿 #PolicyResearch #Rwanda #L4D',
    image: null,
    likes: 89,
    comments: 12,
    link: '#',
  },
  {
    id: 3,
    platform: 'linkedin',
    author: 'High Lands Centre of Leadership for Development',
    handle: '@L4DRwanda',
    date: '3 days ago',
    content: 'Our team is growing! We are currently hiring experienced Field Supervisors across various locations in Rwanda. If you have a background in social sciences and project management, explore the career opportunities on our website. Join us in shaping policy practice.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    likes: 312,
    comments: 45,
    link: '#',
  }
];

const SocialMediaFeed: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50 skew-y-3 transform origin-bottom-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-teal-600"></span>
                Stay Connected
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Join the Conversation
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Follow our latest field research updates, professional milestones, and policy insights across our social channels.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a href="#" className="w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 hover:-translate-y-1 transition-all duration-300">
                <Linkedin className="w-6 h-6 fill-current" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black/30 hover:bg-black/5 hover:-translate-y-1 transition-all duration-300">
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOCIAL_POSTS.map((post, index) => (
            <Reveal key={post.id} delay={index * 150} className="flex h-full">
              <div className="group bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col w-full relative overflow-hidden">
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 transition-colors duration-500 ${post.platform === 'linkedin' ? 'bg-[#0A66C2]' : 'bg-black'}`}></div>

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="text-lg font-bold font-serif text-teal-800">L4D</span>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-gray-900 text-sm leading-tight truncate pr-4">{post.author}</h4>
                      <p className="text-gray-500 text-xs mt-1 font-medium">{post.handle} • {post.date}</p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 group-hover:bg-opacity-0 transition-colors">
                    {post.platform === 'linkedin' ? (
                      <Linkedin className="w-4 h-4 text-[#0A66C2] fill-current" />
                    ) : (
                      <XIcon className="w-3.5 h-3.5 text-black" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 whitespace-pre-wrap flex-1 group-hover:text-gray-900 transition-colors">
                    {post.content}
                  </p>
                  
                  {post.image && (
                    <div className="rounded-2xl overflow-hidden mb-6 border border-gray-100 h-52 relative group-hover:shadow-md transition-shadow">
                      <img src={post.image} alt="Post media" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                    </div>
                  )}
                </div>

                {/* Footer/Actions */}
                <div className="pt-5 border-t border-gray-100 flex items-center gap-6 text-gray-400">
                  <button className="flex items-center gap-2 hover:text-rose-500 transition-colors group/btn">
                    <div className="p-1.5 rounded-full group-hover/btn:bg-rose-50 transition-colors">
                       <Heart className="w-4 h-4 group-hover/btn:fill-current" />
                    </div>
                    <span className="text-xs font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-teal-600 transition-colors group/btn">
                    <div className="p-1.5 rounded-full group-hover/btn:bg-teal-50 transition-colors">
                       <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors group/btn">
                    <div className="p-1.5 rounded-full group-hover/btn:bg-indigo-50 transition-colors">
                       <Share2 className="w-4 h-4" />
                    </div>
                  </button>
                  
                  <a 
                    href={post.link} 
                    className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500 hover:bg-teal-600 hover:text-white transition-all shadow-sm hover:shadow group-hover:-translate-y-0.5"
                    title="View original post"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;
