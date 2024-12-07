import React from 'react'
import { TfiWorld } from "react-icons/tfi" 

function Hero( {hotel}) {
  return (
    <div 
      className='bg-blue-20 0 h-[35dvh] grid place-content-center bg-cover bg-center'
      style={{
        backgroundImage: `url('${images}')`

      }}
    >
    <div>
    <div className='grid place-content-center h-full bg-white bg-opacity-70'>
      <h1 className='text-2xl font-semibold text-center'>{hotel?.name}</h1>
        <p className='flex items-center gap-1'>
          <TfiWorld />
          <span className='text-sm'>
            {hotel?.city?.name}, {hotel?.city?.country}
          </span>
        </p>
     </div>

    </div>

    </div>
  )
}

export default Hero
