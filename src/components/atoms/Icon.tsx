import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  margin?: string;
  padding?: string;
};

export const Icon: VFC<Props> = memo((props) => {
  // const {margin,padding} = props;
  return (
    <Link to="/" className="py-12 bg-green-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
      <div></div>
      <div className="text-2xl text-green-700 tracking-wide ml-2 font-semibold">AsaFarm</div>
    </Link>
  );
});
