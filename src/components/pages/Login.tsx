import { Icon } from 'components/atoms/Icon';
import { SignUp } from 'components/organisms/user/SignUp';
import { ChangeEvent, memo, useState, VFC } from 'react';
import { Link } from 'react-router-dom';

import { SignIn } from '../organisms/user/SignIn';

export const Login: VFC = memo(() => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userLogin, setUserLogin] = useState(true);
  const onChangeUserEmail = (event: ChangeEvent<HTMLInputElement>) => setUserEmail(event.target.value);
  const onChangeUserPass = (event: ChangeEvent<HTMLInputElement>) => setUserPass(event.target.value);
  const onClickLogin = () => setUserLogin(!userLogin);
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <Link to="/" className="py-12 bg-green-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div></div>
            <div className="text-2xl text-green-700 tracking-wide ml-2 font-semibold">AsaFarm</div>
          </Link>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-8 xl:mt-8 xl:max-w-screen-2xl">
            {userLogin ? (
              <SignIn
                userEmail={userEmail}
                userPass={userPass}
                onChangeUserEmail={onChangeUserEmail}
                onChangeUserPass={onChangeUserPass}
                onClickLogin={onClickLogin}
              />
            ) : (
              <SignUp
                userEmail={userEmail}
                userPass={userPass}
                onChangeUserEmail={onChangeUserEmail}
                onChangeUserPass={onChangeUserPass}
                onClickLogin={onClickLogin}
              />
            )}
          </div>
        </div>
        <div className="hidden lg:flex items-center bg-green-50 flex-1 h-screen"></div>
      </div>
    </>
  );
});
