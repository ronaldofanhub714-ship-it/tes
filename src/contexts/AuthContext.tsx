import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = { email: string; role: 'user' | 'admin' };

type AuthContextProps = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('auth');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, pw) => {
    const user = { email, role: email.endsWith('admin.com') ? 'admin' : 'user' };
    setUser(user);
    localStorage.setItem('auth', JSON.stringify(user));
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
