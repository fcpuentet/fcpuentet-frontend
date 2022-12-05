import Link from 'next/link';
import React from 'react';
import { ContentLayout } from '@/components/Layout';

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Top',
    path: '/',
  },
  {
    name: 'News',
    path: '/news',
  },
  {
    name: 'Club',
    path: '/club',
  },
  {
    name: 'Team',
    path: '/teams',
  },
  {
    name: 'Sponsor',
    path: '/club/sponsors',
  },
  // TODO: サポーターページを公開するタイミングでメニューに追加する
  // {
  //   name: 'Supporter',
  //   path: '/club/supporters',
  // },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const Header = (): JSX.Element => {
  const menuItemElements = menuItems.map((menuItem) => (
    <Link
      key={menuItem.name}
      href={menuItem.path}
      className='text-4xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
    >
      {menuItem.name}
    </Link>
  ));

  return (
    <ContentLayout className='block min-h-screen md:grid md:place-content-center'>
      <header className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center'>
          <Link
            href='/'
            aria-label='logo'
          >
            <img
              src='/emblem.webp'
              className='mx-auto w-3/4 md:w-full'
            />
          </Link>
        </div>

        <nav className='grid gap-4 p-8 md:place-content-center'>{menuItemElements}</nav>
      </header>
    </ContentLayout>
  );
};
