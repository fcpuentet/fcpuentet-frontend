import Image from 'next/image';
import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center bg-primary pt-16'>
        <div className='block md:hidden'>
          <Image
            src='/assets/image/top-banner-square.webp'
            className='select-none object-contain'
            width={1080}
            height={1080}
            alt='FC-PUENTET'
          />
        </div>
        <div className='hidden md:block'>
          <Image
            src='/assets/image/top-banner.webp'
            className='select-none object-contain'
            width={1920}
            height={1080}
            alt='FC-PUENTET'
          />
        </div>
      </div>
    </section>
  );
};
