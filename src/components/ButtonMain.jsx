import React, { useEffect } from 'react'
import { useState } from 'react'

function ButtonMain({title}) {
  return (
    <button className="group mt-5 border-2 border-black px-4 hover:pr-1 uppercase font-medium bg-black text-white py-2 rounded-full flex justify-center items-center gap-4 text-[16px]">
      {title}
      <div className="h-2 w-2 group-hover:h-6 group-hover:w-6 bg-white rounded-full"></div>
    </button>
  )
}

export default ButtonMain