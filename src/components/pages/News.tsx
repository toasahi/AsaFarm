import { Main } from 'components/layout/Main';
import { memo, VFC } from 'react';
import { Link, useParams } from 'react-router-dom';

import fircu1 from '../../Images/fircu1.jpeg';

export const News: VFC = memo(() => {
  return (
    <Main>
      <section>
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center mt-9">ニュース</h1>
          <div className="flex flex-wrap space-y-6 items-center justify-center sm:justify-between">
            <div className="w-1/3 pr-3 space-y-3 flex-70 sm:flex-0">
              <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
                <Link to="/home/news/1">
                  <img src={fircu1} className="w-full h-full rounded-xl " />
                </Link>
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">2021.07.10</p>
              <p className="text-sm lg:text-lg mt-2 lg:mt-5">苗を買いました</p>
            </div>
            <div className="w-1/3 pr-3 flex-70 sm:flex-0">
              <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
                <Link to="/"></Link>
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">2021.06.29</p>
              <p className="text-sm lg:text-lg mt-2 lg:mt-5">苗を買いました</p>
            </div>
            <div className="w-1/3 pr-3 flex-70 sm:flex-0">
              <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
                <Link to="/"></Link>
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">2021.06.29</p>
              <p className="text-sm lg:text-lg mt-2 lg:mt-5">苗を買いました</p>
            </div>
            <div className="w-1/3 pr-3 flex-70 sm:flex-0">
              <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
                <Link to="/"></Link>
              </div>
              <p className="lg:text-2xl font-semibold lg:mt-8">2021.06.29</p>
              <p className="text-sm lg:text-lg mt-2 lg:mt-5">苗を買いました</p>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
});
