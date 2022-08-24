import { useRouter } from 'next/router';
import React from 'react';
import { TopContentLayout, TopFeedContent } from '@/features/top';
import { useTopFeeds } from '@/features/top';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TopFeeds: React.FC<Props> = () => {
  const { push } = useRouter();
  const { feeds } = useTopFeeds();
  const feedItems = feeds?.map((feed) => (
    <TopFeedContent
      key={feed.id}
      feed={feed}
      onClick={() => void push(`/feeds/${feed.id}`)}
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
      <div className='flex justify-end'>
        <button
          className='flex select-none flex-row items-center gap-4 px-8 text-2xl'
          onClick={() => void push(`/feeds`)}
        >
          もっとみる
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='40'
            width='40'
          >
            <path d='m20 33.333-1.958-1.958 9.958-10H6.667v-2.75H28l-9.958-10L20 6.667 33.333 20Z' />
          </svg>
        </button>
      </div>
    </TopContentLayout>
  );
};
