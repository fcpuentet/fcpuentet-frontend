import Link from 'next/link';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
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
    <div className='w-full h-full fixed z-[100] bg-white/50 backdrop-blur-lg overscroll-contain p-4 flex flex-col'>
      <div className='text- mb-4 flex justify-end cursor-pointer'>
        <Icon
          icon={faXmark}
          onClick={onClose}
          color='secondary'
          className='w-6'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl m-auto'>
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
                  <li className='text-4xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 cursor-pointer py-4'>
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
