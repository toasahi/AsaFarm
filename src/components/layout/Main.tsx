import { Footer } from 'components/organisms/layout/Footer';
import { Header } from 'components/organisms/layout/Header';
import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const Main: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
});
