import { useRouter } from 'next/router';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopContact: React.FC<Props> = () => {
  const { push } = useRouter();
  const onContactFormClick = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    void push('/contact');
  };

  return (
    <div className='w-full md:w-1/2 md:ml-auto'>
      <h2 className='text-8xl md:text-9xl text-primary/30'>CONTACT</h2>
      <div className='-mt-12 flex justify-between'>
        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='text-4xl mb-2 font-bold'>Form</h3>
            <p>お問い合わせは下記のフォームよりお送りください</p>
          </div>
          <button
            className='w-full px-6 py-4 rounded-full border-secondary border-2 text-secondary font-bold hover:bg-secondary hover:text-white'
            onClick={(event) => onContactFormClick(event)}
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
