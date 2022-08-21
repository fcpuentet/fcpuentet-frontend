import React from 'react';
import { TopContentLayout, TopFeedContent } from '@/features/top';
import { useTopFeeds } from '@/features/top';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopFeeds: React.FC<Props> = () => {
  const { feeds } = useTopFeeds();
  const feedItems = feeds?.map((feed) => (
    <TopFeedContent
      key={feed.title}
      title={feed.title}
      body={feed.body}
    />
  ));

  return (
    <TopContentLayout>
      <section className='flex flex-col'>
        <h2 className='cursor-default text-7xl'>NEWS</h2>
        <div>
          <ul className='p-8'>{feedItems}</ul>
        </div>
      </section>
    </TopContentLayout>
  );
};
