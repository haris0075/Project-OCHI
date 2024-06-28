// src/components/HeadingWithBackground.js
import React, { useState, useEffect } from 'react';
// import './HeadingWithBackground.css'; // We'll add CSS for the background transitions

const headings = [
  { text: 'Heading 1', image: 'url(https://images.unsplash.com/photo-1715987587174-b8be6a743337?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' },
  { text: 'Heading 2', image: 'url(https://images.unsplash.com/photo-1715627889572-aa53f37b8f01?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' },
  { text: 'Heading 3', image: 'url(https://plus.unsplash.com/premium_photo-1664304376458-6757dab127e5?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' },
];

const ImgHoverSection = () => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(headings[0].image);
  const [isHovered, setIsHovered] = useState(false);
//   const[opaci,setOpaci]=useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentHeading((prev) => (prev + 1) % headings.length);
    }
}, 1000);

return () => clearInterval(interval);
}, [isHovered]);

// console.log(currentHeading);
  useEffect(() => {
    setBackgroundImage(headings[currentHeading].image);
  }, [currentHeading]);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setCurrentHeading(index)
    setBackgroundImage(headings[index].image);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center transition-background duration-500"
      style={{ backgroundImage }}
    >
      <div className="text-center space-y-4">
        {headings.map((heading, index) => (
          <h1
            
            key={index}
            className="group text-4xl font-bold text-black cursor-pointer relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}

          >
            {heading.text}
            <div className={`bg-slate-600 w-11 h-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${currentHeading === index ? 'opacity-100':'opacity-0'} opacity-0 group-hover:opacity-100`}>
            </div>
          </h1>
          
        ))}
      </div>
    </div>
  );
};


export default ImgHoverSection;