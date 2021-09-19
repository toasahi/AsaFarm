import { memo, VFC } from 'react';
import Loader from 'react-loader-spinner';

export const Spinner: VFC = memo(() => {
  return (
    <>
      <Loader
        type="TailSpin"
        color="#9FC730"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    </>
  );
});
