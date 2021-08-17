import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

export const Footer: VFC = memo(() => {
  return (
    <footer className="mt-12 border-t-2 border-gray-300 w-full bg-gray-50 lg:h-96 lg:mt-32">
      <div className="container mx-auto p-5 flex flex-wrap md:justify-between lg:p-8">
        <nav className="w-1/2 p-2 md:w-1/4">
          <h3 className="mb-5 font-semibold">体験したい</h3>
          <ul className="text-sm">
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                AsaFarmとは
              </Link>
            </li>
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                ご利用ガイド
              </Link>
            </li>
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                農業者の方へ
              </Link>
            </li>
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                法人の方へ
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="w-1/2 p-2 md:w-1/4">
          <h3 className="mb-5 font-semibold">コミュニティ</h3>
          <ul className="text-sm">
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                ブログ
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="w-1/2 p-2 md:w-1/4">
          <h3 className="mb-5 font-semibold">AsaFarmについて</h3>
          <ul className="text-sm">
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                お問い合わせ
              </Link>
            </li>
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                利用規約
              </Link>
            </li>
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                プライバシーポリシー
              </Link>
            </li>
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                ヘルプ
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="w-1/2 p-2 md:w-1/4">
          <h3 className="mb-5 font-semibold">地域</h3>
          <ul className="text-sm">
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                地域から探す
              </Link>
            </li>
            <li className="mb-3 lg:mb-5">
              <Link to="/" className="text-primary">
                農作物から探す
              </Link>
            </li>
          </ul>
        </nav>
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
