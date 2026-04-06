import React from 'react';
import { ArrowRight, Target, Users, TrendingUp, Lightbulb, Heart, Award, Shield, Sparkles, Zap } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useContact } from '../context/ContactContext';

export default function AboutPage() {
  const { openContact } = useContact();
  const theme = {
    bg: "bg-[#F8F7F4]", 
    bgDarker: "bg-[#EFECE6]", 
    yellow: "bg-[#F2EC24]",
    textHighlight: "bg-[#F2EC24] px-4 py-2 rounded-xl text-black", 
    textMain: "text-[#111111]",
  };

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Analytical Depth",
      desc: "Every creative move we make is backed by data. We don't just guess; we analyze metrics to ensure growth."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Innovation",
      desc: "We push boundaries with content that stops the scroll and starts the conversation."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Measurable Impact",
      desc: "Our success is defined by yours. From reach to revenue, we deliver tangible outcomes."
    },
    {
       icon: <Heart className="w-8 h-8" />,
       title: "Cultural Relevance",
       desc: "We stay at the heart of digital culture, ensuring your brand is always part of the trend."
    }
  ];

  const team = [
    { name: "Team Leader", role: "Creative Strategist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
    { name: "Content Specialist", role: "Campaign Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
    { name: "Growth Specialist", role: "Data Analyst", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-manrope selection:bg-[#F2EC24] selection:text-black overflow-x-hidden pt-24 md:pt-32 pb-20`}>
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-40 md:mb-64">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md text-sm text-zinc-600 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F2EC24] animate-pulse"></span>
            Beyond the Box
          </div>
          
          <div className="flex flex-col gap-4 md:gap-10 mb-16 md:mb-24">
            <h1 className="font-oswald text-[12vw] md:text-8xl lg:text-[10vw] leading-tight tracking-tighter uppercase text-zinc-300">
              WE ARE
            </h1>
            <div className="relative inline-block w-fit">
              <h1 className="font-oswald text-[14vw] md:text-9xl lg:text-[11vw] leading-none tracking-tighter uppercase relative z-10 text-black">
                <span className="relative z-10 px-4 py-3 md:px-6 md:py-8 inline-block">
                  THE SOCIAL BOX
                </span>
                <div className="absolute inset-0 bg-[#F2EC24] rounded-2xl md:rounded-[3rem] shadow-2xl skew-x-[-2deg] -z-0"></div>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start border-t border-zinc-200 pt-20">
            <p className="text-zinc-600 max-w-xl text-2xl md:text-3xl font-light leading-relaxed italic">
              "A full-service digital agency built to help brands grow <span className="font-semibold text-black underline decoration-[#F2EC24] decoration-4 underline-offset-8">analytically</span> and <span className="font-semibold text-black underline decoration-[#F2EC24] decoration-4 underline-offset-8">creatively</span>."
            </p>
            <div className="flex flex-col gap-6 pt-2">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-100 italic font-oswald font-bold">1</div>
                  <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Strategy First Approach</p>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-100 italic font-oswald font-bold">2</div>
                  <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Data Driven Results</p>
               </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Our Story Section - More Breathing Room */}
      <section className={`py-40 md:py-64 ${theme.bgDarker} rounded-[4rem] md:rounded-[7rem] mx-4 md:mx-12 mb-40 relative overflow-hidden`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
            <Reveal>
              <h2 className="font-oswald text-5xl md:text-8xl tracking-tight uppercase mb-12 leading-[0.95]">
                Where Code <br/>
                Meets <span className="italic text-[#888]">Creativity</span>.
              </h2>
              <div className="space-y-8 text-xl md:text-2xl text-zinc-700 leading-relaxed font-light">
                <p>
                  Founded with a vision to redefine digital strategy, <span className="font-bold text-black border-b-2 border-black/10">The Social Box</span> bridges the gap between hard numbers and high-end creativity. We believe that modern marketing isn't just about showing up—it's about making a statement that resonates.
                </p>
                <p>
                  From our headquarters in India, we've scaled to manage a network of over <span className="font-bold text-black">2M+ creators</span> across 25+ zones. Our multidisciplinary team works at the intersection of psychology, technology, and art.
                </p>
                <div className="pt-12">
                   <div className="inline-flex items-center gap-6 p-6 bg-white rounded-3xl shadow-xl shadow-black/5 border border-zinc-100">
                      <div className="w-16 h-16 bg-[#F2EC24] rounded-2xl flex items-center justify-center">
                         <Award className="w-10 h-10 text-black" />
                      </div>
                      <div>
                         <div className="font-oswald text-3xl font-bold">500+</div>
                         <div className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Brands Empowered Globally</div>
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200} className="relative group">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Team workshop" className="w-full h-full object-cover" />
               </div>
               
               {/* Floating Stat Card */}
               <div className="absolute -bottom-12 -left-12 bg-zinc-900 text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block max-w-xs border border-white/10">
                  <Sparkles className="w-8 h-8 text-[#F2EC24] mb-4" />
                  <p className="font-oswald text-5xl font-bold mb-3 tracking-tighter">25+</p>
                  <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold leading-tight">Zones Across India Managed Effectively & Strategically</p>
               </div>
            </Reveal>
          </div>
        </div>
        
        {/* Background Pattern Component */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none font-oswald text-[40vw] font-black flex items-center justify-center leading-none">
           BOX
        </div>
      </section>

      {/* Core Values - Grid with Better Spacing */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-48">
        <Reveal className="text-center mb-24">
          <h2 className="font-oswald text-5xl md:text-7xl tracking-tighter uppercase mb-6">
             Our Core <span className={theme.textHighlight}>Principles</span>
          </h2>
          <p className="text-zinc-500 text-xl font-light">The pillars that define every campaign we build.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((val, i) => (
            <Reveal key={i} delay={i * 100} type="scale-up">
              <div className="bg-white p-12 rounded-[3rem] border border-zinc-100 h-full hover:border-[#F2EC24] transition-all duration-500 group shadow-lg shadow-black/0 hover:shadow-black/5 hover:-translate-y-4">
                <div className="w-20 h-20 bg-[#F8F7F4] rounded-[1.5rem] flex items-center justify-center mb-8 text-black group-hover:bg-[#F2EC24] transition-all duration-500 rotate-3 group-hover:rotate-12">
                  {val.icon}
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase mb-6 tracking-tight">{val.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light text-lg">{val.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team Section - Clean & High End */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-48">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-zinc-200 pb-12">
          <Reveal>
            <h2 className="font-oswald text-6xl md:text-9xl tracking-tight uppercase leading-[0.85]">
               MEET THE <br/>
               <span className="italic text-zinc-300">ARCHITECTS</span>
            </h2>
          </Reveal>
          <Reveal delay={200} className="max-w-md pb-4">
            <p className="text-zinc-600 text-xl font-light italic leading-relaxed">
              Driven by a shared passion for digital excellence and cultural impact. We are a collective of dreamers and doers.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 150} type="fade-up">
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 mb-8 border border-zinc-100 shadow-xl group-hover:shadow-2xl">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="pl-2">
                   <h3 className="font-oswald text-4xl font-bold uppercase group-hover:text-[#D4C000] transition-colors duration-300">{member.name}</h3>
                   <div className="flex items-center gap-3 mt-4">
                      <span className="w-8 h-[1px] bg-zinc-300"></span>
                      <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">{member.role}</p>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Marquee Service Banner - Dark Mode Version */}
      <div className="w-full bg-zinc-900 text-white py-16 overflow-hidden flex whitespace-nowrap mb-24 shadow-2xl relative">
        <div className="animate-marquee inline-block font-oswald text-6xl md:text-[8vw] uppercase tracking-tighter font-black opacity-20">
          SINCE 2024 • THE SOCIAL BOX • BEYOND THE ORDINARY • SINCE 2024 • THE SOCIAL BOX • BEYOND THE ORDINARY • 
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
           <div className="px-8 py-3 bg-[#F2EC24] text-black font-oswald font-black text-2xl uppercase tracking-[0.3em] rounded-full shadow-2xl">
              Est. 2024
           </div>
        </div>
      </div>

      {/* Final CTA - Clean & Focused */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto py-32 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#F2EC24]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <Reveal>
           <h2 className="font-oswald text-5xl md:text-8xl tracking-tight uppercase mb-12 leading-tight">
              Let's craft your <br/> next <span className="underline decoration-[#F2EC24] underline-offset-[12px]">Big Story</span>.
           </h2>
           <button 
             onClick={openContact}
             className="px-16 py-6 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#F2EC24] hover:text-black transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group"
           >
              <span className="flex items-center gap-3">
                 Join the Box Now <Zap className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
              </span>
           </button>
        </Reveal>
      </section>

    </div>
  );
}
