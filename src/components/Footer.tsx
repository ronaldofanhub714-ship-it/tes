const Footer = () => (
  <footer className='bg-gray-800 text-gray-300 py-6 mt-12'>
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
      <p className='text-sm'>&copy; {new Date().getFullYear()} TeslaX. All rights reserved.</p>
      <ul className='flex space-x-4 mt-4 md:mt-0'>
        <li>
          <a
            href='/terms'
            className='text-sm hover:text-white transition-colors'
          >
            Terms
          </a>
        </li>
        <li>
          <a
            href='/privacy'
            className='text-sm hover:text-white transition-colors'
          >
            Privacy
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
