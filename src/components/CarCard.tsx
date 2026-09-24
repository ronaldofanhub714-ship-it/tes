import { Link } from 'react-router-dom';
import { Car } from '../types/api';
import placeholder from '../assets/placeholder.png';

const CarCard = ({ car }: { car: Car }) => {
  const { id, name, image, price, mileage } = car;
  const displayPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);

  return (
    <Link
      to={\`/cars/${id}\`}
      className='block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
    >
      <img
        src={image || placeholder}
        alt={name}
        className='w-full h-48 object-cover'
      >
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
          {name}
        </h2>
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
          {mileage} km • {displayPrice}
        </p>
      </div>
    </Link>
  );
};

export default CarCard;
