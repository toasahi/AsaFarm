import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  margin?: string;
  padding?: string;
};

export const Icon: VFC<Props> = memo((props) => {
  return (
    <Link to="/home" className="bg-gray-50 flex justify-center lg:justify-start lg:px-4">
      <div className="text-2xl text-green-500 tracking-wide ml-2 font-semibold">AsaFarm</div>
    </Link>
  );
});
