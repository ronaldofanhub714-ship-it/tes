import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import { useInventory } from '../hooks/useInventory';
import { Spinner } from 'react-loading-icons';

const Home = () => {
  const { cars, isLoading } = useInventory();

  return (
    <main>
      <Hero />
      <section className='mt-16'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Featured Models</h2>
        {isLoading ? (
          <div className='flex justify-center py-12'>
            <Spinner color='#1d4ed8' />
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {cars.slice(0, 6).map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
