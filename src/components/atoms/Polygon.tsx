import { memo, VFC } from 'react';

type Props = {
  onClickDrop: () => void;
  drop: boolean;
};

export const Polygon: VFC<Props> = memo((props) => {
  const { onClickDrop, drop } = props;
  return (
    <>
      {drop ? (
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClickDrop}
          className="ml-2"
        >
          <path d="M6.5 12L0.00480938 0.75L12.9952 0.75L6.5 12Z" fill="#44BC31" />
        </svg>
      ) : (
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClickDrop}
          className="ml-2"
        >
          <path d="M6.5 0L12.9952 11.25H0.00480938L6.5 0Z" fill="#44BC31" />
        </svg>
      )}
    </>
  );
});
