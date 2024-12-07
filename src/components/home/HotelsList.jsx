import React from 'react';
import HotelCard from './HotelCard';

function HotelsList({ hotels }) {
  return (
    <div className='grid grid-cols-[repeat (auto-fill,_minmax(200px,_1fr))] gap-6'>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
export default HotelsList;
