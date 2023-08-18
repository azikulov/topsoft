import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '@/pages/page';
import Catalog from '@/pages/catalog/page';
import CatalogID from './pages/catalog/[id]/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/catalog/:id',
    element: <CatalogID />,
  },
]);
