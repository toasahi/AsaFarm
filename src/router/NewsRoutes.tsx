import { Home } from 'components/pages/Home';
import { Page404 } from 'components/pages/Page404';
import { Details } from 'components/pages/Details';

export const newsRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/news/:id',
    exact: false,
    children: <Details />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
