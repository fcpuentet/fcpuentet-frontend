import { useRouter } from 'next/router';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopContact: React.FC<Props> = () => {
  const { push } = useRouter();
  const onContactFormClick = () => {
    void push('/contact');
  };

  return (
    <div className='w-full md:ml-auto md:w-1/2'>
      <h2 className='text-8xl text-primary/30 md:text-9xl'>CONTACT</h2>
      <div className='-mt-12 flex justify-between'>
        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='mb-2 text-4xl font-bold'>Form</h3>
            <p>お問い合わせは下記のフォームよりお送りください</p>
          </div>
          <button
            className='w-full rounded-full border-2 border-secondary px-6 py-4 font-bold text-secondary hover:bg-secondary hover:text-white'
            onClick={onContactFormClick}
          >
            お問い合わせ
          </button>
        </div>

        <img
          src='/mascot-character.webp'
          alt='mascot-character'
          className='w-44'
        />
      </div>
    </div>
  );
};
