import Link from 'next/link';
import React from 'react';
import { OpenInNew } from '@/components/Elements';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/ban-types
type InstagramProps = {};

// eslint-disable-next-line no-empty-pattern
export const Instagram: React.FC<InstagramProps> = ({}: InstagramProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className='w-full'>
      <h3 className='text-4xl mb-2'>Instagram</h3>
      <p className='mb-8'>日々の活動やクラブについて写真と動画で発信しています✨</p>
      <div className='relative'>
        <img
          src='/instagram-bg.png'
          alt='instagram-bg'
          className='w-full object-cover'
        />
        <div className='absolute top-0 w-full h-full bg-black/20 backdrop-blur-sm flex justify-center items-center'>
          <button
            onClick={() => router.push('https://instagram.com/fcpuentet')}
            className='flex items-center text-white text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-8 py-4 rounded-full'
          >
            <span className='mr-1'>Instagramを見る</span>
            <OpenInNew />
          </button>
        </div>
      </div>
    </div>
  );
};
