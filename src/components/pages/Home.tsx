import { Main } from 'components/layout/Main';
import { memo, VFC } from 'react';
import { Login } from './Login';

export const Home: VFC = memo(() => {
  return <Main>ホームページ</Main>;
});
