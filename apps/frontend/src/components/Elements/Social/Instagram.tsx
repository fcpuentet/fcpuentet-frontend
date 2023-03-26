import Link from 'next/link';
import React from 'react';
import { OpenInNew } from '@/components/Elements';

export const Instagram: React.FC = (): JSX.Element => {
  return (
    <div className='w-full'>
      <h3 className='mb-2 text-4xl'>Instagram</h3>
      <p className='mb-8'>日々の活動やクラブについて写真と動画で発信しています✨</p>
      <div className='relative'>
        <img
          src='/instagram-bg.png'
          alt='instagram-bg'
          className='w-full object-cover'
        />
        <div className='absolute top-0 flex h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm'>
          <Link
            href='https://instagram.com/fcpuentet'
            className='flex items-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-8 py-4 text-2xl text-white'
          >
            <span className='mr-1'>Instagramを見る</span>
            <OpenInNew />
          </Link>
        </div>
      </div>
    </div>
  );
};
