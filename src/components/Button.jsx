import React, { useState } from 'react';

const Button = () => {
  return (
    <button
      className=" overflow-hidden border-2 border-black bg-white text-sm text-black py-1 px-2 font-medium transition-all duration-900  rounded-3xl focus:outline-none"
    >
      Hover ME
    </button>
  );
};

export default Button;
