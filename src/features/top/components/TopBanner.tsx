import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopBanner: React.FC<Props> = () => {
  return (
    <section className='w-full'>
      <h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/top-banner.webp'
          className='select-none object-contain'
          alt='FC-PUENTET'
        />
      </h1>
    </section>
  );
};
