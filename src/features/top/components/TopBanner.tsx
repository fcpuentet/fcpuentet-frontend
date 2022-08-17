import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopBanner: React.FC<Props> = () => {
  return (
    <div className="h-screen w-full bg-[url('/top-temporary-background.jpg')] bg-cover">
      <section className='flex h-full items-center justify-center bg-white/40 backdrop-invert backdrop-opacity-20'>
        <h1>
          <Image
            src='/emblem.png'
            width='942'
            height='557'
            alt='FC-PUENTET'
          />
        </h1>
      </section>
    </div>
  );
};
