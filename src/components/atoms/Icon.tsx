import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  margin?: string;
  padding?: string;
};

export const Icon: VFC<Props> = memo((props) => {
  // const {margin,padding} = props;
  return (
    <Link to="/" className="py-5 bg-green-100 lg:bg-white flex justify-center lg:justify-start lg:px-5">
      <svg
        className="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
      </svg>
      <div className="text-2xl text-green-700 tracking-wide ml-2 font-semibold">AsaFarm</div>
    </Link>
  );
});
