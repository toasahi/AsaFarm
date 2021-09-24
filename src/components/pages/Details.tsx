import { Main } from 'components/layout/Main';
import { memo, VFC } from 'react';
import { useParams } from 'react-router';

export const Details: VFC = memo(() => {
  const param = useParams<{ id: string }>();
  return (
    <Main>
      <section>
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center mt-9">詳細ページ</h1>
        </div>
      </section>
    </Main>
  );
});
