import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const SecondaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <button
      className="bg-gray-400 w-full text-sm p-3 px-1 text-white md:mt-2 lg:text-xl lg:mt-0 rounded-full tracking-wide
                  font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
});
