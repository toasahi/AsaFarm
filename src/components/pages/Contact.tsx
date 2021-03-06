import { PrimaryButton } from 'components/atoms/PrimaryButton';
import { PrimaryInput } from 'components/atoms/PrimaryInput';
import { Main } from 'components/layout/Main';
import { ChangeEvent, memo, useState, VFC } from 'react';
import { useHistory } from 'react-router';

export const Contact: VFC = memo(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [matter, setMatter] = useState('');
  const history = useHistory();
  const onChangename = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value);
  const onChangeMatter = (event: ChangeEvent<HTMLTextAreaElement>) => setMatter(event.target.value);
  const onClickLogin = () => history.push('/login');
  return (
    <Main>
      <section className="flex sticky top-24 z-10 sm:hidden justify-center items-center">
        <div className="w-1/2 h-16 bg-white" onClick={onClickLogin}>
          <h2 className="text-lg p-5 text-center">ログイン</h2>
        </div>
        <div className="w-1/2 h-16 bg-green-500 relative">
          <h2 className="text-white text-lg p-5 text-center">AsaFarmとは?</h2>
        </div>
      </section>
      <div className="md:w-3/5 xl:w-1/2 md:mx-auto">
        <h1 className="text-3xl font-semibold text-center mt-9">お問い合わせ</h1>
        <form>
          <div className="container mx-auto">
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>氏名
              <input
                type="text"
                onChange={onChangename}
                className="text-lg mt-2 py-1 pl-2 block w-full border-gray-300 border rounded-lg focus:outline-none"
                value={name}
              />
            </div>
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>メールアドレス
              <input
                type="text"
                onChange={onChangeEmail}
                className="text-lg mt-2 py-1 pl-2 block w-full border-gray-300 border rounded-lg focus:outline-none"
                value={email}
              />
            </div>
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>件名
              <input
                type="text"
                onChange={onChangeSubject}
                className="text-lg mt-2 py-1 pl-2 block w-full border-gray-300 border rounded-lg focus:outline-none"
                value={subject}
              />
            </div>
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>お問い合わせ内容
              <textarea
                className="text-lg mt-2 py-1 pl-2 block w-full border-gray-300 border rounded-lg focus:outline-none"
                onChange={onChangeMatter}
                cols={30}
                rows={10}
                value={matter}
              ></textarea>
            </div>
            <div className="mt-5 text-md w-1/2 mx-auto font-bold text-gray-600 tracking-wide lg:w-1/3 lg:mt-10">
              <PrimaryButton children="送信する" />
            </div>
          </div>
        </form>
      </div>
    </Main>
  );
});
