import React from 'react';
import { TopContentLayout } from '@/features/top';

interface Props {
  title: string;
}

export const TopFeedContent: React.FC<Props> = ({ title }: Props) => {
  return (
    <li className='my-6 block cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100'>
      <a href='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{title}</h5>
        <p className='font-normal text-gray-700'>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
          chronological order.
        </p>
      </a>
    </li>
  );
};
