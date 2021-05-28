import { memo, VFC } from 'react';

export const Login: VFC = memo(() => {
  return (
    <>
      <div className="lg:flex">
        <div>def</div>
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div></div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:mt-24 xl:max-w-screen-2xl">
            <h2 className="text-center text-4xl font-semibold lg:text-left xl:text-5xl xl:font-bold">Log In</h2>
            <div className="mt-12">
              <form>
                <div>
                  <div className="text-sm font-bold text-gray-600 tracking-wide">Email</div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-green-500"
                    placeholder="asa@farm.com"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-600 tracking-wide">Password</div>
                    <div>
                      <a className="text-xs font-semibold text-green-600 hover:text-green-800">Forgot Password</a>
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-green-500"
                    type="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div>
                  <button />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
