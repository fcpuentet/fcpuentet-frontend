import { useRouter } from 'next/router';
import React from 'react';
import { FeedListContent, News } from '@/features/feed';
import { TopContentLayout } from '@/features/top';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TopFeedsProps {
  newsList: Array<News>;
}

export const TopFeeds: React.FC<TopFeedsProps> = ({ newsList }) => {
  const { push } = useRouter();
  const feedItems = newsList?.map((news) => (
    <FeedListContent
      key={news.id}
      news={news}
      onClick={() => void push(`/feeds/${news.id}`)}
    />
  ));

  return (
    <TopContentLayout>
      <section className='flex flex-col'>
        <h2 className='cursor-default text-5xl underline decoration-blue-500 underline-offset-8 lg:text-7xl'>
          News
        </h2>
        <div>
          <ul className='lg:p-8'>{feedItems}</ul>
        </div>
      </section>
      <div className='flex justify-end'>
        <button
          className='flex select-none flex-row items-center gap-4 text-xl lg:px-8 lg:text-2xl'
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
