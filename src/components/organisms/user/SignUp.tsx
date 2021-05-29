import { ChangeEvent, memo, useState, VFC } from 'react';
import { Link } from 'react-router-dom';

import { PrimaryInput } from '../../atoms/PrimaryInput';
import { PrimaryButton } from 'components/atoms/PrimaryButton';

export const SignUp: VFC = memo(() => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value);
  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);
  return (
    <>
      <h2 className="text-center text-4xl font-semibold text-green-800 lg:text-left xl:text-5xl xl:font-bold">
        Sign Up
      </h2>
      <div className="mt-12">
        <form>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-600 tracking-wide">姓</div>
            {/* <PrimaryInput
              inputType="text"
              value={userEmail}
              onChange={onChangeUserEmail}
              placeholder="戸田"
            /> */}
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-600 tracking-wide">名前</div>
            {/* <PrimaryInput
              inputType="text"
              value={userEmail}
              onChange={onChangeUserEmail}
              placeholder="麻陽"
            /> */}
          </div>
          <div className="mt-8">
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
          I have an account?
          <Link to="#" onClick={()=>console.log()} className="cursor-pointer text-green-600 hover:text-green-800">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
});
