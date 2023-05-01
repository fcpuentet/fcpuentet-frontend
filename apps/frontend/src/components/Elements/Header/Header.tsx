import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import { Icon } from '../Icon/Icon';
import { FEATURE_FLAGS } from '@/utils';

interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps): JSX.Element => {
  if (FEATURE_FLAGS.MEMBERS) {
    return HasMemberHeader({ onClick });
  } else {
    return NoMemberHeader({ onClick });
  }
};

const HasMemberHeader = ({ onClick }: HeaderProps): JSX.Element => {
  return (
    <div className='fixed z-50 flex w-full items-center justify-between bg-white/50 p-4 backdrop-blur-lg'>
      <div className='flex cursor-pointer text-xl text-secondary'>
        <Icon
          icon={faUser}
          color='secondary'
          className='mr-2 w-6 sm:w-4'
        />
        <span className='hidden sm:block'>MEMBERS</span>
      </div>

      <Link
        href={'/'}
        className='sm:-translate-x-1/2'
      >
        <img
          src='/emblem.webp'
          alt='emblem'
          className='h-12'
        />
      </Link>

      <div onClick={onClick}>
        <Icon
          icon={faBars}
          color='secondary'
          className='w-6 cursor-pointer'
        />
      </div>
    </div>
  );
};

const NoMemberHeader = ({ onClick }: HeaderProps): JSX.Element => {
  return (
    <div className='fixed z-50 flex w-full items-center justify-between bg-white/50 p-4 backdrop-blur-lg'>
      <div className='flex cursor-pointer text-xl text-secondary' />

      <Link
        href={'/'}
        className='translate-x-4'
      >
        <img
          src='/emblem.webp'
          alt='emblem'
          className='h-12'
        />
      </Link>

      <div onClick={onClick}>
        <Icon
          icon={faBars}
          color='secondary'
          className='w-6 cursor-pointer'
        />
      </div>
    </div>
  );
};
