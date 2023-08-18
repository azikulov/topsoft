import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '@/pages/page';
import Catalog from '@/pages/catalog/page';
import CatalogID from '@/pages/catalog/[id]/page';
import Exchange from '@/pages/exchange/page';
import Instructions from '@/pages/instructions/page';
import InstructionsID from '@/pages/instructions/[id]/page';
import Rates from '@/pages/rates/page';
import AboutCompany from '@/pages/about-company/page';
import Answers from '@/pages/answers/page';

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
  {
    path: '/exchange',
    element: <Exchange />,
  },
  {
    path: '/instructions',
    element: <Instructions />,
  },
  {
    path: '/instructions/:id',
    element: <InstructionsID />,
  },
  {
    path: '/rates',
    element: <Rates />,
  },
  {
    path: '/about-company',
    element: <AboutCompany />,
  },
  {
    path: '/answers',
    element: <Answers />,
  },
]);
