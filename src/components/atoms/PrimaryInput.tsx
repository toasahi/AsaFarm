import { ChangeEvent, memo, VFC } from 'react';

type Props = {
  inputType: 'text' | 'password' | 'email' | 'number';
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const PrimaryInput: VFC<Props> = memo((props) => {
  const { inputType, value, onChange, placeholder } = props;
  return (
    <input
      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-green-500"
      type={inputType}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
});
