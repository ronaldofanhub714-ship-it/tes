import { useParams } from 'react-router-dom';
import { useInventory } from '../hooks/useInventory';
import { Spinner } from 'react-loading-icons';
import placeholder from '../assets/placeholder.png';

const CarDetail = () => {
  const { id } = useParams();
  const { cars } = useInventory();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return <p className='text-center mt-12'>Car not found.</p>;
  }

  const { name, image, description, price, mileage } = car;
  const displayPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <article className='py-12 container mx-auto space-y-8'>
      <h1 className='text-3xl font-bold'>{name}</h1>
      <img
        src={image || placeholder}
        alt={name}
        className='w-full h-64 object-cover rounded-lg'
      >
      <p className='text-lg'>{description}</p>
      <div className='flex items-center space-x-4 mt-4'>
        <span className='text-2xl font-semibold'>{displayPrice}</span>
        <span className='text-gray-600'>Mileage: {mileage} km</span>
      </div>
      <button className='mt-6 px-6 py-2 bg-primary text-white rounded hover:bg-secondary'>
        Schedule a Test Drive
      </button>
    </article>
  );
};

export default CarDetail;
