import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  imageUrl: string;
  imageDescription: string;
  children: string;
};

export const Card: VFC<Props> = memo((props) => {
  const { imageUrl, imageDescription, children } = props;
  return (
    <div className="w-1/3 pr-3 flex-70 sm:flex-0">
      <div className="h-56 w-full rounded-xl lg:h-72 lg:w-80 shadow-lg">
        <Link to="/">
          <img
            src={imageUrl}
            className="h-full w-full object-cover rounded-xl hover:opacity-70 lg:w-full lg:h-full"
            alt={imageDescription}
          />
        </Link>
      </div>
      <p className="lg:text-2xl font-semibold lg:mt-8">{children}</p>
    </div>
  );
});
