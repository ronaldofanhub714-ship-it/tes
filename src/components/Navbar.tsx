import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='bg-white dark:bg-gray-800 shadow-sm'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <Link to='/' className='text-2xl font-bold text-primary'>
          TeslaX
        </Link>
        <ul className='flex space-x-6'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-secondary' : 'text-gray-600 dark:text-gray-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/inventory'
              className={({ isActive }) =>
                isActive ? 'text-secondary' : 'text-gray-600 dark:text-gray-300'
              }
            >
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'text-secondary' : 'text-gray-600 dark:text-gray-300'
              }
            >
              About
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <button
                onClick={handleLogout}
                className='text-gray-600 hover:text-secondary transition-colors'
              >
                Logout
              </button>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <Link
                to='/login'
                className='text-gray-600 hover:text-secondary transition-colors'
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
