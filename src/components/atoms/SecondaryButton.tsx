import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const SecondaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <button
      className="bg-gray-400 text-sm py-2 px-1 text-white lg:p-3 lg:text-xl rounded-full tracking-wide
                  font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
});
