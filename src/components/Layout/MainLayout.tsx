import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Footer, Header } from '@/components/Elements';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ title, children }: Props) => {
  const titleText = title ? `${title} | FC PUENTET 公式サイト` : 'FC PUENTET 公式サイト';

  const [isMenuVisible, setMenuVisible] = useState(false);

  const onToggleMenuVisibleButtonClick = () => setMenuVisible(!isMenuVisible);
  const menuIconPath = isMenuVisible ? (
    // NOTE: Close
    <path d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z' />
  ) : (
    // NOTE: Menu
    <path d='M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z' />
  );

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta
          name='description'
          content='サッカー Puentet 公式サイトです。最新のニュース、試合情報、所属選手・スタッフ紹介やチケット/グッズ購入、スタジアムへのアクセス、ホームタウン活動など役立つ情報を日々お届けしています。'
        />
        <meta
          name='keywords'
          content='Puentet,サッカー'
        />
        <meta
          name='robots'
          content='noindex'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <div className='mx-0 my-auto w-full'>
        <div className='h-full'>
          <div className='invisible fixed top-0 right-0 h-full w-16 bg-white lg:visible'>
            <div className='flex h-full flex-col items-center justify-center'>
              <button
                className='h-full w-full select-none text-sm'
                onClick={(event) => onToggleMenuVisibleButtonClick()}
              >
                <svg
                  className='m-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  height='48'
                  width='48'
                >
                  {menuIconPath}
                </svg>
                Menu
              </button>
              <div className='w-full'>
                <p
                  className='mx-auto cursor-default select-none py-4 text-2xl text-gray-500'
                  style={{ writingMode: 'vertical-lr' }}
                >
                  Share
                </p>

                <Link href='https://twitter.com/intent/tweet?text=%E5%85%A8%E3%81%A6%E3%81%AE%E6%9E%B6%E3%81%91%E6%A9%8B%E3%81%B8%E3%80%8CFC-PUENTET%E3%80%8D%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88%EF%BC%9Ahttps%3A%2F%2Ffc-puentet.com%2F%20'>
                  <a
                    target='_blank'
                    className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                  >
                    <svg
                      className='mx-auto my-4 h-8 w-8'
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
                    className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                  >
                    <svg
                      className='mx-auto my-4 h-8 w-8'
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
              </div>
            </div>
          </div>

          <div className='lg:pr-16'>
            <div className='fixed right-0 bg-white/50 lg:hidden'>
              <button
                className='select-none px-4 py-2 text-sm'
                onClick={(event) => onToggleMenuVisibleButtonClick()}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='48'
                  width='48'
                >
                  <path d='M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z' />
                </svg>
                Menu
              </button>
            </div>

            <div
              className={`fixed inset-x-0 min-h-screen overflow-auto overscroll-y-contain bg-white/50 backdrop-blur-lg lg:right-16 ${
                isMenuVisible ? 'visible' : 'invisible'
              }`}
            >
              <div className='block text-right lg:hidden'>
                <button
                  className='select-none p-4'
                  onClick={(event) => onToggleMenuVisibleButtonClick()}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='48'
                    width='48'
                  >
                    <path d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z' />
                  </svg>
                </button>
              </div>
              <Header />
            </div>

            <div>
              <main className=''>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
