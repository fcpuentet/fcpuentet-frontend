import Link from 'next/link';
import React from 'react';

interface TitleHeaderProps {
  title: string;
}

export const TitleHeader: React.FC<TitleHeaderProps> = ({
  title,
}: TitleHeaderProps): JSX.Element => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:items-center'>
      <Link href='/'>
        <a>
          <img
            src='/teamname.svg'
            className='h-8 max-w-fit select-none lg:h-12'
          />
        </a>
      </Link>
      <h1 className='mt-8 flex-1 cursor-default select-none lg:mt-0 lg:text-5xl'>{title}</h1>
    </div>
  );
};
