import { memo, VFC } from 'react';
import { useParams } from 'react-router';

export const Details: VFC = memo(() => {
  const param = useParams<{ id: string }>();
  console.log(param.id);
  return (
    <>
      <h1>詳細ページです</h1>
    </>
  );
});
