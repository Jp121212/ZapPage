import Home from '../pages/home';
import Contact from '../pages/contact';
import Store from '../pages/store';
import About from '../pages/about';

export const unprotectedRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
    {
        path: '/store',
        element: <Store />
    },
    {
        path: '/about',
        element: <About />
    }
];
