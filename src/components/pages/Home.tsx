import { Main } from 'components/layout/Main';
import { memo, VFC } from 'react';
import ygvegetable from '../../Images/ygvegetable.jpeg';

export const Home: VFC = memo(() => {
  return (
    <Main>
      ホームページ
      <main>
        <section className="mt-20 relative md:h-md lg:h-lg">
          <div
            className="bg-cover bg-center h-full"
            style={{ backgroundImage: `url("https://source.unsplash.com/QFmNQXLPbZc")` }}
          >
            <div className="inline-block bg-white rounded-lg absolute right-0 h-4/5  md:w-72 md:mt-12 md:mr-28 lg:w-96 lg:mt-16 lg:mr-36 "></div>
          </div>
        </section>
        <section className="container mx-auto p-2 md:mt-14 lg:mt-28">
          <h2 className="font-bold text-5xl">好きな野菜を見つけよう</h2>
          <nav className="flex justify-between mt-12">
            <div className="w-5/6 px-3">
              <div className="h-56 w-full lg:h-72 lg:w-80 shadow-lg">
                <img
                  src={ygvegetable}
                  className="h-full w-full hover:opacity-70 lg:w-full lg:h-full rounded-xl"
                  alt="野菜"
                />
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">緑黄色野菜</p>
            </div>
            <div className="w-5/6 px-3">
              <div className="h-56 w-full lg:h-72 lg:w-80 bg-black rounded-xl opacity-20 shadow-xl hover:cursor-pointer hover:opacity-30"></div>
              <p className="lg:text-2xl font-semibold lg:mt-8">淡色野菜</p>
            </div>
            <div className="w-5/6 px-3">
              <div className="h-56 w-full lg:h-72 lg:w-80 bg-black rounded-xl opacity-20 shadow-xl hover:cursor-pointer hover:opacity-30"></div>
              <p className="lg:text-2xl font-semibold lg:mt-8">いも類</p>
            </div>
          </nav>
        </section>
        <section className="container p-3 mx-auto md:mt-14  lg:mt-28">
          <div className="h-72 w-full bg-black rounded-xl opacity-20 shadow-xl hover:cursor-pointer hover:opacity-30"></div>
        </section>
        {/* <section className="container mx-auto md:mt-14 lg:mt-28">
          <h2 className="font-bold text-5xl">体験を検索</h2>
          <p className="lg:mt-4 lg:text-lg">農家さんが開催する、直接対面型または実践型のユニークな体験</p>
          <nav className="flex justify-between mt-12">
            <div>
              <div className="h-72 w-72 shadow-lg">
                <img src="ygvegetable.jpeg" className="lg:w-full lg:h-full rounded-xl" />
              </div>
              <p className="lg:text-2xl lg:font-semibold lg:mt-8">田植え体験</p>
            </div>
            <div>
              <div className="h-72 w-72 bg-black rounded-xl opacity-20 shadow-xl hover:cursor-pointer hover:opacity-30"></div>
              <p className="lg:text-2xl lg:font-semibold lg:mt-8">収穫体験</p>
            </div>
            <div>
              <div className="h-72 w-72 bg-black rounded-xl opacity-20 shadow-xl hover:cursor-pointer hover:opacity-30"></div>
              <p className="lg:text-2xl lg:font-semibold lg:mt-8">生活体験</p>
            </div>
          </nav>
        </section>
        <section className="container mx-auto lg:mt-28">
          <div className="h-72 w-full bg-black rounded-xl opacity-20 shadow-xl hover:cursor-pointer hover:opacity-30"></div>
        </section> */}
      </main>
    </Main>
  );
});
