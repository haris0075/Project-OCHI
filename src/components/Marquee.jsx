import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.11" className='w-full box-border h-[180px] md:h-[220px]  lg:h-[43%] bg-[#004D43] rounded-t-md lg:rounded-t-2xl flex items-center pt-6 lg:pt-12'>
        <div className="marq border-y-2 border-[#4D837C] w-full text-[99px] md:text-[120px] pt-3 lg:text-[15vw] uppercase font-extrabold text-white leading-none text-start flex whitespace-nowrap overflow-hidden ">
            <motion.h3 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration: 20}} className='-mt-7 pr-12'>
                we are OChi  
            </motion.h3> 
            <motion.h3 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration: 20}} className='-mt-7 pr-12'>
                we are OChi 
            </motion.h3>           
        </div>
    </div>
  )
}

export default Marquee