  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useAuth } from '../contexts/AuthContext';

  const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email] = useState('demo@tesla.com');
    const [password] = useState('demo123');

    const handleSubmit = (e) => {
      e.preventDefault();
      login(email, password);
      navigate('/');
    };

    return (
      <section className='flex items-center justify-center min-h-screen bg-gray-50
  dark:bg-gray-800'>
        <form
          onSubmit={handleSubmit}
          className='bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md w-full
  max-w-sm'
        >
          <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
          <label className='block mb-2 text-sm font-medium'>
            Email
            <input
              type='email'
              value={email}
              disabled
              className='mt-1 block w-full rounded-md border-gray-300 
  dark:border-gray-600 shadow-sm focus:ring-primary focus:border-primary'
            />
          </label>
          <label className='block mb-4 text-sm font-medium'>
            Password
            <input
              type='password'
              value={password}
              disabled
              className='mt-1 block w-full rounded-md border-gray-300 
  dark:border-gray-600 shadow-sm focus:ring-primary focus:border-primary'
            />
          </label>
          <button
            type='submit'
            className='w-full py-2 rounded-md bg-primary text-white 
  hover:bg-secondary transition-colors'
          >
            Log In
          </button>
          <p className='mt-4 text-xs text-gray-600 text-center'>
            Demo credentials: <code>demo@tesla.com / demo123</code>
          </p>
        </form>
      </section>
    );
  };

  export default Login;
