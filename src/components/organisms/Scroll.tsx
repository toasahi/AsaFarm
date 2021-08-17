import { Card } from 'components/molecules/Card';
import { memo, VFC } from 'react';

type Props = {
  datas: Array<{ imageUrl: string; imageDescription: string; children: string }>;
};

export const Scroll: VFC<Props> = memo((props) => {
  const { datas } = props;
  return (
    <nav className="flex overflow-x-scroll  justify-between mt-12">
      {datas.map((vegetable, index) => (
        <Card
          key={index}
          imageUrl={vegetable.imageUrl}
          imageDescription={vegetable.imageDescription}
          children={vegetable.children}
        />
      ))}
    </nav>
  );
});
