import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg';

const Hero = () => (
  <section
    className='relative bg-gray-900 text-white py-32'
    style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover' }}
  >
    <div className='container mx-auto flex flex-col items-center text-center'>
      <h1 className='text-4xl md:text-6xl font-extrabold'>
        Luxury. Innovation. Power.
      </h1>
      <p className='mt-4 text-lg md:text-2xl'>
        Experience the pinnacle of electric performance.
      </p>
      <Link
        to='/inventory'
        className='mt-8 inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors shadow-lg'
      >
        Browse Inventory
      </Link>
    </div>
  </section>
);

export default Hero;
