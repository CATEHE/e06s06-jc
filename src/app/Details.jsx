import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { TfiWorld } from 'react-icons/tfi'
import Reservation from '../components/details/Reservation'
import Description from '../components/details/Description'
import Gallery from '../components/details/Gallery'
import Map from '../components/details/Map'
import useApiFetch from '../hooks/useApiFetch'
import Spinner from '../components/Spinner'
import Hero from '../components/details/Hero'

function Details() {
  const params = useParams()
  const [hotel, getHotel, loading] = useApiFetch()

  useEffect(()=>{
    getHotel({
      url: `/hotels/${params.id}`
    })
  },[params.id])

  if (loading) return (
    <div className='grid place-content-center min-h-[100dvh]'>
      <Spinner />
    </div>

  )

  return (
    <div>
      
      {/*Hero */}
      <div className=''>
        <Hero hotel={hotel} />
      </div>
      
      
      <div className='max-w-5xl mx-auto px-5 py-10'>
      
      

      {/*Reservations*/}
      <div className='mb-4'>
        <Reservation hotelId={hotel?.id} />
      </div>
    
      {/*Grid*/}
      <div className='grid grid-cols-2 gap-5'>
        <div className='col-span-2'>
          <Description
            rating={hotel?.rating}
            adress={hotel?.adress}
            description={hotel?.description}
          />
        </div>
        <div>
          <Gallery hotel={hotel} />
        </div>
        <div>
          <Map lat={hotel?.lat} lon={hotel?.lon} />
        </div>


      </div>

      {/*Reviews*/}
      <div className='mb-4'>
      </div>

      {/*Related hotels*/}
      <div className='mb-4'>
      </div>

      </div>

    </div>
  )
}

export default Details 