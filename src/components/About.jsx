import React from 'react'
import img from '../Images/Homepage-Photo.jpg'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-direction="vertical" data-scroll-speed="0.01" className='z-[999] w-full bg-[#CDEA68] rounded-t-2xl font-["Neue_Montreal"] pb-12 pt-20'>
        <div className="upper text-[#212121] text-[30px] xl:text-[3.7vw] leading-none mx-5 md:mx-14 max-w-[1300px]">
            <h1>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className=''>raise funds</span>, <span>sell prod­ucts</span>, <span>ex­plain com­plex ideas</span>, and <span>hire great peo­ple</span>.
            </h1>
        </div>
        <div className="middle w-full border-y border-[#909090] mt-16 pb-7 text-lg ">
            <div className="sub mx-6 md:mx-14 mt-8 flex h-5/6 flex-col md:flex-row">
                <div className="left w-full sm:w-1/3 lg:w-[50%] flex-nowrap">
                    <h1 className='pb-3'>
                    What you can expect:
                    </h1>
                </div>
                <div className="right w-2/3 lg:w-1/2 flex flex-col md:flex-row">
                    <div className="subl w-1/2 min-w-[270px]">
                        <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        <br /> <br />
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                        </p>
                    </div>
                    <div className="subr w-1/2 flex flex-col justify-center md:items-center mt-6 m-w-[300px]">
                        <div>
                            <h1 className='mb-4'>
                                S:  
                            </h1>
                            <div className='flex flex-col'>
                                {["Instagram","Behance","Facebook","Linkedin"].map((item,index)=>{
                                    return(
                                            <a key={index} href="#" className='underline decoration-1'>{item}</a>   
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lower flex flex-col md:flex-row pt-4">
            <div className="left  md:w-1/2">
                <div className='ml-6 md:ml-12 '>
                    <h1 className='text-[32px] md:text-[4xl] lg:text-[6xl]'>
                        Our approach:
                    </h1>
                    <button className='group mt-5 border-2 border-black px-4 hover:pr-1 uppercase font-medium bg-black text-white py-3 rounded-full flex justify-center items-center gap-4 text-[16px]'>
                        Read More
                        <div className='h-2 w-2 group-hover:h-6 group-hover:w-6 bg-white rounded-full'>

                        </div>
                    </button>
                </div>
            </div>
            <div className="right md:w-1/2  bg-cover mx-6 mt-3 lg:mx-10 rounded-xl overflow-hidden">
                <img className='w-full h-full' src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About