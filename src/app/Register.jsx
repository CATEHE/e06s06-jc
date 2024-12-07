import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { Link } from 'react-router'

function Register() {
  return (
    <div>
    <h1 className='text-lg font-semibold mb-6'>Crear una cuenta</h1>

    <RegisterForm />
   
    <p>Ya tienes cuenta? 
      <Link to="/login" className='text-blue-500 font-semibold mt-6'>
        Inicia sesion
      </Link></p>

  </div>
  )
}

export default Register