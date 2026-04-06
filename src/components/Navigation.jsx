import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about", isAnchor: false },
    { name: "Services", path: "/services", isAnchor: false },
    { name: "Impact", path: "/impact", isAnchor: false },
    { name: "Case Study", path: "/case-studies", isAnchor: false },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 px-6 py-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-[#F8F7F4]/90 backdrop-blur-md border-b border-zinc-200 py-4' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center text-[#111] max-w-screen-2xl mx-auto">
        <Link to="/" className="font-oswald text-2xl tracking-widest font-bold flex items-center gap-2 relative z-50">
          <div className={`w-6 h-6 border-2 border-[#111] ${isMobileMenuOpen ? 'bg-white' : 'bg-[#F2EC24]'} rounded-sm relative transition-colors duration-300`}></div>
          THE SOCIAL BOX
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a key={link.name} href={link.path} className="hover:text-zinc-500 transition-colors">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.path} className={`hover:text-zinc-500 transition-colors ${location.pathname === link.path ? 'text-[#D4C000]' : ''}`}>{link.name}</Link>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-[#111]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" strokeWidth={1.5} /> : <Menu className="w-8 h-8" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-[#F2EC24] text-black ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-500 flex flex-col justify-center items-center h-screen z-40`}>
         <div className="flex flex-col gap-12 text-center text-4xl md:text-6xl font-oswald tracking-tighter uppercase font-bold">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a key={link.name} href={link.path} onClick={() => setIsMobileMenuOpen(false)} className="hover:scale-110 transition-transform">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="hover:scale-110 transition-transform">{link.name}</Link>
            )
          ))}
        </div>
        <div className="absolute bottom-12 flex gap-8 text-sm font-bold tracking-widest uppercase mt-auto">
           <a href="https://www.instagram.com/thesocialbox.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
           <a href="https://www.linkedin.com/company/the-social-boxin/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}
