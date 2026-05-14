import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Section2.css';
import sectionImage from '../assets/section1.png';

const Section2 = () => {
  const [showNewImage, setShowNewImage] = useState(false);
  const timeoutRef = useRef(null);
  const newImageSrc = import.meta.env.BASE_URL + 'images/IMG_1116.jpeg';

  const handleShowNewImage = () => {
    setShowNewImage(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowNewImage(false);
      timeoutRef.current = null;
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="section2" id="section2">
      <motion.div
        className="left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src={sectionImage} alt="Visual" className="section2-main-image" />
        <div className="section2-new-image-wrapper">
          <AnimatePresence>
            {showNewImage && (
              <motion.img
                key="new-image"
                src={newImageSrc}
                alt="IMG 1116"
                className="section2-extra-image"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="typewriter">A Moon Entering my life (Fleekmoon)</h2>
        <p className="section2-text">
          I still can’t believe we randomly crossed paths on Instagram when fleekmoon26 liked one of my random story on 15th April 2026. I mean… what are the odds? You sent the like randomly with zero expectations ya Shri Raam Ji wanted you to do so…. And then later around 8pm, I sent a random message, it was fate or what you responded, but Instagram algorithm deserves a thank you or rather I'd say Thank you Raam ji for actually bringing my profile to your feed.
          And now here we are… talking, laughing, fighting, getting annoyed, sharing random thoughts like we’ve known each other longer than we actually have and how can we forget you getting annoyed on my random stuff whenever I share a random meme or ask something randomly to you (which means that Raam ji wants us to tease each other, and get to know each other, more! :P) Not bad for two strangers who met on Instagram randomly.
          I still remember 19th April was the day when we felt Instagram dm would become short of servers space and hence we moved our conversations to Whatsapp coz baatein bohot zyaad thi aur instagram me jagah kam, I still remember the day! :P <br />
          But woh kehte hain naa, "If it's meant for you, it will find its way to you". Aur isliye mera Hinge account bhi delete hogaya randomly after a random thought, just because universe didn't want me to talk to anyone besides Krati.
          And how can i forget the day when I had the best Pizza of my life, Pizza was okay but the company was best because i finally met someone special randomly from Instagram for the first time, so it turned out be the best Pizza i had in my life and i still remember the date 22 April 2026! :)
          And baato ka silsila kuch aisa chalaa that we got captured together for the first time on 5th May 2026 in Haldiram's cyber hub. <span className="click-trigger" onClick={handleShowNewImage}>Click karo</span>
          And baatein kuch itni zyaada deep hogayi ki someone started caring for me and I'll still remember woh pyaar se kisi ne mujhe apne haath se khilaya hua Dosa on 9th May 2026! :P
          But jab baatein itni zyaada hogayi, then we get to know that we're getting annoyed too from each other, woh toh life ka basic funda hai ki if there are positives between two people then there are negatives too,
          So I was thinking… ki Krati Gupta ne toh mujhe life me special feel karwaya hi hai, aur itni baat ho hi gayi hai toh, how about I ask her something in a different way.
        </p>
        <motion.a
          href="#section1"
          className="hero-button"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          Scroll Down
        </motion.a>      </motion.div>
    </div>
  );
};

export default Section2;
