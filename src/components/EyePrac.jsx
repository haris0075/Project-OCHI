import React, { useState } from 'react';

const Eye = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const eye = document.querySelector('.eye');
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(eyeRect.width / 3, Math.sqrt(deltaX * deltaX + deltaY * deltaY));
    const newX = eyeCenterX + distance * Math.cos(angle);
    const newY = eyeCenterY + distance * Math.sin(angle);

    setEyePosition({ x: newX, y: newY });
  };

  return (
    <div className="eye-container relative w-32 h-32" onMouseMove={handleMouseMove}>
      <div className="eye relative w-full h-full border-4 border-black rounded-full overflow-hidden">
        <div className="inner-circle absolute w-12 h-12 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ left: eyePosition.x, top: eyePosition.y }}></div>
        <div className="reflection absolute w-6 h-6 bg-white rounded-full" style={{ top: '30%', left: '20%', opacity: '0.4' }}></div>
        <div className="pupil absolute w-4 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Eye;
