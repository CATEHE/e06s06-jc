import React from 'react'
import { Outlet } from 'react-router'
import Brand from '../components/Brand'

function AuthLayaout() {
  return (
    <div className='grid place-content-center min-h-[100dvh] py-12'>
      <div className='mb-6'>
        <Brand />
      </div>
     
      <Outlet />
    </div>
  )
}

export default AuthLayaout