import Link from 'next/link';
import React from 'react';
import { ContentLayout } from '@/components/Layout';
import { Icon } from '../Icon/Icon';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  name: string;
  path: string;
}

interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps): JSX.Element => {
  return (
    <div className='fixed w-full p-4 bg-white/50 backdrop-blur-lg flex justify-between items-center z-50'>
      <div className='text-xl text-secondary flex cursor-pointer'>
        <Icon
          icon={faUser}
          color='secondary'
          className='w-6 sm:w-4 mr-2'
        />
        <span className='hidden sm:block'>MEMBERS</span>
      </div>

      <Link href={'/'}>
        <img
          src='/emblem.webp'
          alt='emblem'
          className='h-12 '
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
