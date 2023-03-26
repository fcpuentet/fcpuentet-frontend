import Link from 'next/link';
import React from 'react';
import { OpenInNew } from '@/components/Elements';

// eslint-disable-next-line @typescript-eslint/ban-types
type InstagramProps = {};

// eslint-disable-next-line no-empty-pattern
export const Instagram: React.FC<InstagramProps> = ({}: InstagramProps): JSX.Element => {
  return (
    <section className='w-full bg-gradient-to-br from-purple-500 via-yellow-200 to-red-500 p-2'>
      <div className='flex flex-col bg-white/80 py-8 px-4'>
        <h3 className='mx-auto mb-6 cursor-default'>Instagram</h3>
        <p className='mx-auto flex flex-col md:flex-row'>
          <span>日々の活動やクラブについて</span>
          <span>写真と動画で発信しています！</span>
        </p>
        <Link
          href='https://instagram.com/fcpuentet'
          target='_blank'
          className='mx-auto mt-4 flex select-none flex-row gap-2 rounded-md border border-black py-2 px-8 duration-100 hover:bg-black hover:text-white focus:bg-black focus:text-white'
        >
          Instagram を見る
          <OpenInNew />
        </Link>
      </div>
    </section>
  );
};
