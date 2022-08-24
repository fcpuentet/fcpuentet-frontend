import React from 'react';
import { Feed } from '@/features/feed';

interface Props {
  feed: Feed;
  onClick: (id: string) => void;
}

export const TopFeedContent: React.FC<Props> = ({ feed, onClick }: Props) => {
  return (
    <li
      className='my-6 block cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100'
      onClick={() => onClick(feed.id)}
    >
      <a>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{feed.title}</h5>
        <p className='font-normal text-gray-700'>{feed.body}</p>
      </a>
    </li>
  );
};
