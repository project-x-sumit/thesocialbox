import React from 'react';
import { ArrowUpRight, TrendingUp, Users, Target, Zap, MousePointer2, ChevronRight, BarChart, Eye, Share2, Award } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useContact } from '../context/ContactContext';

export default function CaseStudyPage() {
  const { openContact } = useContact();
  const theme = {
    bg: "bg-[#F8F7F4]", 
    bgDarker: "bg-[#EFECE6]", 
    yellow: "bg-[#F2EC24]", 
    textHighlight: "bg-[#F2EC24] px-6 py-2 rounded-2xl text-black", 
    textMain: "text-[#111111]",
  };

  const cases = [
    {
      title: "MOCHI",
      subtitle: "SOCIAL MEDIA HANDLING",
      tagline: "Building Main Character Energy",
      desc: "Strengthened digital presence with consistent always-on content and high-impact festive campaigns. Combined daily styling and creator-led executions to boost engagement and seasonal sales.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      category: "Fashion & Retail",
      themeColor: "#E6F035",
      stats: [
        { label: "Reach", value: "2M+", icon: <Eye className="w-5 h-5 text-zinc-400" /> },
        { label: "Engagement", value: "12%", icon: <Share2 className="w-5 h-5 text-zinc-400" /> },
        { label: "ROI", value: "4.5x", icon: <TrendingUp className="w-5 h-5 text-zinc-400" /> }
      ]
    },
    {
      title: "AHMEDABAD LIONS",
      subtitle: "SOCIAL MEDIA HANDLING",
      tagline: "Evolving a Fan Community",
      desc: "From pre-launch presence to a thriving community. Consistently driven match-day excitement, player fandom, and playoff momentum through tournament-led storytelling.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop",
      category: "Sports Management",
      themeColor: "#000",
      stats: [
        { label: "Followers", value: "15K+", icon: <Users className="w-5 h-5 text-zinc-400" /> },
        { label: "Reel Views", value: "170K+", icon: <Eye className="w-5 h-5 text-zinc-400" /> },
        { label: "Posts", value: "380+", icon: <BarChart className="w-5 h-5 text-zinc-400" /> }
      ]
    },
    {
      title: "BENGALURU STRIKERS",
      subtitle: "SOCIAL MEDIA HANDLING",
      tagline: "Sustaining Digital Interest",
      desc: "Organic traction throughout the tournament and beyond. Scaled reels to 275K+ views through performance-led storytelling and consistent visual identity.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
      category: "Sports Management",
      themeColor: "#F2EC24",
      stats: [
        { label: "Followers", value: "13K+", icon: <Users className="w-5 h-5 text-zinc-400" /> },
        { label: "Max Views", value: "275K+", icon: <TrendingUp className="w-5 h-5 text-zinc-400" /> },
        { label: "Interviews", value: "20+", icon: <Share2 className="w-5 h-5 text-zinc-400" /> }
      ]
    },
    {
      title: "BOURBON",
      subtitle: "FMCG CAMPAIGN",
      tagline: "Recipe-Driven Engagement",
      objective: "Onboarded food influencers to experiment with innovative recipe formats.",
      desc: "Fresh recipes for audiences to try out with multiple options. Resulted in high organic engagement and a widespread digital footprint.",
      image: "https://images.unsplash.com/photo-1499195333224-3ce974eecfb4?q=80&w=800&auto=format&fit=crop",
      category: "FMCG",
      themeColor: "#6B3E2E",
      stats: [
        { label: "Influencers", value: "50", icon: <Users className="w-5 h-5 text-zinc-400" /> },
        { label: "Reach", value: "3M+", icon: <Eye className="w-5 h-5 text-zinc-400" /> },
        { label: "Engagement", value: "4%", icon: <TrendingUp className="w-5 h-5 text-zinc-400" /> }
      ]
    },
    {
      title: "IMAGINE BY AMPLE",
      subtitle: "ELECTRONICS CAMPAIGN",
      tagline: "Nationwide Product Launch Buzz",
      objective: "Created hype for iPhone 17 Series launch through premium creator content.",
      desc: "Unboxing, first-look, and in-store experience content aligned with Apple's brand. Leveraged high-credibility tech and lifestyle creators.",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba3f21?q=80&w=800&auto=format&fit=crop",
      category: "Electronics",
      themeColor: "#000",
      stats: [
        { label: "Influencers", value: "40", icon: <Users className="w-5 h-5 text-zinc-400" /> },
        { label: "Total Reach", value: "801K+", icon: <Eye className="w-5 h-5 text-zinc-400" /> },
        { label: "Engagement", value: "3.52%", icon: <TrendingUp className="w-5 h-5 text-zinc-400" /> }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-manrope selection:bg-[#F2EC24] selection:text-black overflow-x-hidden pt-24 md:pt-32 pb-20`}>
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32 md:mb-56">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md text-sm text-zinc-600 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F2EC24] animate-pulse"></span>
            Case Studies
          </div>
          
          <div className="flex flex-col gap-4 md:gap-10 mb-16 md:mb-24">
            <h1 className="font-oswald text-[12vw] md:text-8xl lg:text-[10vw] leading-tight tracking-tighter uppercase text-zinc-300">
               OUR PROOF OF
            </h1>
            <div className="relative inline-block w-fit">
              <h1 className="font-oswald text-[14vw] md:text-9xl lg:text-[11vw] leading-none tracking-tighter uppercase relative z-10 text-black">
                <span className="relative z-10 px-4 py-3 md:px-6 md:py-8 inline-block">
                  PERFORMANCE
                </span>
                <div className="absolute inset-0 bg-[#F2EC24] rounded-2xl md:rounded-[3rem] shadow-2xl skew-x-[-2deg] -z-0"></div>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start border-t border-zinc-200 pt-16">
            <p className="text-zinc-600 max-w-xl text-2xl md:text-4xl font-light leading-relaxed italic">
              "We transform visions into viral realities. Metrics that matter, results that resonate."
            </p>
            <div className="flex flex-col gap-10">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#F2EC24] rounded-[1.5rem] flex items-center justify-center shadow-lg group hover:rotate-12 transition-transform">
                     <Award className="w-10 h-10 text-black" />
                  </div>
                  <div>
                     <p className="font-oswald text-3xl font-bold">500+</p>
                     <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Brands Empowered Collectively</p>
                  </div>
               </div>
               <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-xs">
                  Scroll for a deep dive into our most successful digital stories.
               </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Case Studies - Vertical Stacking & Better Proportions */}
      <section className="px-4 md:px-12 max-w-screen-2xl mx-auto flex flex-col gap-48 md:gap-72">
         {cases.map((cs, i) => (
           <div key={i} className="group relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
                 {/* Visual - 7 cols */}
                 <div className={`lg:col-span-7 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Reveal type="scale-up">
                       <div className="relative aspect-[4/3] rounded-[3.5rem] md:rounded-[5rem] overflow-hidden shadow-2xl group/img">
                          <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-[1.5s]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                          
                          <div className="absolute top-10 left-10 py-3 px-6 bg-white/90 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl border border-white/20">
                             {cs.category}
                          </div>
                          
                          <div className="absolute bottom-10 left-10 p-4 bg-[#F2EC24] rounded-2xl shadow-2xl flex items-center gap-4 translate-y-20 group-hover/img:translate-y-0 transition-transform duration-500">
                             <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-oswald font-black">CS</div>
                             <p className="text-black font-black uppercase tracking-widest text-[10px]">{cs.tagline}</p>
                          </div>
                       </div>
                    </Reveal>
                 </div>

                 {/* Content - 5 cols */}
                 <div className={`lg:col-span-5 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Reveal delay={200}>
                       <div className="flex flex-col h-full">
                          <div className="inline-flex items-center gap-4 mb-4">
                             <span className="w-12 h-0.5 bg-[#F2EC24]"></span>
                             <span className="text-zinc-400 uppercase tracking-widest text-xs font-bold">{cs.subtitle}</span>
                          </div>
                          
                          <h2 className="font-oswald text-5xl md:text-8xl tracking-tighter uppercase mb-8 group-hover:text-[#D4C000] transition-colors">{cs.title}</h2>
                          
                          <div className="p-8 bg-zinc-900 rounded-[2.5rem] mb-12 shadow-2xl relative overflow-hidden group/box">
                             <div className="relative z-10">
                                {cs.objective && (
                                   <div className="mb-6">
                                      <p className="text-[#F2EC24] uppercase tracking-widest text-[9px] font-black mb-3">The Mission</p>
                                      <p className="text-white text-lg font-medium leading-relaxed italic border-l border-white/20 pl-4">{cs.objective}</p>
                                   </div>
                                )}
                                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                                   {cs.desc}
                                </p>
                             </div>
                             {/* Decorative bg element */}
                             <div className="absolute bottom-[-20%] right-[-10%] font-oswald text-white/5 text-9xl font-black select-none pointer-events-none group-hover/box:scale-110 transition-transform duration-1000">
                                {cs.title.split(' ')[0]}
                             </div>
                          </div>

                          {/* Stats Grid - High End Alignment */}
                          <div className="grid grid-cols-3 gap-4 mb-12">
                             {cs.stats.map((stat, j) => (
                                <div key={j} className="p-6 bg-white rounded-[2rem] border border-zinc-100 shadow-lg shadow-black/0 hover:shadow-black/5 hover:-translate-y-2 transition-all duration-500 text-center">
                                   <div className="flex justify-center mb-3 text-zinc-100 group-hover:text-[#F2EC24] transition-colors">{stat.icon}</div>
                                   <div className="text-3xl font-oswald font-black mb-1">{stat.value}</div>
                                   <div className="text-zinc-400 uppercase tracking-widest text-[8px] font-black">{stat.label}</div>
                                </div>
                             ))}
                          </div>

                          <button className="w-fit flex items-center gap-4 bg-zinc-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#F2EC24] hover:text-black transition-all duration-500 shadow-xl self-start group/cta">
                             Explore Assets <ArrowUpRight className="w-5 h-5 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                          </button>
                       </div>
                    </Reveal>
                 </div>
              </div>
           </div>
         ))}
      </section>

      {/* Marquee & Final Lead Gen */}
      <section className="pt-64">
        <div className="w-full bg-[#111] text-white py-20 overflow-hidden flex whitespace-nowrap mb-24 shadow-2xl relative border-y border-white/5">
             <div className="animate-marquee inline-block font-oswald text-[10vw] uppercase font-black opacity-10 leading-none">
                BUILDING THE FUTURE • CASE STUDIES • IMPACT REPORT • BUILDING THE FUTURE • 
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#F2EC24] text-black px-12 py-3 font-oswald font-black text-2xl uppercase tracking-[0.3em] rounded-full rotate-[-2deg] shadow-2xl">
                   READY TO SCALE?
                </div>
             </div>
        </div>

        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto py-48 text-center relative">
           <Reveal>
              <h2 className="font-oswald text-5xl md:text-9xl tracking-tight uppercase mb-16 leading-[0.9]">
                 Let's create your <br/> <span className="text-[#D4C000] italic underline-offset-[20px] underline decoration-zinc-900">Next Big Case</span>.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                 <div className="p-10 bg-white rounded-[3rem] border border-zinc-100 shadow-xl group hover:border-[#F2EC24] transition-colors">
                    <Target className="w-10 h-10 mx-auto mb-6 text-[#F2EC24] group-hover:scale-125 transition-transform" />
                    <h4 className="font-oswald font-black uppercase mb-4">Strategic Audits</h4>
                    <p className="text-zinc-500 text-sm font-light">Comprehensive analysis of your current brand footprint.</p>
                 </div>
                 <div className="p-10 bg-white rounded-[3rem] border border-zinc-100 shadow-xl group hover:border-[#F2EC24] transition-colors">
                    <Zap className="w-10 h-10 mx-auto mb-6 text-[#F2EC24] group-hover:scale-125 transition-transform" />
                    <h4 className="font-oswald font-black uppercase mb-4">Rapid Growth</h4>
                    <p className="text-zinc-500 text-sm font-light">Custom influencer roadblocks that trigger massive discovery.</p>
                 </div>
                 <div className="p-10 bg-white rounded-[3rem] border border-zinc-100 shadow-xl group hover:border-[#F2EC24] transition-colors">
                    <TrendingUp className="w-10 h-10 mx-auto mb-6 text-[#F2EC24] group-hover:scale-125 transition-transform" />
                    <h4 className="font-oswald font-black uppercase mb-4">High ROI</h4>
                    <p className="text-zinc-500 text-sm font-light">Measurable results that drive bottom-line business value.</p>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <button 
                  onClick={openContact}
                  className="px-16 py-7 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#F2EC24] hover:text-black transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group"
                 >
                    Start Your Project
                 </button>
                 <button 
                  onClick={openContact}
                  className="px-16 py-7 bg-white text-black border border-zinc-200 rounded-full font-bold uppercase tracking-widest text-sm hover:border-[#F2EC24] transition-all duration-500 shadow-xl"
                 >
                    View Pricing
                 </button>
              </div>
           </Reveal>
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#F2EC24]/5 rounded-full blur-[200px] pointer-events-none"></div>
        </div>
      </section>

    </div>
  );
}
