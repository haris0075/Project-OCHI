// src/components/AnimatedButton.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedButton = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const underline = underlineRef.current;

    const hoverAnimation = gsap.timeline({ paused: true })
      .to(text, { y: -20, opacity: 1, duration: 0.3, ease: "power1.out" })
      .to(text, { y: 10, opacity: 1, duration: 0.3, ease: "power1.in", delay: 0.1 })
      .to(underline, { left:"100%", duration: 0.3, ease: "power1.out" }, 0);

    const leaveAnimation = gsap.timeline({ paused: true })
      .to(underline, { left:"100%", duration: 0.3, ease: "power1.in" });

    button.addEventListener('mouseenter', () => hoverAnimation.play());
    button.addEventListener('mouseleave', () => {
      hoverAnimation.reverse();
      leaveAnimation.play();
    });

    return () => {
      button.removeEventListener('mouseenter', () => hoverAnimation.play());
      button.removeEventListener('mouseleave', () => {
        hoverAnimation.reverse();
        leaveAnimation.play();
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen sticky top-0 z-[999]">
      <button ref={buttonRef} className="relative group p-4 bg-blue-500 text-white font-semibold overflow-hidden">
        <span ref={textRef} className="relative z-10">Hover me</span>
        <span ref={underlineRef} className="absolute right-0 bottom-0 w-full h-1 bg-white transform  "></span>
      </button>
    </div>
  );
};

export default AnimatedButton;
