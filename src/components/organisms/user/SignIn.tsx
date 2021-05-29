import { memo, VFC, useState } from 'react';
import { Link } from 'react-router-dom';

import { PrimaryInput } from '../../atoms/PrimaryInput';
import { PrimaryButton } from 'components/atoms/PrimaryButton';

export const SignIn: VFC = memo(() => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  return (
    <>
      <h2 className="text-center text-4xl font-semibold text-green-800 lg:text-left xl:text-5xl xl:font-bold">
        Log In
      </h2>
      <div className="mt-12">
        <form>
          <div>
            <div className="text-sm font-bold text-gray-600 tracking-wide">Email</div>

            {/* <PrimaryInput
              inputType="text"
              value={userEmail}
              onChange={onChangeUserEmail}
              placeholder="test@test.gmail"
            /> */}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-600 tracking-wide">Password</div>
              <div>
                <Link to="#" className="text-xs font-semibold text-green-600 hover:text-green-800">
                  Forgot Password
                </Link>
              </div>
            </div>

            {/* <PrimaryInput
              inputType="password"
              value={userPass}
              onChange={onChangeUserPass}
              placeholder="Enter Your Password"
            /> */}
          </div>
          <div className="mt-10">
            <PrimaryButton>Log In</PrimaryButton>
          </div>
        </form>
        <div className="mt-12 text-base font-semibold text-gray-500 text-center">
          Don't have an account?
          <Link to="#" className="cursor-pointer text-green-600 hover:text-green-800">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
});
