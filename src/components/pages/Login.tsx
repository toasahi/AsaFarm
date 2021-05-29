import { memo, VFC } from 'react';

export const Login: VFC = memo(() => {
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 bg-green-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div></div>
            <div className="text-2xl text-green-700 tracking-wide ml-2 font-semibold">AsaFarm</div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:mt-16 xl:max-w-screen-2xl">
            <h2 className="text-center text-4xl font-semibold text-green-800 lg:text-left xl:text-5xl xl:font-bold">
              Log In
            </h2>
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
                <div className="mt-10">
                  <button
                    className="bg-green-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold focus:outline-none focus:shadow-outline hover:bg-green-600"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div className="mt-12 text-base font-semibold text-gray-500 text-center">
                Don't have an account?
                <a className="cursor-pointer text-green-600 hover:text-green-800">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center bg-green-50 flex-1 h-screen"></div>
      </div>
    </>
  );
});
