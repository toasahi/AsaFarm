import { Icon } from 'components/atoms/Icon';
import { SecondaryButton } from 'components/atoms/SecondaryButton';
import { memo, useState, VFC } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Header: VFC = memo(() => {
  const history = useHistory();
  const [menu, setMenu] = useState(true);
  const onClickMenu = () => setMenu(!menu);
  const onClickLogin = () => history.push('login');
  const headerRoute = [
    {
      to: 'vegetable',
      children: '野菜',
    },
    {
      to: 'news',
      children: 'ニュース',
    },
    {
      to: 'service',
      children: 'サービス',
    },
    {
      to: 'contact',
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
          {/* <li className="">
            <div className="flex items-center mt-0 mr-8">
              <Link to="vegetable" className="block text-xl text-center font-light lg:inline-block">
                野菜
              </Link>
            </div>
          </li> */}
          {headerRoute.map((route, index) => (
            <li key={index} className="">
              <Link
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
        <div className="hidden pr-4 sm:block lg:pr-24">
          <SecondaryButton onClick={onClickLogin}>ログイン</SecondaryButton>
        </div>
        <div className="block pr-2 lg:hidden">
          <button
            className="flex items-center px-4 py-2 border rounded text-teal-200 border-teal-400 hover:border-green-300"
            onClick={onClickMenu}
          >
            {menu ? (
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            ) : (
              <svg className="fill-current h-3 w-3" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  width="50"
                  height="5"
                  transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3.53516 38.8909)"
                  fill="#0B0B0B"
                  fillOpacity="0.7"
                />
                <rect
                  width="50"
                  height="5"
                  transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 38.8906 35.3553)"
                  fill="#0B0B0B"
                  fillOpacity="0.7"
                />
              </svg>
            )}
          </button>
          {/* <p className="text-primary opacity-70 text-base">Menu</p> */}
        </div>
      </div>
    </header>
  );
});
