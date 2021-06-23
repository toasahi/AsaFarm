import { ChangeEvent, memo, useState, VFC } from 'react';
import { Link } from 'react-router-dom';

import { PrimaryInput } from '../../atoms/PrimaryInput';
import { PrimaryButton } from 'components/atoms/PrimaryButton';

type Props = {
  userEmail: string;
  userPass: string;
  onChangeUserEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeUserPass: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
};

export const SignUp: VFC<Props> = memo((props) => {
  const { userEmail, userPass, onChangeUserEmail, onChangeUserPass, onClickLogin } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value);
  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);
  return (
    <>
      <h2 className="text-center text-4xl font-semibold text-primary lg:text-left xl:text-2xl xl:font-bold">
        AsaFarmで始めましょう
      </h2>
      <div className="mt-8">
        <form>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-600 tracking-wide">FirstName</div>
            <PrimaryInput inputType="text" value={firstName} onChange={onChangeFirstName} placeholder="Toda" />
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-600 tracking-wide">LastName</div>
            <PrimaryInput inputType="text" value={lastName} onChange={onChangeLastName} placeholder="Asahi" />
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-600 tracking-wide">メールアドレス</div>

            <PrimaryInput
              inputType="text"
              value={userEmail}
              onChange={onChangeUserEmail}
              placeholder="test@test.gmail"
            />
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-600 tracking-wide">パスワード</div>

            <PrimaryInput
              inputType="password"
              value={userPass}
              onChange={onChangeUserPass}
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mt-10">
            <PrimaryButton>アカウントを作成</PrimaryButton>
          </div>
        </form>
        <div className="mt-6 text-base font-semibold text-gray-500 text-center">
          すでにアカウントをお持ちですか？
          <Link
            to="#"
            onClick={() => onClickLogin()}
            className="cursor-pointer text-green-600 hover:text-green-800 ml-2"
          >
            ログイン
          </Link>
        </div>
      </div>
    </>
  );
});
