import React from 'react';
import { TopContentLayout } from '@/features/top';

interface Props {}

export const TopFeeds: React.FC<Props> = () => {
  return (
    <TopContentLayout>
      <section className='flex flex-col'>
        <h2 className='text-7xl'>News</h2>
        <div>
          <ul className='p-8 '>
            <li>news1</li>
            <li>news2</li>
            <li>news3</li>
            <li>news4</li>
          </ul>
        </div>
      </section>
    </TopContentLayout>
  );
};
