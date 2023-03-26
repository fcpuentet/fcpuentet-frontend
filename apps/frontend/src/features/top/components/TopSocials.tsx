import React from 'react';
import { Instagram, TwitterTimeline } from '@/components/Elements';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopSocials: React.FC<Props> = () => {
  return (
    <>
      <h2 className='text-8xl md:text-9xl text-primary/30'>SOCIAL</h2>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 -mt-12'>
        <TwitterTimeline />
        <Instagram />
      </div>
    </>
  );
};
