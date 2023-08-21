import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { useDispatch } from '@/hooks/useDispatch';
import { actions as productsActions } from '@/store/products/products.slice';
import { actions as keysActions } from '@/store/keys/keys.slice';

const rootActions = {
  ...productsActions,
  ...keysActions,
};

export function useActions() {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}
