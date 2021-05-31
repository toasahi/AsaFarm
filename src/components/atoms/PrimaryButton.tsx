import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <button
      className="bg-green-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold focus:outline-none focus:shadow-outline hover:bg-green-600"
    >
      {children}
    </button>
  );
});
