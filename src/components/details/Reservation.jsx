import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { cn } from '../../utils'

const schema = z.object({
  checkIn: z.string().min(1, {message: 'Check-in is required'}),
  checkOut: z.string().min(1, {message: 'Check-out is required'}),
})

function Reservation({ hotelId }) {
  const { handleSubmit, register, formState: {errors}, reset } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (dataForm) =>{
    dataForm.hotelId = hotelId

    reset()
  }


  return (


    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='flex flex-col items-center justify-center gap-2 mb-4' >
      <div className='flex flex-col items-center'>
        <label htmlFor="check-in" className='font-semibold text-sm'>Check-In</label>
        <input
          id="check-in"
          type="date"
          className='border px-3 py-1 rounded-sm'
         {...register ('checkIn')}
        />
      </div>

      <div className='flex flex-col items-center'>
        <label htmlFor="check-out" className='font-semibold text-sm'>Check-Out</label>
        <input
          id="check-out"
          type="date"
          className='border px-3 py-1 rounded-sm'
          {...register ('checkOut')}
        />
      </div>

      <button className='btn bg-emerald-500'>Reserve</button>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <p 
          className={cn('bg-red-500 bg-opacity-15 text-red-500 py-1 px-3 rounded-sm hidden',
            errors.checkIn && 'block'
          )}
        >{errors.checkIn && errors.checkIn.message}</p>
        <p 
          className={cn('bg-red-500 bg-opacity-15 text-red-500 py-1 px-3 rounded-sm hidden',
            errors.checkOut && 'block'
          )}
        > {errors.checkOut && errors.checkOut.message}</p>
      </div>
      
   
    </form>
  )
}


export default Reservation