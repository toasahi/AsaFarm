import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

export const Footer: VFC = memo(() => {
  const footerNavs = [
    {
      title: '体験したい',
      navs: [
        {
          to: '/',
          childern: 'AsaFarmとは',
        },
        {
          to: '/',
          childern: 'ご利用ガイド',
        },
        {
          to: '/',
          childern: '農業者の方へ',
        },
        {
          to: '/',
          childern: '法人の方へ',
        },
      ],
    },
    {
      title: 'コミュニティ',
      navs: [
        {
          to: '/',
          childern: 'ブログ',
        },
      ],
    },
    {
      title: 'AsaFarmについて',
      navs: [
        {
          to: '/contact',
          childern: 'お問い合わせ',
        },
        {
          to: '/',
          childern: '利用規約',
        },
        {
          to: '/',
          childern: 'プライバシーポリシー',
        },
        {
          to: '/',
          childern: 'ヘルプ',
        },
      ],
    },
    {
      title: '地域',
      navs: [
        {
          to: '/',
          childern: '地域から探す',
        },
        {
          to: '/',
          childern: '農作物から探す',
        },
      ],
    },
  ];
  return (
    <footer className="mt-12 border-t-2 border-gray-300 w-full bg-gray-50 lg:h-96 lg:mt-32">
      <div className="container mx-auto p-5 flex flex-wrap md:justify-between lg:p-8">
        {footerNavs.map((footerNav, index) => (
          <nav key={index} className="w-1/2 p-2 md:w-1/4">
            <h3 className="mb-5 font-semibold">{footerNav.title}</h3>
            <ul className="text-sm">
              {footerNav.navs.map((nav) => (
                <li key={nav.childern} className="mb-3 lg:mb-5">
                  <Link to={nav.to} className="text-primary">
                    {nav.childern}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-gray-200 border-t-2">
        <ul className="flex justify-center">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <small className="text-primary text-center block opacity-50">&copy; 2021 AsaFarm</small>
      </div>
    </footer>
  );
});
