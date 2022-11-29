import Link from 'next/link';
import React from 'react';

type Props = {
  url: string;
  children: React.ReactNode;
};

export const ClubSocialItem: React.FC<Props> = ({ url, children }: Props): JSX.Element => {
  return (
    <Link
      href={url}
      target='_blank'
      className='group rounded-full border border-gray-500 p-3 transition-all hover:border-gray-600 hover:bg-gray-100'
    >
      {children}
    </Link>
  );
};
