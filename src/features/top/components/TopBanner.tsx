import React from 'react';

interface Props {}

export const TopBanner: React.FC<Props> = () => {
  return (
    <section className="h-screen bg-[url('/top-temporary-background.jpg')] bg-cover">
      <div></div>
    </section>
  );
};
