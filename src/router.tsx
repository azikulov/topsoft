import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '@/pages/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
