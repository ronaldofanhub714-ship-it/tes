import CarCard from '../components/CarCard';
import { useInventory } from '../hooks/useInventory';
import { Spinner } from 'react-loading-icons';

const Inventory = () => {
  const { cars, isLoading } = useInventory();

  if (isLoading) return <Spinner className='mx-auto my-20' color='#1d4ed8' />;

  return (
    <section>
      <h2 className='text-2xl font-bold mb-6 text-center'>Full Inventory</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default Inventory;
