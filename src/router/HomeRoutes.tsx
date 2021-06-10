import { Vegetable } from 'components/pages/Vegetable';
import { Home } from 'components/pages/Home';
import { Login } from 'components/pages/Login';
import { Page404 } from 'components/pages/Page404';
import { Service } from 'components/pages/Service';
import { News } from 'components/pages/News';
import { Contact } from 'components/pages/Contact';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/vegetable',
    exact: false,
    children: <Vegetable />,
  },
  {
    path: '/news',
    exact: false,
    children: <News />,
  },
  {
    path: '/service',
    exact: false,
    children: <Service />,
  },
  {
    path: '/contact',
    exact: false,
    children: <Contact />,
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
