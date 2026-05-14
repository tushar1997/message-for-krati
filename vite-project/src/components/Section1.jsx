import React, { useState, useRef } from 'react';
import './Section1.css';
import sectionImage from '../assets/section1.png';

const Section1 = () => {
  const sectionRef = useRef(null);

  const [sectionBeamStyle, setSectionBeamStyle] = useState({
    width: 0,
    angle: 0,
  });

  const beamOrigin = { x: 670, y: -100 };

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - beamOrigin.x;
    const dy = mouseY - beamOrigin.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    setSectionBeamStyle({
      width: distance,
      angle: angle,
    });


    const letters = sectionRef.current.querySelectorAll('.beam-letter');

    letters.forEach((letter) => {
      const letterRect = letter.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      const center = {
        x: letterRect.left + letterRect.width / 2 - sectionRect.left,
        y: letterRect.top + letterRect.height / 2 - sectionRect.top,
      };

      const dxLetter = center.x - beamOrigin.x;
      const dyLetter = center.y - beamOrigin.y;
      const distanceToLetter = Math.sqrt(dxLetter * dxLetter + dyLetter * dyLetter);
      const angleToLetter = Math.atan2(dyLetter, dxLetter) * (180 / Math.PI);
      const angleDiff = Math.abs(angle - angleToLetter);

      const isHit = angleDiff < 5 && distanceToLetter < distance;

      letter.style.opacity = isHit ? 1 : 0;
    });
  };

  return (
    <div className="section1" id="section1" onMouseMove={handleMouseMove} ref={sectionRef}>
      <img src={sectionImage} alt="" className="section1-img" />

      <div
        className="section1-beam"
        style={{
          width: `${sectionBeamStyle.width}px`,
          transform: `translate(${beamOrigin.x}px, ${beamOrigin.y}px) rotate(${sectionBeamStyle.angle}deg)`,
        }}
      />

      <h1 className="section1-heading">
        {"NOW, I FOUND YOU, KRATI".split('').map((char, i) => (
          <span key={i} className="beam-letter">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <nav className="hero-navbar section1-navbar">
        <ul className="nav-items">
          <li><a href="#">Move</a></li>
          <li><a href="#">Mouse</a></li>
          <li><a href="#">On</a></li>
          <li><a href="#">This</a></li>
          <li><a href="#">Page</a></li>
        </ul>
      </nav>
      <a
        className="section-fab"
        href="https://tushar1997.github.io/message-krati/"
        aria-label="click here"
      >
        Ab yahan Click Karo
      </a>
    </div>
  );
};

export default Section1;
