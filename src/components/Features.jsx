import React, { useState } from "react";
import fyde from "../Images/Fyde.png";
import vise from "../Images/VISE.jpg";
import tarawa from "../Images/tarawa.jpg";
import PB from "../Images/PB.png";
import Cards from "./Cards";
import Power4 from 'gsap/all'
import { motion, useAnimation } from "framer-motion";

function Features() {
  const [isHovered, setIsHovered] = useState(false)
  const cards=[useAnimation(),useAnimation(),useAnimation(),useAnimation()]
  
  const handleHover =(index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd =(index)=>{
    cards[index].start({y:"220%"})
  }

  return (
    <>
      <div className="px-4 xl:px-12 md:px-12 bg-[#F1F1F1]">
        <div className=" border-b border-gray-400 text-3xl px-4 py-9">
          <h1>Featured projects</h1>
        </div>
        <div  className="relative md:flex gap-5">
          <motion.div 
          onHoverStart={()=> handleHover(0)}
          onHoverEnd={()=> handleHoverEnd(0)}
          className="w-full md:w-1/2 group">
            <Cards title="Fyde" img={fyde} />
            <div className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] uppercase sm:text-6xl text-[#CDEA68] tracking-wide font-bold overflow-hidden'>
              {"FYDE".split('').map((item,index)=>{
               return (<motion.span 
                initial={{y:"100%"}} 
               animate={cards[0]} 
               transition={{ease:Power4.easeInOut, delay: index*.08}} className=' inline-block' key={index}>
                {item}
               </motion.span>)
              })}
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={()=> handleHover(1)}
          onHoverEnd={()=> handleHoverEnd(1)}
          className="w-full md:w-1/2">
              <Cards title="VISE" img={vise} />
              <div className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] uppercase sm:text-6xl text-[#CDEA68] tracking-wide font-bold overflow-hidden'>
                  {"VISE".split('').map((item,index)=>{
                  return (<motion.span 
                    initial={{y:"100%"}} 
                   animate={cards[1]} 
                   transition={{ease:Power4.easeInOut, delay: index*.09}} className=' inline-block' key={index}>
                    {item}
                   </motion.span>)
                  })}
            </div>
          </motion.div>
        </div>
        <div className="relative md:flex gap-5">
          <motion.div
          onHoverStart={()=> handleHover(2)}
          onHoverEnd={()=> handleHoverEnd(2)}
          className="w-full md:w-1/2">
            <Cards title="tarawa" img={tarawa} />
            <div className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] uppercase sm:text-6xl text-[#CDEA68] tracking-wide font-bold overflow-hidden'>
                  {"tarawa".toUpperCase().split('').map((item,index)=>{
                  return (<motion.span 
                    initial={{y:"100%"}} 
                   animate={cards[2]} 
                   transition={{ease:Power4.easeInOut, delay: index*.05}} className=' inline-block' key={index}>
                    {item}
                   </motion.span>)
                  })}
            </div>
          </motion.div>
          <motion.div
          onHoverStart={()=> handleHover(3)}
          onHoverEnd={()=> handleHoverEnd(3)}
          className="w-full md:w-1/2">
            <Cards title="PremiumBlend" img={PB} />
            <div className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] uppercase sm:text-6xl text-[#CDEA68] tracking-wide font-bold overflow-hidden'>
                  {"PremiumBlend".toUpperCase().split('').map((item,index)=>{
                  return (<motion.span 
                    initial={{y:"220%"}} 
                   animate={cards[3]} 
                   transition={{ease:Power4.easeInOut, delay: index*.03}} className=' inline-block text-2xl md:text-5xl' key={index}>
                    {item}
                   </motion.span>)
                  })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Features;
