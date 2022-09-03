import React from 'react';
import { Feed } from '@/features/feed';

interface Props {
  feed: Feed;
  onClick: (id: string) => void;
}

export const FeedListContent: React.FC<Props> = ({ feed, onClick }: Props) => {
  return (
    <li
      className='my-6 block cursor-pointer select-none rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100'
      onClick={() => onClick(feed.id)}
    >
      <a className='flex flex-col justify-between md:flex-row md:items-center'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl'>
          {feed.title}
        </h5>
        <p className='text-end font-normal text-gray-700'>
          更新日: {feed.updatedAt.toLocaleDateString()}
        </p>
      </a>
    </li>
  );
};
