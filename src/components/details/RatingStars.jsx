import React from 'react'
import { FaRegStar, FaStarHalfStroke, FaStar } from "react-icons/fa6"

const rating = 4

const renderStar = (rating) => {
  if (index <Math.floor(rating)) {
      return <FaStar /> // Estrella completa
    } else if (index < rating) {
      return <FaStarHalfStroke /> // Estrella mitad
    } else {
      return <FaRegStar /> // Estrella vacía
    }
}


function RatingStars ({ rating }) {
  console.log(rating)
  return (<div>
  <span>{[... Array(5)].map((_, index) => {
    return (
      <span
        key={index}
        className='text-amber-300 text-1g'>
        {renderStar(index)}
      </span>
    )
    })}
    </span>
    <span className=''>
      {rating}
    </span>
  </div>
  )
}

  export default RatingStars