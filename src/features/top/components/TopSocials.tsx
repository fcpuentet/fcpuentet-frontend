import React from 'react';
import { TwitterTimeline } from '@/components/Elements';
import { TopContentLayout } from '@/features/top';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopSocials: React.FC<Props> = () => {
  return (
    <TopContentLayout>
      <section className='flex flex-col'>
        <h2 className='cursor-default text-5xl underline decoration-blue-500 underline-offset-8 lg:text-7xl'>
          Socials
        </h2>
        <div className='my-6 grid items-center lg:m-8'>
          <TwitterTimeline />
        </div>
      </section>
    </TopContentLayout>
  );
};
