import { Main } from 'components/layout/Main';
import { Scroll } from 'components/organisms/Scroll';
import { memo, VFC } from 'react';
import ygvegetable from '../../Images/ygvegetable.jpeg';

export const Home: VFC = memo(() => {
  const kindVegetable = [
    {
      imageUrl: ygvegetable,
      imageDescription: '緑黄色野菜',
      children: '緑黄色野菜',
    },
    {
      imageUrl: ygvegetable,
      imageDescription: '淡色野菜',
      children: '淡色野菜',
    },
    {
      imageUrl: ygvegetable,
      imageDescription: 'いも類',
      children: 'いも類',
    },
  ];

  const agriExperience = [
    {
      imageUrl: ygvegetable,
      imageDescription: '収穫',
      children: '収穫体験',
    },
    {
      imageUrl: ygvegetable,
      imageDescription: '田植え',
      children: '田植え体験',
    },
    {
      imageUrl: ygvegetable,
      imageDescription: '農業者生活',
      children: '生活体験',
    },
  ];
  return (
    <Main>
      <main>
        <section className="flex sticky top-24 z-10 sm:hidden justify-center items-center">
          <div className="w-1/2 h-16 bg-white">
            <h2>ログイン</h2>
          </div>
          <div className="w-1/2 h-16 bg-green-500">
            <h2>AsaFarmとは?</h2>
          </div>
        </section>
        <section className="relative h-md lg:h-lg">
          <div
            className="bg-cover bg-center h-full"
            style={{ backgroundImage: `url("https://source.unsplash.com/QFmNQXLPbZc")` }}
          >
            {/* <div className="inline-block bg-white rounded-lg absolute right-0 h-4/5  md:w-72 md:mt-12 md:mr-28 lg:w-96 lg:mt-16 lg:mr-36 "></div> */}
          </div>
        </section>
        <section className="container mt-5 mx-auto p-2 md:mt-14 lg:mt-28">
          <h2 className="font-semibold text-3xl md:font-bold md:text-5xl">好きな野菜を見つけよう</h2>
          <Scroll datas={kindVegetable} />
          {/* <nav className="flex overflow-x-scroll  justify-between mt-12">
            <div className="w-1/3 px-3 flex-70 sm:flex-0">
              <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
                <Link to="/">
                  <img
                    src={ygvegetable}
                    className="h-full w-full rounded-xl hover:opacity-70 lg:w-full lg:h-full"
                    alt="緑黄色野菜"
                  />
                </Link>
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">緑黄色野菜</p>
            </div>
            <div className="w-1/3 px-3 flex-70 sm:flex-0">
              <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
                <Link to="/">
                  <img
                    src={ygvegetable}
                    className="h-full w-full rounded-xl hover:opacity-70 lg:w-full lg:h-full"
                    alt="淡色野菜"
                  />
                </Link>
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">淡色野菜</p>
            </div>
            <div className="w-1/3 px-3 flex-70 sm:flex-0">
              <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
                <Link to="/">
                  <img
                    src={ygvegetable}
                    className="h-full w-full rounded-xl hover:opacity-70 lg:w-full lg:h-full"
                    alt="いも類"
                  />
                </Link>
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">いも類</p>
            </div>
          </nav> */}
        </section>
        <section className="container mt-5 p-3 mx-auto md:mt-14  lg:mt-28">
          <div className="h-48 sm:h-72 w-full bg-black rounded-xl opacity-20 shadow-xl hover:cursor-pointer hover:opacity-30"></div>
        </section>
        <section className="container mt-5 mx-auto p-2 md:mt-14 lg:mt-28">
          <h2 className="font-semibold text-3xl md:font-bold md:text-5xl">体験を検索</h2>
          <p className="mt-2 lg:mt-4 lg:text-lg">農家さんが開催する、直接対面型または実践型のユニークな体験</p>
          <Scroll datas={agriExperience} />
        </section>
      </main>
    </Main>
  );
});
