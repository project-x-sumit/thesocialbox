import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useContact } from '../context/ContactContext';

export default function HomePage() {
  const { openContact } = useContact();
  const trackRef = useRef(null);
  
  // Physics State for Drag & Inertia
  const physics = useRef({
    currentX: 0,
    targetX: 0,
    isDragging: false,
    startX: 0
  });

  // Unified Drag Handlers for Mouse & Touch
  const getPoint = (e) => e.touches ? e.touches[0].pageX : e.pageX;

  const handleDragStart = (e) => {
    physics.current.isDragging = true;
    physics.current.startX = getPoint(e) - physics.current.targetX;
    if (trackRef.current) trackRef.current.style.cursor = 'grabbing';
  };

  const handleDragMove = (e) => {
    if (!physics.current.isDragging) return;
    physics.current.targetX = getPoint(e) - physics.current.startX;
  };

  const handleDragEnd = () => {
    physics.current.isDragging = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  useEffect(() => {
    let animationFrameId;
    const updateAnimation = () => {
      if (!physics.current.isDragging) {
        physics.current.targetX -= 1.5; 
      }
      const prevX = physics.current.currentX;
      physics.current.currentX += (physics.current.targetX - physics.current.currentX) * (physics.current.isDragging ? 0.2 : 0.05);

      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const halfWidth = trackWidth / 2;
        if (physics.current.currentX <= -halfWidth) {
          physics.current.currentX += halfWidth;
          physics.current.targetX += halfWidth;
          physics.current.startX += halfWidth; 
        } else if (physics.current.currentX > 0) {
          physics.current.currentX -= halfWidth;
          physics.current.targetX -= halfWidth;
          physics.current.startX -= halfWidth;
        }
        const velocity = physics.current.currentX - prevX;
        const tiltY = Math.max(-12, Math.min(12, velocity * 0.3)); 
        const translateZ = Math.min(120, Math.abs(velocity) * 3); 
        trackRef.current.style.transform = `translate3d(${physics.current.currentX}px, 0, ${-translateZ}px) rotateY(${tiltY}deg)`;
      }
      animationFrameId = requestAnimationFrame(updateAnimation);
    };
    updateAnimation();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  const theme = {
    bg: "bg-[#F8F7F4]", 
    bgDarker: "bg-[#EFECE6]", 
    yellow: "bg-[#F2EC24]",
    textHighlight: "bg-[#F2EC24] px-3 py-1 rounded-lg text-black", 
    textMain: "text-[#111111]",
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-manrope selection:bg-[#F2EC24] selection:text-black overflow-x-hidden relative`}>
      

      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[110vh] w-full bg-[#F8F7F4] flex flex-col justify-center overflow-x-hidden pt-32 md:pt-48 pb-20 md:pb-32">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center z-10 px-6">
          <Reveal delay={100} className="mb-8 md:mb-12 mt-16 md:mt-0">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md text-sm text-zinc-600 font-medium shadow-glow">
              <span className="w-2 h-2 rounded-full bg-[#F2EC24] border border-zinc-300 animate-pulse"></span>
              Join over 2M+ Content Creators
            </div>
          </Reveal>
          
          <Reveal delay={200} className="text-center w-full max-w-7xl mx-auto pointer-events-none">
            <h1 className="font-oswald text-4xl md:text-8xl lg:text-[9vw] leading-[1.2] md:leading-[0.95] tracking-tight uppercase">
              <span className="block md:inline">Engage Audiences</span>
              <span className="hidden md:inline"> with</span>
              <br className="hidden md:block"/>
              <span className="block md:inline mt-2 md:mt-0 whitespace-nowrap">
                <span className="md:hidden">with </span>
                <span className={`${theme.textHighlight} italic inline-block shadow-xl md:mt-4`}>Stunning Videos</span>
              </span>
              <span className="block md:inline mt-2 md:mt-0">
                 <span className="hidden md:inline"> </span>& Campaigns
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={300} className="mt-12 mb-16 text-center pointer-events-none">
            <p className="text-zinc-600 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
              Boost Your Brand with High-Impact Content from our expert creators. Our team is ready to propel your business forward analytically and creatively.
            </p>
          </Reveal>
          <Reveal delay={400} className="z-20">
            <button 
              onClick={openContact}
              className="mt-4 px-12 py-5 bg-zinc-800 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#F2EC24] hover:text-black hover:scale-110 transition-all duration-300 shadow-xl shadow-black/10"
            >
              Get Started
            </button>
          </Reveal>
        </div>

        {/* 3D Horizontal Drag Track */}
        <Reveal delay={500} className="relative w-full mt-24 pb-24 pt-8 [perspective:1400px]">
          <div 
            className="w-full relative touch-pan-y"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div 
              ref={trackRef} 
              className="flex w-max will-change-transform transform-style-3d items-center cursor-grab active:cursor-grabbing"
            >
              {[
                ...Array(4).fill([
                  "/videos/reel-1.mp4",
                  "/videos/reel-2.mp4",
                  "/videos/reel-3.mp4",
                  "/videos/reel-4.mp4",
                  "/videos/reel-5.mp4",
                  "/videos/reel-6.mp4",
                  "/videos/reel-7.mp4",
                  "/videos/reel-8.mp4"
                ]).flat()
              ].map((videoSrc, i) => (
                <div key={i} className="pr-[40px] flex-shrink-0">
                  <div className="portfolio-card w-[55vw] md:w-64 lg:w-72 h-[100vw] md:h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden relative bg-zinc-900 border border-zinc-200 shadow-lg group">
                    <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover select-none pointer-events-none">
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-white/0 transition-colors duration-500 hover:bg-white/10 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#F8F7F4] to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#F8F7F4] to-transparent pointer-events-none z-10"></div>
        </Reveal>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-[#F2EC24] rounded-full blur-[250px] opacity-15 pointer-events-none"></div>
      </section>

      {/* Marquee Divider */}
      <div className="w-full bg-[#F2EC24] text-black py-4 overflow-hidden border-y border-zinc-200 flex whitespace-nowrap shadow-sm">
        <div className="animate-marquee inline-block font-oswald text-2xl md:text-4xl uppercase tracking-widest font-bold">
          DIGITAL STRATEGY • INFLUENCER MARKETING • CREATIVE CONSULTANCY • MEME MARKETING • ONLINE REPUTATION • WEB DEVELOPMENT • 
          DIGITAL STRATEGY • INFLUENCER MARKETING • CREATIVE CONSULTANCY • MEME MARKETING • ONLINE REPUTATION • WEB DEVELOPMENT • 
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 md:py-64 px-6 md:px-12 max-w-screen-2xl mx-auto relative flex flex-col items-center">
        <Reveal>
          <div className="lg:hidden flex flex-col items-center justify-center w-full mb-12">
            <h2 className="font-oswald text-6xl md:text-8xl leading-[0.85] tracking-tighter uppercase text-[#111] mb-6 flex items-center">
              ABOUT <span className="text-[#F2EC24] font-light ml-2 drop-shadow-sm">[ ]</span>
            </h2>
            <div className="px-2 max-w-md">
              <p className="font-manrope text-xl md:text-2xl italic text-zinc-600 font-light text-center leading-relaxed">
                <span className="font-semibold text-[#111]">The Social Box</span> is a full service digital agency built to help brands grow <span className="font-semibold text-[#111]">analytically</span> and <span className="font-semibold text-[#111]">creatively</span>.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex flex-row items-center justify-center w-full mb-32">
            <div className="font-oswald text-[14vw] leading-[0.85] tracking-tighter uppercase text-[#111] flex items-center">
              AB<span className="text-[#F2EC24] font-light ml-4 drop-shadow-sm">[</span>
            </div>
            <div className="flex items-center justify-center px-6 max-w-md">
              <p className="font-manrope text-3xl italic text-zinc-600 font-light text-center leading-relaxed">
                <span className="font-semibold text-[#111]">The Social Box</span> is a full service digital agency built to help brands grow <span className="font-semibold text-[#111]">analytically</span> and <span className="font-semibold text-[#111]">creatively</span>.
              </p>
            </div>
            <div className="font-oswald text-[14vw] leading-[0.85] tracking-tighter uppercase text-[#111] flex items-center">
              <span className="text-[#F2EC24] font-light mr-4 drop-shadow-sm">]</span>UT US
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 w-full max-w-7xl">
          <Reveal delay={200}>
            <p className="text-zinc-700 text-lg lg:text-xl font-medium leading-relaxed">
              From Social Media Management and Influencer Marketing to Website Development and Online Reputation Management (ORM) - we deliver end-to-end digital solutions that connect strategy, creativity, and performance.
            </p>
          </Reveal>
          <Reveal delay={300} className="relative flex">
            <div className="flex-shrink-0 mr-4 mt-1">
               <MousePointer2 className="w-8 h-8 text-[#D4C000] drop-shadow-sm -rotate-12" strokeWidth="2.5" strokeDasharray="4 4" fill="transparent" />
            </div>
            <p className="text-zinc-700 text-lg lg:text-xl font-medium leading-relaxed">
              What sets us apart is our ability to combine data-driven insights with creative innovation. Every campaign, every post, every click is backed by analysis, intent, and measurable outcomes.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-zinc-700 text-lg lg:text-xl font-medium leading-relaxed">
              We don't just create noise online - we craft narratives that drive engagement, build communities, and deliver tangible business results. At The Social Box, creativity meets data - and that's where real impact begins.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Section (Partial Overview) */}
      <section id="services" className="bg-[#EAE8E1] text-zinc-900 py-24 md:py-64 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[5rem] border-t border-zinc-200">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b-2 border-zinc-300 pb-8">
              <h2 className="font-oswald text-6xl md:text-9xl leading-[1.1] tracking-tighter uppercase">
                <span className="font-light tracking-widest text-lg md:text-2xl block mb-4 text-zinc-500 uppercase">THE SOCIAL BOX</span>
                [ ]UR<br/>SERVICES
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {[
              { num: "01", title: "SOCIAL MEDIA MANAGEMENT", desc: "Annual/Quarter Strategy\nContent Creation\nCommunity Management" },
              { num: "02", title: "INFLUENCER MARKETING", desc: "Influencer Discovery\nUGC Content\nCampaign Planning\nNegotiation & Tracking" },
              { num: "03", title: "WEBSITE DEVELOPMENT", desc: "UI/UX Design\nWeb Development\nSEO Optimization\nMaintenance & Analytics" },
              { num: "04", title: "ONLINE REPUTATION (ORM)", desc: "Monitoring & Listening\nReview Management\nCrisis Handling\nSentiment Analysis" },
              { num: "05", title: "MEME MARKETING & PR", desc: "Meme Creation\nPublications\nMedia Pages\nTwitter Trends" },
              { num: "06", title: "CREATIVE CONSULTANCY", desc: "360 Creative Services\nBrand Events\nCulture Marketing" }
            ].map((service, index) => (
              <Reveal key={index} delay={index * 100} type="fade-up">
                <div className="group cursor-pointer p-8 -m-8 rounded-3xl hover:bg-white/40 transition-all duration-500 backdrop-blur-sm">
                  <div className="font-oswald text-7xl text-zinc-300 group-hover:text-[#F2EC24] transition-colors duration-500 mb-6 group-hover:scale-110 origin-left inline-block">
                    {service.num}
                  </div>
                  <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-6 text-zinc-900 block group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="font-medium text-zinc-600 text-xl leading-relaxed whitespace-pre-line border-l-4 border-transparent group-hover:border-[#F2EC24] pl-6 transition-all duration-300">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 md:py-64 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <h2 className="font-oswald text-[14vw] md:text-[15vw] leading-[0.8] tracking-tighter text-center uppercase mb-16 md:mb-32 text-[#111]">
              I M P A C T
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal delay={200} className="relative aspect-auto md:aspect-[4/3] bg-[#F8F7F4] rounded-3xl border border-zinc-200 p-8 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/5">
              <div className="z-10 relative">
                <h3 className="font-oswald text-4xl md:text-7xl tracking-tighter mb-4 text-[#111]"><span className={theme.textHighlight}>[ ]</span>UR REACH</h3>
                <p className="text-zinc-600 text-lg md:text-xl font-light max-w-xs">2M+ Influencers & Creators spread across 25 zones in India.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 z-10 relative mt-12">
                {[
                  { region: "Central", val: "300K+" },
                  { region: "Western", val: "300K+" },
                  { region: "Northern", val: "200K+" },
                  { region: "Southern", val: "100K+" },
                  { region: "Eastern", val: "70K+" },
                  { region: "North Eastern", val: "50K+" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-zinc-300 pl-4">
                    <div className="text-2xl font-oswald font-bold text-[#111]">{stat.val}</div>
                    <div className="text-xs tracking-widest text-zinc-500 uppercase">{stat.region}</div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#F2EC24]/30 blur-[80px] rounded-full"></div>
            </Reveal>
            <div className="grid grid-cols-1 gap-12">
              <Reveal delay={300} className="flex flex-col gap-2 border-b border-zinc-200 pb-8">
                <div className="font-oswald text-6xl md:text-8xl text-[#111]">2M+</div>
                <div className="text-xl md:text-2xl font-semibold text-[#111] uppercase tracking-wide">Content Creators</div>
                <div className="text-zinc-500 text-sm tracking-widest uppercase">From 25+ Niche Portfolios</div>
              </Reveal>
              <Reveal delay={400} className="flex flex-col gap-2 border-b border-zinc-200 pb-8">
                <div className="font-oswald text-6xl md:text-8xl text-[#111]">5000+</div>
                <div className="text-xl md:text-2xl font-semibold text-[#111] uppercase tracking-wide">Scalability Strength</div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="pt-20 md:pt-32 pb-0 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-40 gap-6 md:gap-12">
            <h2 className="font-oswald text-6xl md:text-[10vw] leading-[1] tracking-tighter uppercase">
              CASE <br/>
              <span className={`${theme.textHighlight} inline-block mt-4 md:mt-8`}>STUDIES</span>
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-col gap-64 pb-20">
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 pr-0 lg:pr-12">
                <h3 className="text-6xl md:text-8xl font-oswald leading-[1.1] tracking-tighter text-[#111] mb-6 uppercase">MOCHI</h3>
                <div className="font-oswald text-2xl tracking-widest text-zinc-500 uppercase mb-8 border-b border-zinc-200 pb-4">SOCIAL MEDIA HANDLING</div>
                <p className="text-zinc-600 text-lg md:text-xl font-medium leading-relaxed">
                  Over six months, we strengthened Mochi's digital presence with consistent always-on content and high-impact festive campaigns.
                </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[350px] md:max-w-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-zinc-200 bg-white group relative">
                <img src="/image_ac314e.jpg" alt="Mochi" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1611162618758-2a29a995354b?q=80&w=800&auto=format&fit=crop"; }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
