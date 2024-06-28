import React, { useEffect } from 'react'
import Eyeeffect from './Eyeeffect'
import ButtonMain from './ButtonMain'

function ProjectStartSection() {

  return (
    <div data-scroll-container className='sticky -top-[40%] z-20'>
        <div 
          className=' h-[80vh] md:h-[110vh] lg:h-[130vh] xl:h-[117vh] bg-[#CDEA68] rounded-t-2xl px-5 py-7'>
            <div className='h-[100%] lg:h-full md:[100vh] flex flex-col items-center justify-center md:pt-20 md:justify-between relative'>
                <div className="box1 font-['Neue_Montreal']  text-[48px] md:text-[98px] md:leading-[89px] lg:text-[128px] lg:leading-[109px] xl:text-[168px] xl:leading-[149px] text-center tracking-tighter leading-[47px] font-extrabold h-fit w-full">
                    <h1>
                    READY <br />
                    TO START <br />
                    THE PROJECT?
                    </h1>
                </div>
                <div data-scroll data-scroll-element data-scroll-speed="0.5" className=" md:absolute  lg:top-1/4 md:top-1/2 eyeballs mb-7">
                    <Eyeeffect witdh={false}/>
                </div>
                <div className='buttonsec border-2 border-orange-500 h-[150px] flex flex-col justify-center items-center'>
                    <ButtonMain title="START THE PROJECT" />
                    <h1 className='mt-4'>
                        OR
                    </h1>
                    <ButtonMain title="Hello@OchiDesign" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectStartSection