import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <section>
      <div className='flex h-screen flex-col items-center justify-center bg-primary'>
        <img
          src='emblem.webp'
          alt='emblem'
          className='w-[300px] sm:w-[400px]'
        />
        <img
          src='teamname.svg'
          alt='teamname'
          className='mt-8 w-[300px] sm:w-[400px]'
        />
      </div>
      <div className='mt-[-1px] h-[200px] bg-gradient-to-b from-primary'></div>
    </section>
  );
};
