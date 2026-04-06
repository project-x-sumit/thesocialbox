import React from 'react';
import { BarChart3, Globe, Zap, Users, TrendingUp, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useContact } from '../context/ContactContext';

export default function ImpactPage() {
  const { openContact } = useContact();
  const theme = {
    bg: "bg-[#F8F7F4]", 
    bgDarker: "bg-[#EFECE6]", 
    yellow: "bg-[#F2EC24]",
    textHighlight: "bg-[#F2EC24] px-4 py-2 rounded-xl text-black", 
    textMain: "text-[#111111]",
  };

  const stats = [
    { label: "Total Reach", value: "500M+", description: "Brand impressions across all campaigns in 2024." },
    { label: "Active Creators", value: "2M+", description: "Diverse creator network managed effectively." },
    { label: "Avg. Engagement", value: "18%", description: "Significantly higher than industry standards." },
    { label: "Campaigns Run", value: "1200+", description: "Successful digital stories told globally." }
  ];

  const caseStudies = [
    {
       title: "Meme Marketing Surge",
       client: "FMCG Brand",
       impact: "300% ROI",
       desc: "Viral campaign that trended for 72 hours, resulting in massive sales growth.",
       tags: ["Viral", "Meme", "ROI"]
    },
    {
       title: "Influencer Roadblock",
       client: "Tech Startup",
       impact: "1M+ App Installs",
       desc: "Coordinated 500+ influencers in 24 hours for a seamless launch across India.",
       tags: ["Growth", "Influencer", "Scale"]
    },
    {
       title: "Reputation Turnaround",
       client: "E-commerce Giant",
       impact: "95% Positive Sentiment",
       desc: "Transformed negative PR into a customer loyalty triumph through critical ORM management.",
       tags: ["ORM", "Crisis", "Sentiment"]
    }
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-manrope selection:bg-[#F2EC24] selection:text-black overflow-x-hidden pt-24 md:pt-32 pb-20`}>
      
      {/* Hero Section - Same Clean Stacked Layout */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32 md:mb-56">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md text-sm text-zinc-600 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F2EC24] animate-pulse"></span>
            Real Results
          </div>
          
          <div className="flex flex-col gap-4 md:gap-10 mb-16 md:mb-24">
            <h1 className="font-oswald text-[12vw] md:text-8xl lg:text-[10vw] leading-tight tracking-tighter uppercase text-zinc-300">
              DRIVING REAL
            </h1>
            <div className="relative inline-block w-fit">
              <h1 className="font-oswald text-[14vw] md:text-9xl lg:text-[11vw] leading-none tracking-tighter uppercase relative z-10 text-black">
                <span className="relative z-10 px-4 py-3 md:px-6 md:py-8 inline-block">
                  CULTURAL IMPACT
                </span>
                <div className="absolute inset-0 bg-[#F2EC24] rounded-2xl md:rounded-[3rem] shadow-2xl skew-x-[-2deg] -z-0"></div>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-zinc-200 pt-16">
            <p className="text-zinc-600 max-w-xl text-2xl md:text-3xl font-light leading-relaxed italic">
              "We measure our success by the <span className="font-semibold text-black underline decoration-[#F2EC24] decoration-4 underline-offset-8">conversations</span> we start and the <span className="font-semibold text-black underline decoration-[#F2EC24] decoration-4 underline-offset-8">growth</span> we deliver."
            </p>
            <div className="space-y-6 pt-4">
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Proven Performance • Since 2024</p>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-100 shadow-sm">
                     <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-100 shadow-sm">
                     <Users className="w-6 h-6 text-black" />
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-100 shadow-sm">
                     <Globe className="w-6 h-6 text-black" />
                  </div>
               </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats Grid - Large & High Impact */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {stats.map((stat, i) => (
             <Reveal key={i} delay={i * 100} type="fade-up">
               <div className="p-12 bg-zinc-900 text-white rounded-[3rem] border border-white/5 hover:border-[#F2EC24]/50 transition-all duration-500 hover:-translate-y-4">
                  <div className="font-oswald text-6xl md:text-7xl font-bold mb-4 tracking-tighter text-[#F2EC24]">{stat.value}</div>
                  <h3 className="font-oswald text-xl uppercase tracking-widest mb-4 font-black">{stat.label}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{stat.description}</p>
               </div>
             </Reveal>
           ))}
        </div>
      </section>

      {/* Case Studies / Success Stories */}
      <section className={`py-32 md:py-56 ${theme.bgDarker} rounded-[5rem] mx-4 md:mx-12 mb-48 relative overflow-hidden`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal className="mb-24">
            <h2 className="font-oswald text-5xl md:text-8xl tracking-tight uppercase leading-none">
              SUCCESS <br/>
              <span className="italic text-zinc-400">STORIES</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {caseStudies.map((study, i) => (
              <Reveal key={i} delay={i * 150} type="scale-up">
                <div className="group h-full bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 flex flex-col justify-between hover:scale-[1.02] transition-all duration-500 border border-zinc-100">
                  <div>
                    <div className="flex justify-between items-start mb-10">
                       <span className="px-5 py-2 bg-[#F8F7F4] rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 outline outline-1 outline-zinc-200">{study.client}</span>
                       <div className="w-12 h-12 bg-[#F2EC24] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
                          <ArrowUpRight className="w-6 h-6 text-black" />
                       </div>
                    </div>
                    <h3 className="font-oswald text-3xl font-bold uppercase mb-6 leading-tight">{study.title}</h3>
                    <div className="font-oswald text-5xl text-zinc-300 font-black mb-8">{study.impact}</div>
                    <p className="text-zinc-500 font-light text-lg italic leading-relaxed mb-10">"{study.desc}"</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {study.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"># {tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal> 
            ))}
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute -bottom-24 -right-24 w-[50vw] h-[50vw] bg-[#F2EC24]/5 rounded-full blur-[150px] pointer-events-none"></div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-48 text-center">
        <Reveal>
           <MessageSquare className="w-16 h-16 text-[#F2EC24] mx-auto mb-10" />
           <p className="font-manrope text-3xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight text-zinc-800 mb-16 italic px-4 md:px-20">
              "The Social Box doesn't just manage creators; they curate <span className="font-bold text-black border-b-4 border-[#F2EC24]">momentum</span>. They are the only team that truly understands the rhythm of digital India."
           </p>
           <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-zinc-200 mb-4 overflow-hidden shadow-xl border-4 border-white">
                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" alt="Client Logo" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-oswald text-xl font-bold uppercase tracking-widest">Global Brand Manager</h4>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">Tier 1 E-commerce Platform</p>
           </div>
        </Reveal>
      </section>

      {/* Marquee Service Banner */}
      <div className="w-full bg-[#111] text-white py-16 overflow-hidden flex whitespace-nowrap mb-24 shadow-2xl relative">
        <div className="animate-marquee inline-block font-oswald text-6xl md:text-[8vw] uppercase tracking-tighter font-black opacity-20">
          • DATA DRIVEN IMPACT • DATA DRIVEN IMPACT • DATA DRIVEN IMPACT • DATA DRIVEN IMPACT • 
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
           <div className="px-10 py-4 bg-[#F2EC24] text-black font-oswald font-black text-2xl uppercase tracking-[0.4em] rounded-full shadow-2xl skew-x-[-10deg]">
              IMPACT REPORT
           </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto py-32 text-center">
        <Reveal>
           <h2 className="font-oswald text-5xl md:text-[5vw] tracking-tight uppercase mb-12 leading-tight">
              Let's make an <br/> <span className="text-[#F2EC24] underline decoration-zinc-900 underline-offset-[16px]">Impact</span> Together.
           </h2>
            <button 
              onClick={openContact}
              className="px-16 py-7 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#F2EC24] hover:text-black transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group"
            >
               <span className="flex items-center gap-3">
                  Start Your Growth Journey <Zap className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
               </span>
            </button>
        </Reveal>
      </section>

    </div>
  );
}
