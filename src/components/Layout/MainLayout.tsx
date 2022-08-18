import Head from 'next/head';
import React, { useState } from 'react';
import { Footer } from '../Elements';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ title, children }: Props) => {
  const titleText = title ? `${title} | FC PUENTET 公式サイト` : 'FC PUENTET 公式サイト';

  const [isMenuVisible, setMenuVisible] = useState(false);

  const onOpenMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMenuVisible(true);
  };

  const onCloseMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMenuVisible(false);
  };

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
        <div className=''>
          {/*<Header />*/}

          <div className='h-full'>
            <div className='invisible fixed top-0 right-0 h-full w-16 bg-white lg:visible'>
              <div className='flex h-full items-center justify-center'>
                <button
                  className='h-full w-full'
                  onClick={(event) => onOpenMenuButtonClick(event)}
                >
                  <svg
                    className='m-auto'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='48px'
                    height='48px'
                  >
                    <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`fixed z-10 min-h-screen w-full overscroll-y-contain bg-white/50 backdrop-blur-lg ${
                isMenuVisible ? 'visible' : 'invisible'
              }`}
            >
              <button
                className='p-12 text-4xl'
                onClick={(event) => onCloseMenuButtonClick(event)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                  width='48px'
                  height='48px'
                >
                  <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
                </svg>
              </button>
              <header></header>
            </div>

            <div className='lg:pr-16'>
              <main className=''>{children}</main>
            </div>

            <div className='lg:pr-16'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
