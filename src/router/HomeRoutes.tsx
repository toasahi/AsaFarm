import { About } from 'components/pages/About';
import { Home } from 'components/pages/Home';
import { Login } from 'components/pages/Login';
import { Page404 } from 'components/pages/Page404';
import { Service } from 'components/pages/Service';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/about',
    exact: false,
    children: <About />,
  },
  {
    path: '/service',
    exact: false,
    children: <Service />,
  },
  {
    path: '/login',
    exact: false,
    children: <Login />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
