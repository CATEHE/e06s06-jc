import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  gender: z.enum(['male', 'female', 'other'],{message: 'Select a genre'})
})

function RegisterForm() {
  const {handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (dataFom) => {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='mb-4'>
      <label className='block font-semibold'>First name:</label>
      <input type="text"
        placeholder='Ingresa tu nombre'
        className='input-form'
        {...register('firstName')}
        >
        {errors.firstName && 
          <p className='error-validation block my-4'>
            {errors.firstName.message}
          </p>}
      </input>      
    </div>

    <div className='mb-4'>
      <label className='block font-semibold'>Last name:</label>
      <input type="text"
        placeholder='Ingresa tu apellido'
        className='input-form'
        {...register('lastName')}
        >
        {errors.lastName && 
          <p className='error-validation block my-4'>
            {errors.lastName.message}
          </p>}
      </input>      
    </div>

    <div className='mb-4'>
      <label className='block font-semibold'>E-mail:</label>
      <input type="email"
        placeholder='Ingresa tu email'
        className='input-form'
        {...register('email')}
        >
        {errors.email && 
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

    <div className='mb-4'>
      <label className='block font-semibold'>gender</label>
      <select type='text'
  
        className='input-form'
        {...register('gender')}
      >  
     
      <option value="">Select a genre</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
      </select>

      {errors.gender && 
        <p className='error-validation block my-4'>
          {errors.gender.message}
        </p>}
      
    </div>



    <button className='btn w-full'>Crear cuenta</button>

  </form>
  )
}

export default RegisterForm