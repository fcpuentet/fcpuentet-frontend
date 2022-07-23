import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Footer, Header } from '../Elements';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ title, children }: Props) => {
  const titleText = title ? `${title} | FC PUENTET 公式サイト` : 'FC PUENTET 公式サイト';

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

      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
        <Header />

        <div className='flex flex-col justify-between'>
          <main className='mb-auto'>{children}</main>
        </div>

        <Footer />
      </div>
    </>
  );
};
