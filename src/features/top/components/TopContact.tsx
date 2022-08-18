import { useRouter } from 'next/router';
import React from 'react';
import { TopContentLayout } from '@/features/top';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopContact: React.FC<Props> = () => {
  const { push } = useRouter();
  const onContactFormClick = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    void push('/contact');
  };

  return (
    <div className=''>
      <TopContentLayout>
        <section className='flex flex-col'>
          <h2 className='cursor-default text-7xl'>CONTACT</h2>
          <div className='m-8 flex flex-col items-center'>
            <p>お問い合わせは下記のフォームよりお送りください</p>
            <button
              className='my-8 rounded border border-blue-500 bg-transparent py-4 px-16 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white lg:px-32'
              onClick={(event) => onContactFormClick(event)}
            >
              お問い合わせフォーム
            </button>
          </div>
        </section>
      </TopContentLayout>
    </div>
  );
};
