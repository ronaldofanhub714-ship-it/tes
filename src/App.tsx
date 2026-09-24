import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Router from './router/Router';
import Home from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import CarDetail from './pages/CarDetail';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to='/login' replace />;
};

const App = () => (
  <AuthProvider>
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/cars/:id' element={<CarDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin/*' element={<ProtectedRoute><Router /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  </AuthProvider>
);

export default App;
