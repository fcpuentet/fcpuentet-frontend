import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Icon } from '../Icon/Icon';

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
  {
    name: 'Contact',
    path: '/contact',
  },
];

interface HamburgerMenuProps {
  onClose: () => void;
}

export const HamburgerMenu = ({ onClose }: HamburgerMenuProps): JSX.Element => {
  return (
    <div className='fixed z-[100] flex h-full w-full flex-col overscroll-contain bg-white/50 p-4 backdrop-blur-lg'>
      <div className='mb-4 flex cursor-pointer justify-end'>
        <Icon
          icon={faXmark}
          onClick={onClose}
          color='secondary'
          className='w-6'
        />
      </div>

      <div className='m-auto grid max-w-6xl grid-cols-1 md:grid-cols-2'>
        <Link
          href='/'
          className='flex items-center justify-center'
        >
          <img
            src='/emblem.webp'
            alt='emblem'
            className='mx-auto w-3/4 md:w-full'
          />
        </Link>

        <nav className='grid gap-8 px-8 py-16 md:place-content-center'>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                >
                  <li className='cursor-pointer py-4 text-4xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'>
                    <span className=''>{item.name}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
