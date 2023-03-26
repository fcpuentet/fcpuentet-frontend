import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
};

export const SponsorHeader: React.FC<Props> = ({ title }: Props): JSX.Element => {
  return (
    <div className='flex flex-col lg:flex-row-reverse lg:items-center'>
      <Link href='/'>
        <img
          src='/teamname.svg'
          alt='team-name'
          className='h-8 max-w-fit select-none lg:h-12'
        />
      </Link>
      <h2 className='mt-8 flex-1 cursor-default select-none text-4xl lg:mt-0 lg:text-7xl'>
        {title}
      </h2>
    </div>
  );
};
