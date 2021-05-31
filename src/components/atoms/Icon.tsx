import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Icon = memo(() => {
  return (
    <Link to="/home" className="py-12 bg-green-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
      <div></div>
      <div className="text-2xl text-green-700 tracking-wide ml-2 font-semibold">AsaFarm</div>
    </Link>
  );
});
