import { createBrowserRouter } from 'react-router-dom';
import Bonsai from '../components/Bonsai';
import LandingPage from '../components/LandingPage';
import Starbucks from '../components/Starbucks';
import Stark from '../components/Stark';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/bonsai',
        element: <Bonsai />,
      },
      {
        path: '/starbucks',
        element: <Starbucks />,
      },
      {
        path: '/stark',
        element: <Stark />,
      },
    ],
  },
]);
