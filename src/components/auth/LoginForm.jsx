import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

function LoginForm() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const {handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (dataFom) => {
    login(dataFom)
    reset()
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label className='block font-semibold'>Correo:</label>
      <input type="email"
        placeholder='Ingresa tu mail'
        className='input-form'
        {...register('email')}
        >
        {errors.mail && 
          <p className='error-validation block my-4'>
            {errors.email.message}
          </p>}
      </input>      
    </div>

    <div className='mb-4'>
      <label className='block font-semibold'>Password</label>
      <input type='password'
        placeholder='Ingresa password'
        className='input-form'
        {...register('password')}
      >  
      {errors.password && 
        <p className='error-validation block my-4'>
          {errors.password.message}
        </p>}
      </input>
    </div>
    <button className='btn w-full'>Iniciar sesión</button>

  </form>
  )
}

export default LoginForm