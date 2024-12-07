import React from 'react'
import { Link } from 'react-router'
import LoginForm from '../components/auth/LoginForm'

function Login() {
  return (
    <div>
      <h1 className='text-lg font-semibold mb-6'>Inicia sesion con tu cuenta</h1>

      <LoginForm />
     
      <p>necesitas cuenta? 
        <Link to="/register" className='text-blue-500 font-semibold mt-6'>
          Crear una cuenta
        </Link></p>

    </div>
  )
}

export default Login 