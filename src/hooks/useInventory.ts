import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Car } from '../types/api';

export const useInventory = () => {
  const { data, isLoading, error } = useQuery<Car[]>({
    queryKey: ['inventory'],
    queryFn: async () => {
      const res = await axios.get('/api/inventory');
      return res.data;
    },
    staleTime: 60000,
    refetchOnWindowFocus: false
  });

  return { cars: data ?? [], isLoading, error };
};
