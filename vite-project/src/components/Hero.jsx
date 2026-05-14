import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import Navbar from './Navbar';
import heroVideo from '../assets/hero.mp4';

const Hero = () => {
  const heroRef = useRef(null);
  const [beamStyle, setBeamStyle] = useState({ width: 0, angle: 0 });
  const beamOrigin = { x: 390, y: 10 };

  

const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - beamOrigin.x;
    const dy = mouseY - beamOrigin.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    setBeamStyle({ width: distance, angle });
  };

  return (
    <div className="hero" onMouseMove={handleMouseMove} ref={heroRef}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg"
        src={heroVideo}
      />

      <div
        className="beam"
        style={{
          width: `${beamStyle.width}px`,
          transform: `translate(${beamOrigin.x}px, ${beamOrigin.y - 20}px) rotate(${beamStyle.angle}deg)`
        }}
      />

      <Navbar />
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          I was searching for someone in this dark world
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          And couldn't find, just like you're unable to find anything even with a light, so i thought of moving on as the life goes. 
        </motion.p>

        <motion.a
          href="#section2"
          className="hero-button"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          Scroll Down
        </motion.a>
      </motion.div>
      <div className="hero-overlay">
        
      </div>
    </div>
  );
};

export default Hero;
