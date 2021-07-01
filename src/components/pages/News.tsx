import { Main } from 'components/layout/Main';
import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

export const News: VFC = memo(() => {
  return (
    <Main>
      <section>
        <div className="container mx-auto">
          <h2 className="text-primary  text-3xl font-semibold text-center mt-4 lg:my-5 lg:text-6xl">NEWS</h2>
          <div className="flex flex-wrap space-y-6 items-center justify-center sm:justify-between">
            <div className="w-1/3 pr-3 space-y-3 flex-70 sm:flex-0">
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
