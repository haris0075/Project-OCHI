import React, { useRef,useEffect, useState } from 'react'

function Eyeeffect({witdh=true}) {
    let [rotate, setRotate] = useState(0)
    let [rotate1, setRotate1] = useState(0)
    const [eyeballPosition, setEyeballPosition] = useState({ x: 0, y: 0 });
    const [eyeballPosition1, setEyeballPosition1] = useState({ x: 0, y: 0 });
    const componentRef1 = useRef(null);
    const componentRef2 = useRef(null);
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            // const eye = document.querySelector('.eye');
            // const eyeRect = eye.getBoundingClientRect();
            const eyeRect = componentRef1.current.getBoundingClientRect(); // its used to find current position of component in every section where component is used.
            // console.log(eyeRect.top,eyeRect.left);
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            
            let deltaX= mouseX - eyeCenterX;
            let deltaY= mouseY - eyeCenterY;
            let eyeballX=  deltaX/45;
            let eyeballY= deltaY/20;
            if(eyeballX > 25 || eyeballY > 25){
                eyeballX = 25;
                eyeballY = 25;
            }else if(eyeballX < -40 || eyeballY < -40){
                eyeballX = -25;
                eyeballY = -25;
            }
            // console.log(eyeballX,eyeballY);
            setEyeballPosition({ x: eyeballX, y: eyeballY });


            let angle= Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180)
        })
    })
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            // const eye = document.querySelector('.eye1');
            // const eyeRect = eye.getBoundingClientRect();
            const eyeRect = componentRef2.current.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            
            let deltaX= mouseX - eyeCenterX;
            let deltaY= mouseY - eyeCenterY;
            let eyeballX=  deltaX/45;
            let eyeballY= deltaY/20;
            if(eyeballX > 25 || eyeballY > 25){
                eyeballX = 25;
                eyeballY = 25;
            }else if(eyeballX < -40 || eyeballY < -40){
                eyeballX = -25;
                eyeballY = -25;
            }
            // console.log(eyeballX,eyeballY);
            setEyeballPosition1({ x: eyeballX, y: eyeballY });


            let angle= Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate1(angle-180)
        })
    })
  return (
            <div className="inner mt-8 md:mt-12 flex gap-10">
                <div ref={componentRef1} className={`eye leftye ${ witdh ? "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[15vw] xl:h-[15vw]":"w-[150px] h-[150px] lg:w-[180px] lg:h-[180px]"} relative flex justify-center items-center bg-white rounded-full`}>
                    <div className='w-3/5 h-3/5 relative'>
                        <div className="innerball w-full h-full absolute bg-black rounded-full" style={{left:eyeballPosition.x, top:eyeballPosition.y}} >
                            <div style={{ transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='h-1/5 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                                <div className={`innerdot ${ witdh ? "w-[3vw] h-[3vw]":"w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"}  bg-white rounded-full`}></div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div ref={componentRef2} className={`eye1 rightrye ${ witdh ? "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[15vw] xl:h-[15vw]":"w-[150px] h-[150px] lg:w-[180px] lg:h-[180px]"} relative flex justify-center items-center bg-white rounded-full`}>
                    <div className='w-3/5 h-3/5 relative'>
                        <div className="innerball w-full h-full absolute bg-black rounded-full" style={{left:eyeballPosition1.x, top:eyeballPosition1.y}} >
                            <div style={{ transform:`translate(-50%,-50%) rotate(${rotate1}deg)`}} className='h-1/5 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                                <div className={`innerdot ${ witdh ? "w-[3vw] h-[3vw]":"w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"}  bg-white rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Eyeeffect