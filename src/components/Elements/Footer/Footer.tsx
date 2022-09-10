import Link from 'next/link';
import React from 'react';
import { ContentLayout } from '@/components/Layout';

export const Footer = (): JSX.Element => {
  return (
    <footer className='mx-auto mt-4 mb-8 max-w-screen-2xl border-t bg-white sm:mt-10 lg:mt-12'>
      <ContentLayout className='mt-4 flex flex-col gap-4'>
        <div className='flex flex-row justify-center gap-4'>
          <Link href='https://twitter.com/FCPUENTET'>
            <a
              target='_blank'
              className='text-gray-400 duration-100 hover:text-gray-500 active:text-gray-600'
            >
              <svg
                className='mx-auto my-4 h-6 w-6 transition-all'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
              </svg>
            </a>
          </Link>

          <Link href='https://instagram.com/fcpuentet'>
            <a
              target='_blank'
              className='text-gray-400 duration-100 hover:text-gray-500 active:text-gray-600'
            >
              <svg
                className='mx-auto my-4 h-6 w-6 transition-all'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>
          </Link>

          <Link href='https://www.facebook.com/FCPUENTET'>
            <a
              target='_blank'
              className='text-gray-400 duration-100 hover:text-gray-500 active:text-gray-600'
            >
              <svg
                className='mx-auto my-4 h-6 w-6 transition-all'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 320 512'
              >
                <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
              </svg>
            </a>
          </Link>
        </div>

        <p className='text-center text-sm text-gray-400'>
          © 2022 - FC-PUENTET. ALL RIGHTS RESERVED.
        </p>
      </ContentLayout>
    </footer>
  );
};
