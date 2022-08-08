import React from 'react';
import { TopContentLayout } from '@/features/top';

interface Props {}

export const TopSocials: React.FC<Props> = () => {
  return (
    <TopContentLayout>
      <section className='flex flex-col'>
        <h2 className='text-7xl'>Socials</h2>
        <div className='grid'>
          <div></div>
        </div>
      </section>
    </TopContentLayout>
  );
};
