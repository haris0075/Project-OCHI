import React, { useState } from 'react'
// import fyde from '../Images/Fyde.png'
import Button from './Button'
import Power4 from 'gsap/all'
import { motion } from 'framer-motion'

function Cards({title,img}) {
  
  const [isHovered, setIsHovered] = useState(false)

    
  return (
    <>
      <div  className='relative w-full font-["Founders_Grotesk"] '>
        <div className=''>
          <div className=' flex items-center pt-2 gap-2 mb-3'>
            <div className="circle w-2 h-2 bg-black rounded-full"></div>
            <h2 className='pt-[5px] uppercase'>
              {title}
            </h2>
          </div>
          <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className='group'>
          <div className={`card rounded-xl overflow-hidden group-hover:scale-[0.92] transition ease-in-out duration-700`}>
            <img className={`w-full group-hover:scale-[1.23] transition ease-in-out duration-700`} src={img} alt="" />
          </div>
        </div>
          </div>
        <div className=' px-6 py-3'>
          <Button label="Hover ME"/> 
        </div>
        <div className=' md:hidden absolute text-[#CDEA68] font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]  uppercase text-6xl tracking-wide overflow-hidden'>
              {title.split('').map((item,index)=>{
               return <motion.span initial={{y:"100%"}} animate={isHovered ? ({y:"0"}):({y:"220%"})} transition={{ease:Power4.easeInOut, delay: index*.08}} className={`${index} inline-block`} key={index}>{item}</motion.span> 
              })}
        </div>
      </div>
    </>
  )
}

export default Cards;