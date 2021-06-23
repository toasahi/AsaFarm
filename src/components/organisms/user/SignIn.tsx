import { memo, VFC, ChangeEvent } from 'react';
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

export const SignIn: VFC<Props> = memo((props) => {
  const { userEmail, userPass, onChangeUserEmail, onChangeUserPass, onClickLogin } = props;
  return (
    <>
      <h2 className="text-center text-xl font-semibold text-primary lg:text-left xl:text-2xl xl:font-bold">
        AsaFarmにログイン
      </h2>
      <div className="mt-12">
        <form>
          <div>
            <div className="text-sm font-bold text-gray-600 tracking-wide">メールアドレス</div>
            <PrimaryInput
              inputType="text"
              value={userEmail}
              onChange={onChangeUserEmail}
              placeholder="test@test.gmail"
            />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-600 tracking-wide">パスワード</div>
            </div>

            <PrimaryInput
              inputType="password"
              value={userPass}
              onChange={onChangeUserPass}
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mt-10">
            <PrimaryButton>ログイン</PrimaryButton>
          </div>
        </form>
        <div className="mt-12 text-base font-semibold text-gray-500 text-center">
          <Link to="#" onClick={onClickLogin} className="cursor-pointer text-green-600 hover:text-green-800 ml-2">
            サインアップ
          </Link>
          <Link to="#" className="cursor-pointer text-green-600 hover:text-green-800 ml-2">
            パスワードをお忘れですか？
          </Link>
        </div>
      </div>
    </>
  );
});
