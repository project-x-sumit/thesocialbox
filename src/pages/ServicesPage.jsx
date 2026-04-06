import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Zap, BarChart3, Globe, Users, PenTool, Radio, Rocket } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useContact } from '../context/ContactContext';

export default function ServicesPage() {
  const { openContact } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Social Media Management',
    message: ''
  });

  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const theme = {
    bg: "bg-[#F8F7F4]", 
    bgDarker: "bg-[#EFECE6]", 
    yellow: "bg-[#F2EC24]",
    textHighlight: "bg-[#F2EC24] px-3 py-1 rounded-lg text-black", 
    textMain: "text-[#111111]",
  };

  const services = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Social Media Management",
      description: "We don't just post content; we build communities. Our data-driven approach ensures your brand's voice is heard across all platforms.",
      features: ["Annual/Quarter Strategy", "Content Creation", "Community Management", "Engagement Analytics"]
    },
    {
      icon: <Radio className="w-10 h-10" />,
      title: "Influencer Marketing",
      description: "Leverage our network of 2M+ creators to reach your target audience authentically and effectively.",
      features: ["Niche Targeting", "UGC Content", "Campaign Planning", "Performance Tracking"]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Website Development",
      description: "Building fast, responsive, and SEO-optimized websites that convert visitors into loyal customers.",
      features: ["UI/UX Design", "Custom Development", "SEO Strategy", "Analytics Dashboard"]
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Online Reputation (ORM)",
      description: "Maintain a pristine digital image. We monitor, manage, and influence your brand's online narrative.",
      features: ["Review Management", "Crisis Handling", "Sentiment Analysis", "Sentiment Analysis"]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Meme Marketing & PR",
      description: "Go viral with intent. We craft cultural moments that put your brand at the center of the conversation.",
      features: ["Viral Campaigns", "Meme Creation", "Twitter Trends", "Media PR"]
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Creative Consultancy",
      description: "360-degree creative services to align your brand with modern culture and digital trends.",
      features: ["Brand Voice", "Visual Identity", "Culture Marketing", "Event Strategy"]
    }
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-manrope selection:bg-[#F2EC24] selection:text-black overflow-x-hidden pt-32 pb-20`}>
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-20 md:mb-32">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-md text-sm text-zinc-600 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F2EC24] animate-pulse"></span>
            Elevate Your Digital Presence
          </div>
          <div className="flex flex-col gap-4 md:gap-10 mb-16 md:mb-24">
            <h1 className="font-oswald text-[10vw] md:text-7xl lg:text-[6vw] leading-tight tracking-tighter uppercase text-zinc-300 italic font-light">
              OUR EXPERTISE,
            </h1>
            <div className="relative inline-block w-fit">
              <h1 className="font-oswald text-[14vw] md:text-9xl lg:text-[9vw] leading-none tracking-tighter uppercase relative z-10 text-black">
                <span className="relative z-10 px-4 py-3 md:px-6 md:py-8 inline-block">
                  YOUR SUCCESS
                </span>
                <div className="absolute inset-0 bg-[#F2EC24] rounded-2xl md:rounded-[3rem] shadow-2xl skew-x-[-2deg] -z-0"></div>
              </h1>
            </div>
          </div>
          <p className="text-zinc-600 max-w-3xl text-xl md:text-2xl font-light leading-relaxed mb-12">
            A comprehensive suite of digital services designed for modern brands who demand analytical growth and creative excellence.
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={openContact}
              className="px-10 py-4 bg-zinc-800 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#F2EC24] hover:text-black transition-all duration-300 shadow-xl"
            >
              Start Your Project
            </button>
            <a href="#all-services" className="px-10 py-4 border border-zinc-300 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-zinc-100 transition-all duration-300">
              Explore Services
            </a>
          </div>
        </Reveal>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${theme.bgDarker} mb-20 md:mb-32`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { val: "2M+", label: "Creators" },
              { val: "500+", label: "Campaigns" },
              { val: "100%", label: "Retention" },
              { val: "24/7", label: "Support" }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center md:text-left">
                  <div className="font-oswald text-4xl md:text-6xl font-bold text-[#111] mb-2">{stat.val}</div>
                  <div className="text-xs md:text-sm tracking-widest text-zinc-500 uppercase font-semibold">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="all-services" className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32">
        <Reveal>
          <h2 className="font-oswald text-4xl md:text-6xl tracking-tighter uppercase mb-16 border-b border-zinc-200 pb-8 flex items-center gap-4">
             [ <span className="text-[#F2EC24]">Services</span> ] Detailed Overview
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100} type="scale-up">
              <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 hover:border-zinc-400 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 h-full flex flex-col">
                <div className="w-20 h-20 bg-[#F8F7F4] rounded-2xl flex items-center justify-center mb-8 text-[#111] group-hover:bg-[#F2EC24] group-hover:rotate-6 transition-all duration-500 shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-oswald text-3xl font-bold uppercase mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-600 text-lg font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-zinc-500">
                      <CheckCircle2 className="w-5 h-5 text-[#F2EC24]" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-[#F2EC24] transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lead Magnets / Why Choose Us Section */}
      <section className="bg-zinc-900 text-white py-24 md:py-32 rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-12 mb-32 overflow-hidden relative">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="font-oswald text-5xl md:text-8xl tracking-tighter uppercase mb-8 leading-[0.9]">
                Ready to <br/>
                <span className="text-[#F2EC24] italic">Dominate</span> the <br/>
                Digital Space?
              </h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed mb-12 max-w-lg">
                We combine human creativity with technical precision to deliver results that move the needle. No fluff, just performance.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Data-Driven Strategy", desc: "Every decision is backed by comprehensive analysis." },
                  { title: "Exclusive Creator Network", desc: "Direct access to top-tier influencers across India." },
                  { title: "Fast Execution", desc: "Go viral in hours, not weeks." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Rocket className="w-6 h-6 text-[#F2EC24]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-lg mb-1">{item.title}</h4>
                      <p className="text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div id="contact-form" className="bg-white rounded-[2rem] p-8 md:p-12 text-[#111] shadow-2xl relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2EC24]/10 blur-3xl -z-10"></div>
                <h3 className="font-oswald text-4xl font-bold uppercase mb-8">Get a Free Proposal</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-[#f8f7f4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F2EC24] outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Work Email</label>
                       <input type="email" placeholder="john@company.com" className="w-full bg-[#f8f7f4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F2EC24] outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Interested Service</label>
                     <select className="w-full bg-[#f8f7f4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F2EC24] outline-none appearance-none">
                        <option>Social Media Management</option>
                        <option>Influencer Marketing</option>
                        <option>Website Development</option>
                        <option>ORM & Crisis Management</option>
                        <option>Meme Marketing</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Message (Optional)</label>
                     <textarea rows="4" placeholder="Tell us about your brand..." className="w-full bg-[#f8f7f4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F2EC24] outline-none resize-none"></textarea>
                  </div>
                   <button 
                     type="button"
                     onClick={openContact}
                     className="w-full bg-zinc-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#F2EC24] hover:text-black transition-all duration-300"
                   >
                    Send Free Strategy Call Request
                  </button>
                  <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest">We'll get back to you within 2-4 hours.</p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#F2EC24] rounded-full blur-[300px] opacity-10 pointer-events-none"></div>
      </section>

      {/* Marquee Service Banner */}
      <div className="w-full bg-[#F2EC24] text-black py-8 overflow-hidden border-y border-black/10 flex whitespace-nowrap mb-12">
        <div className="animate-marquee inline-block font-oswald text-4xl md:text-5xl uppercase tracking-widest font-black">
          • RESULTS DRIVEN • CREATIVE DRIVEN • DATA DRIVEN • GROWTH DRIVEN • RESULTS DRIVEN • CREATIVE DRIVEN • DATA DRIVEN • GROWTH DRIVEN • 
        </div>
      </div>
    </div>
  );
}
