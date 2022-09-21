import React from 'react';
import { News } from '@/features/feed';

interface Props {
  news: News;
  onClick: (id: string) => void;
}

export const FeedListContent: React.FC<Props> = ({ news, onClick }: Props) => {
  return (
    <li
      className='my-6 block cursor-pointer select-none rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100'
      onClick={() => onClick(news.id)}
    >
      <a className='flex flex-col justify-between md:flex-row md:items-center'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl'>
          {news.title}
        </h5>
        <p className='text-end font-normal text-gray-700'>
          更新日: {new Date(news.updatedAtString).toLocaleDateString()}
        </p>
      </a>
    </li>
  );
};
