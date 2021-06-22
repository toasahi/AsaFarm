import { PrimaryButton } from 'components/atoms/PrimaryButton';
import { PrimaryInput } from 'components/atoms/PrimaryInput';
import { Main } from 'components/layout/Main';
import { ChangeEvent, memo, useState, VFC } from 'react';

export const Contact: VFC = memo(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [matter, setMatter] = useState('');
  const onChangename = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value);
  const onChangeMatter = (event: ChangeEvent<HTMLTextAreaElement>) => setMatter(event.target.value);
  return (
    <Main>
      <div className="">
        <h1 className="text-2xl font-semibold text-center mt-9">お問い合わせ</h1>
        <form>
          <div className="container mx-auto">
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>氏名
              <input
                type="text"
                onChange={onChangename}
                className="text-lg mt-2 py-1 block w-full border-gray-300 border rounded-lg focus:outline-none"
                value={name}
              />
            </div>
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>メールアドレス
              <input
                type="text"
                onChange={onChangeEmail}
                className="text-lg mt-2 py-1 block w-full border-gray-300 border rounded-lg focus:outline-none"
                value={email}
              />
            </div>
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>件名
              <input
                type="text"
                onChange={onChangeSubject}
                className="text-lg mt-2 py-1 block w-full border-gray-300 border rounded-lg focus:outline-none"
                value={subject}
              />
            </div>
            <div className="px-10 mt-4 text-md font-bold text-gray-600 tracking-wide">
              <span className="text-white bg-red-500 text-xs p-1 rounded-xl mr-2">必須</span>お問い合わせ内容
              <textarea
                className="text-lg mt-2 py-1 block w-full border-gray-300 border rounded-lg focus:outline-none"
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
