import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import { Supporter } from '@/features/club';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SupporterItemProps {
  supporter: Supporter;
}

export const SupporterItem: React.FC<SupporterItemProps> = ({
  supporter,
}: SupporterItemProps): JSX.Element => {
  const mustElement = (
    <div className='grid h-full w-full place-content-center'>
      <Image
        className='rounded-full'
        src={supporter.iconImageUrl || ''}
        width={256}
        height={256}
        alt={supporter.name}
      />
    </div>
  );

  const coreElement = supporter.url ? (
    <Link href={supporter.url}>
      <a target='_blank'>{mustElement}</a>
    </Link>
  ) : (
    mustElement
  );

  const resolveClassName = () => {
    switch (supporter.rank) {
      case 'king':
        return 'w-1/3 p-1';
      case 'queen':
        return 'w-1/4 p-1';
      case 'jack':
        return 'w-1/5 p-0.5';
      case 'joker':
        return 'w-1/6 p-0.5';
    }
  };

  return <div className={resolveClassName()}>{coreElement}</div>;
};
