import React, { useEffect, useState } from 'react'
import Eyeeffect from './Eyeeffect'
import vid from '../Images/Main-HQ-1.mp4'
import img1 from '../Images/Top-Viewbbcbv-1-scaled.jpg'

function Eye() {
    let [a,b]= useState(false)
    let [mouseval, setMouseval]=useState({x:0,y:0})
    // console.log(a);
    useEffect(()=>{
      window.addEventListener("mousemove", (e)=>{
        let mouseX= e.clientX;
        let mouseY=e.clientY;

        let divposition = document.querySelector('.videodiv').getBoundingClientRect().top
        setMouseval({x:mouseX,y:mouseY-divposition})

      })
    })
  return (
    <div  className='z-10 w-full h-[40vh] sm:h-[60vh] md:h-[75vh] xl:h-[80vh] relative cursor-pointer overflow-hidden' onClick={()=>(b(!a))}>
      <div className={`${ (a===true) ? "opacity-100":"opacity-0"} videodiv w-full h-full z-50 absolute top-0 left-0 `}>
        <video autoPlay loop className={``} src={vid}></video>
        <button className='absolute -translate-y-1/2 -translate-x-1/2 px-5 py-1 bg-black font-medium text-white rounded-full' style={{top:mouseval.y, left:mouseval.x}}>
          Pause
        </button>
      </div>
        <div data-scroll data-scroll-speed="-.7" className="flex justify-center items-center w-full h-full bg-[url('.\Images\Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-no-repeat bg-center  ">
            <Eyeeffect/>
        </div>
    </div>
  )
}

export default Eye