import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopBanner: React.FC<Props> = () => {
  return (
    <section className='w-full'>
      <h1>
        <div className='block md:hidden'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/top-banner.webp'
            className='select-none object-contain'
            alt='FC-PUENTET'
          />
        </div>
        <div className='hidden md:block'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/top-banner-md.webp'
            className='select-none object-contain'
            alt='FC-PUENTET'
          />
        </div>
      </h1>
    </section>
  );
};
