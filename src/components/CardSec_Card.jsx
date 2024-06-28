import React from 'react'

function CardSec_Card({bgcolor,img,color="#FFFFFF",btntext, width}) {
    // let bgclr = {bgcolor}
    // console.log(bgcolor,color,btntext,);
  return (
    <div id="secCardsBox1" className={`font-['Neue_Montreal'] relative h-full rounded-xl flex justify-center items-center bg-[${bgcolor}]`}>
                <div className=''>
                    <img src={img} alt="" className={`w-[${width}]`}/>
                </div>
                <button className={`absolute bottom-[14px] left-4 border-2 border-[${color}] px-4 py-1 rounded-full text-[${color}]  uppercase text-sm`}>
                    {btntext}
                </button> 
    </div>
  )
}

export default CardSec_Card