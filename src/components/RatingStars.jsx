import React from 'react'
import  { FaStar, FaRegStar, FaStarHalfStroke} from "react-icons/fa6"

const renderStar = (index) => {
  if (index < Math.floor(rating)) {
    return <FaStar />
  } else if (index < rating) {
    return <FaStarHalfStroke />
  } else {
    return <FaRegStar />
  }
}

const rating = 4

function RatingStars({ rating }) {
  return (
    <div className='flex items-center gap-2'>
      <span className='flex items-center'>
        {[...Array(5)].map((_, index) => {
          return (
            <span 
              key={index}
              className='text-amber-300 text-lg'>
              {renderStar(index)}
            </span>
          )
        })}
      </span>
      <span className='text-gray-500'>{rating}</span>  
    </div>
  )
}

export default RatingStars