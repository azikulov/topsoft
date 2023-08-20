import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from '@/hooks/useDispatch';
import { actions } from '@/store/products/products.slice';

const rootActions = {
  ...actions,
};

export function useActions() {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}
