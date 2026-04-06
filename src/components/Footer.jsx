import React from 'react';
import Reveal from './Reveal';
import { useContact } from '../context/ContactContext';

export default function Footer() {
  const { openContact } = useContact();
  return (
    <footer className="bg-[#F2EC24] text-black py-20 md:py-32 px-6 md:px-12 mt-8 md:mt-12 rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
        <Reveal>
          <h2 
            onClick={openContact}
            className="font-oswald text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter uppercase mb-12 hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            LET'S TALK
          </h2>
        </Reveal>
        
        <Reveal delay={200} className="flex flex-col md:flex-row gap-8 items-center justify-between w-full pt-16 border-t border-black/20">
          <div className="font-oswald text-xl tracking-widest font-bold flex items-center gap-2 text-black">
            <div className="w-5 h-5 border-2 border-black rounded-sm relative">
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black"></div>
            </div>
            THE SOCIAL BOX
          </div>
          
          <div className="flex gap-6 text-sm font-bold tracking-widest uppercase">
            <a href="https://www.instagram.com/thesocialbox.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="https://www.linkedin.com/company/the-social-boxin/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
          </div>

          <div className="text-sm font-semibold text-black">
            © 2026 THE SOCIAL BOX. ALL RIGHTS RESERVED.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
