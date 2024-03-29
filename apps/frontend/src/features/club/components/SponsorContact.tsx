import { useRouter } from 'next/router';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const SponsorContact: React.FC<Props> = (): JSX.Element => {
  const { push } = useRouter();
  const onContactFormClick = () => {
    void push('/contact');
  };

  return (
    <div className='my-6 flex flex-col items-center lg:m-8'>
      <p>スポンサーに関するお問い合わせは下記のフォームよりお送りください</p>
      <button
        className='my-6 w-full select-none rounded border border-blue-500 bg-transparent py-4 px-16 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white md:w-3/4 lg:my-8 lg:w-3/5'
        onClick={onContactFormClick}
      >
        お問い合わせフォーム
      </button>
    </div>
  );
};
