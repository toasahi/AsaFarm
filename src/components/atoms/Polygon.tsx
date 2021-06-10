import { memo, VFC } from 'react';

export const Polygon: VFC = memo(() => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="50" viewBox="0 0 200 100" className="ml-2 mb-2">
        <polygon points="0,50 50,100 100,50" style={{ fill: '#44BC31', stroke: '#44BC31', strokeWidth: 5 }} />
      </svg>
    </>
  );
});
