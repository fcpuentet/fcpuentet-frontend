import Link from 'next/link';
import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const FeedHeader: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return (
    <div
      {...divHTMLAttributes}
      className='flex flex-col lg:flex-row-reverse lg:items-center'
    >
      <Link href='/'>
        <a>
          <img
            src='/teamname.svg'
            className='h-8 max-w-fit lg:h-12'
          />
        </a>
      </Link>
      <h2 className='mt-8 flex-1 cursor-default select-none text-4xl lg:mt-0 lg:text-7xl'>
        ニュース
      </h2>
    </div>
  );
};
