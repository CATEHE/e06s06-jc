import React from 'react'

function Map({ lat, lon}) {
  const zoom = 15
  return (
    <div className='aspect-square rounded-lg overflow-hidden'>
      <iframe 
        src={`//maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
        width={600}
        height={450}
        loading='lazy'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        className='w-full h-full'>
      </iframe>
    </div>
  )
}

export default Map