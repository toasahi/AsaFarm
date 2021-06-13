import { Main } from 'components/layout/Main';
import { url } from 'inspector';
import { memo, VFC } from 'react';
import { Login } from './Login';

export const Home: VFC = memo(() => {
  return (
    <Main>
      ホームページ
      <main>
        <section className="mt-20" style={{ height: 550 }}>
          <div
            className="bg-cover bg-center lg:h-full"
            style={{ backgroundImage: `url("https://source.unsplash.com/QFmNQXLPbZc")` }}
          >
            <div className="text-right inline-block bg-white rounded-lg lg:h-96 lg:w-96 lg:ml-auto lg:mt-24"></div>
          </div>
          {/* <img src="https://source.unsplash.com/QFmNQXLPbZc" className="w-full h-96 " /> */}
        </section>
      </main>
    </Main>
  );
});
