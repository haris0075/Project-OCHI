// src/components/StickySections.js
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import CardsSection from './CardsSection';
// import 'locomotive-scroll/src/locomotive-scroll.scss';

const StickySections = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="relative z-50">
      <section className="min-h-screen flex items-center justify-center bg-red-200">
        <h1 className="text-4xl">Section 1</h1>
      </section>
      <section className="relative min-h-screen bg-blue-200 flex items-center justify-center">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="sticky -top-0 transform -translate-y-1/2 z-10">
            <h1 className="text-4xl">Section 2</h1>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-green-200 sticky top-0 z-10">
        <h1 className="text-4xl">Section 3</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-yellow-200 sticky top-0 z-20">
        <h1 className="text-4xl">Section 4</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-yellow-700 sticky top-0 z-30">
        <h1 className="text-4xl">Section 4</h1>
      </section>
    </div>
  );
};

export default StickySections;
