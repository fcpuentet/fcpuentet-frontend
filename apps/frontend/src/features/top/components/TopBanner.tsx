import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <section>
      <div className='h-screen bg-primary flex flex-col items-center justify-center'>
        <img
          src='emblem.webp'
          alt='emblem'
          className='w-[300px] sm:w-[400px]'
        />
        <img
          src='teamname.svg'
          alt='teamname'
          className='w-[300px] sm:w-[400px] mt-8'
        />
      </div>
      <div className='bg-gradient-to-b from-primary h-[200px] mt-[-1px]'></div>
    </section>
  );
};
