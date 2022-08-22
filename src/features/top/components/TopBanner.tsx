import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopBanner: React.FC<Props> = () => {
  return (
    <div className='w-full'>
      <section className=''>
        <h1>
          <img
            src='/top-banner.webp'
            className='object-contain'
            alt='FC-PUENTET'
          />
        </h1>
      </section>
    </div>
  );
};
