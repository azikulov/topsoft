import { Navigate, createBrowserRouter } from 'react-router-dom';

// Public Pages
import Home from '@/pages/page';
import Catalog from '@/pages/catalog/page';
import CatalogID from '@/pages/catalog/[id]/page';
import Exchange from '@/pages/exchange/page';
import Instructions from '@/pages/instructions/page';
import InstructionsID from '@/pages/instructions/[id]/page';
import Rates from '@/pages/rates/page';
import AboutCompany from '@/pages/about-company/page';
import Answers from '@/pages/answers/page';

// Admin Private Pages
import AdminProducts from './pages/admin/products/page';
import AdminProductsID from './pages/admin/products/[id]/page';
import AdminKeys from './pages/admin/keys/page';
import AdminTrashKeys from './pages/admin/trash-keys/page';
import AdminOrders from './pages/admin/orders/page';
import PaymentOrderId from './pages/payment/[orderId]/page';
import Admin from './pages/admin/page';

const isAuth = JSON.parse(localStorage.getItem('topsoft') as string)?.isAuth || false;

export const router = createBrowserRouter([
  {
    children: [
      { path: '*', element: <Navigate to='/' /> },
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
      {
        path: '/payment/:orderId',
        element: <PaymentOrderId />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
  {
    children: isAuth
      ? [
          {
            path: '/admin/products',
            element: <AdminProducts />,
          },
          {
            path: '/admin/products/:id',
            element: <AdminProductsID />,
          },
          {
            path: '/admin/keys',
            element: <AdminKeys />,
          },
          {
            path: '/admin/trash-keys',
            element: <AdminTrashKeys />,
          },
          {
            path: '/admin/orders',
            element: <AdminOrders />,
          },
        ]
      : [
          {
            path: '/admin/*',
            element: <Navigate to='/admin' />,
          },
        ],
  },
]);
