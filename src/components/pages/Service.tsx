import { Main } from 'components/layout/Main';
import { memo, VFC } from 'react';

export const Service: VFC = memo(() => {
  return (
    <Main>
      <section>
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center mt-9">サービス</h1>
        </div>
      </section>
    </Main>
  );
});
