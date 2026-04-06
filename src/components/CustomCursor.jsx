import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over an interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, .portfolio-card, video, .group');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] transition-transform duration-200 ease-out flex items-center justify-center hidden md:flex border border-black/5 shadow-2xl"
      style={{ 
        transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 2 : 1}) ${isClicking ? 'scale(0.8)' : ''}`,
        backgroundColor: '#F2EC24', // Prominent Yellow
        opacity: 0.9
      }}
    >
      {isHovering && <ArrowUpRight className="w-4 h-4 text-black" />}
    </div>
  );
}
