import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopBanner: React.FC<Props> = () => {
  return (
    <div
      className='h-screen w-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/top-banner.webp')" }}
    >
      <section className=''>
        <h1></h1>
      </section>
    </div>
  );
};
