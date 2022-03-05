import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { useState } from 'react';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useLoading = ({ initialLoading = false } = {}) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return { startLoading, stopLoading, isLoading };
};