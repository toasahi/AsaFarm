import { Icon } from 'components/atoms/Icon';
import { Polygon } from 'components/atoms/Polygon';
import { SecondaryButton } from 'components/atoms/SecondaryButton';
import { memo, useState, VFC } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Header: VFC = memo(() => {
  const history = useHistory();
  const [drop, setDrop] = useState(false);
  const onClickDrop = () => setDrop(!drop);
  const onClickLogin = () => history.push('/home/login');
  const headerRoute = [
    {
      to: '/home/news',
      children: 'ニュース',
    },
    {
      to: '/home/service',
      children: 'サービス',
    },
    {
      to: '/home/contact',
      children: 'お問い合わせ',
    },
  ];
  return (
    <header className="flex justify-between w-full sticky top-0 z-10 bg-gray-50">
      <nav className="flex items-center justify-between px-10 h-24">
        <div className="flex items-center  text-white mr-6">
          <Icon />
        </div>
        <ul className="hidden lg:flex md:items-center md:w-auto md:h-full">
          <li className="">
            <div className="flex items-center mt-0 mr-8">
              <Link to="/home/vegetable" className="block text-xl text-center font-light lg:inline-block">
                野菜
              </Link>
              <Polygon onClickDrop={onClickDrop} drop={drop} />
            </div>
          </li>
          {headerRoute.map((route, index) => (
            <li className="">
              <Link
                key={index}
                to={route.to}
                className="block mt-0 text-xl text-center font-light lg:inline-block mr-8 hover:border-b-2  hover:border-green-300"
              >
                {route.children}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
        </div>
      </nav>
      <div className="flex justify-between items-center  sm:px-12">
        <div className="pr-4 lg:pr-24">
          <SecondaryButton onClick={onClickLogin}>ログイン</SecondaryButton>
        </div>
        <div className="block pr-2 lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:border-green-300">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
});
