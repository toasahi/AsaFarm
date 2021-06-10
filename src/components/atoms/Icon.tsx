import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  margin?: string;
  padding?: string;
};

export const Icon: VFC<Props> = memo((props) => {
  // const {margin,padding} = props;
  return (
    <Link to="/home" className="py-2 lg:bg-white flex justify-center lg:justify-start lg:px-4">
      <div className="text-2xl text-green-500 tracking-wide ml-2 font-semibold">AsaFarm</div>
    </Link>
  );
});
