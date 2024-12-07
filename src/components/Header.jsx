import React from 'react'
import Brand from './Brand'
import { Link } from 'react-router'

function Header() {
  return (
    <div className='sticky top-0 z-10 bg-blue-200 h-20 w-full shadow-lg'>
      <div className='max-w-5xl mx-auto px-5 h-full flex items-center justify-between'>
   
        <Brand />

        <div>
          <Link to="/login">
            Iniciar sesion
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Header