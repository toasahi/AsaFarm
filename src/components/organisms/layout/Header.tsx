import { Icon } from 'components/atoms/Icon';
import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

export const Header: VFC = memo(() => {
  return (
    <header className="bg-gray-100">
      <nav className="flex items-center justify-between flex-wrap px-8 bg-white h-24">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Icon />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:h-full">
          <li className="inline-block">
            <Link
              to="/home/About"
              className="block mt-4 text-xl text-center font-light lg:inline-block lg:mt-0 mr-8 hover:border-b-2  hover:border-green-300"
            >
              About
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="/home/Service"
              className="block mt-4 text-xl font-light lg:inline-block lg:mt-0 mr-8 hover:border-b-2  hover:border-green-300"
            >
              Service
            </Link>
          </li>
          <li className="inline-block">
            <Link
              to="/home/Login"
              className="block mt-4 text-xl font-light lg:inline-block lg:mt-0 mr-8 hover:border-b-2  hover:border-green-300"
            >
              Login
            </Link>
          </li>
        </ul>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </header>
  );
});
