import { useEffect } from 'react';
import { useHotels } from '../context/hotels';
import HotelsList from '../components/home/HotelsList';


function Home() {
  const { hotels, getAll } = useHotels();

  useEffect(() => {
    if (hotels.length === 0) {
      getAll();
    }
  }, []);
  
  return (
    <div>
      <section className='max-w-7xl mx-auto px-5 py-10'>
        <HotelsList hotels={hotels} />
      </section>
    </div>
  );
}
export default Home