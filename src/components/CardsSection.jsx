import React, { useEffect } from 'react'
import clutchlogo from '../Images/logo002.svg'
import ochilogo from '../Images/logo001.svg'
import TFAlogo from '../Images/logo003.png'
import CardSec_Card from './CardSec_Card'
// import LocomotiveScroll from 'locomotive-scroll'

function CardsSection() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     getDirection: true,
  //     sticky: true, // Ensure sticky option is set to true
  //   });
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  //  }, []);
  return (
    <>
      <div data-scroll-container className='sticky -top-1/4 z-10'>
        <div 
          className="lg:h-screen lg:pt-28 sectionCards font-['Neue_Montreal']  pb-24">
            <div className='sticky top-0 w-full px-5 xl:px-12 flex flex-col lg:flex-row gap-3'>
              <div className='h-[300px] md:h-[400px] lg:w-1/3 xl:w-1/2 '>
                  <CardSec_Card bgcolor="#004D43" img={ochilogo} color="#CDEA68" btntext="&#169;2019-2022" width="150px" />
              </div>
              <div className=' flex flex-col sm:flex-row lg:w-2/3 xl:w-1/2 w-full gap-3 '>
                  <div className="sm:w-1/2 h-[300px] md:h-[400px] right">
                  <CardSec_Card bgcolor="#212121" img={clutchlogo} color="#F1F1F1" btntext="Rating 5.0 on clutch" width="150px" />
                  </div>
                  <div className="sm:w-1/2 h-[300px] md:h-[400px] left">
                  <CardSec_Card bgcolor="#212121" img={TFAlogo} color="#F1F1F1" btntext="bussiness bootcamp alumni" width="100px" />
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CardsSection