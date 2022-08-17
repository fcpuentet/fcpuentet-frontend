import React from 'react';
import { TopContentLayout } from '@/features/top';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopSocials: React.FC<Props> = () => {
  return (
    <TopContentLayout>
      <section className='flex flex-col'>
        <h2 className='cursor-default text-7xl'>SOCIALS</h2>
        <div className='grid'>
          <div></div>
        </div>
      </section>
    </TopContentLayout>
  );
};
