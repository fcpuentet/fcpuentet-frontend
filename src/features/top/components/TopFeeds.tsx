import React from 'react';
import { TopContentLayout, TopFeedContent } from '@/features/top';

interface Props {}

export const TopFeeds: React.FC<Props> = () => {
  return (
    <TopContentLayout>
      <section className='flex flex-col'>
        <h2 className='cursor-default text-7xl'>NEWS</h2>
        <div>
          <ul className='p-8'>
            <TopFeedContent title='NEWS 1' />
            <TopFeedContent title='NEWS 2' />
            <TopFeedContent title='NEWS 3' />
            <TopFeedContent title='NEWS 4' />
          </ul>
        </div>
      </section>
    </TopContentLayout>
  );
};
