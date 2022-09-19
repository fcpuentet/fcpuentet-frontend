import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Footer, Header } from '@/components/Elements';

const APP_NAME = 'FC PUENTET 公式サイト';
const APP_ROOT_URL = 'https://fc-puentet.com';
const APP_DEFAULT_DESCRIPTION =
  '社会人サッカーチーム FC PUENTET 公式サイトです。最新のニュース、試合情報、所属選手・スタッフ紹介やチケット/グッズ購入、吉川・越谷・三郷のホームタウン活動など役立つ情報を日々お届けしています。';
const APP_DEFAULT_OG_IMAGE_PATH = '/emblem.webp';

type Props = {
  path: string;
  title: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
  isTopPage?: boolean;
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({
  path,
  title,
  description = APP_DEFAULT_DESCRIPTION,
  ogImagePath = APP_DEFAULT_OG_IMAGE_PATH,
  noindex,
  noTitleTemplate,
  isTopPage,
  children,
}: Props): JSX.Element => {
  const { route } = useRouter();
  const encodedCurrentUrl = encodeURI(`https://fc-puentet.com${route}`);
  const tweetShareUrl = `https://twitter.com/intent/tweet?text=%E5%85%A8%E3%81%A6%E3%81%AE%E6%9E%B6%E3%81%91%E6%A9%8B%E3%81%B8%E3%80%8CFC-PUENTET%E3%80%8D%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88%EF%BC%9A${encodedCurrentUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedCurrentUrl}`;

  // ページの絶対パス
  const pageUrl = APP_ROOT_URL + path;
  // OG画像の絶対パス
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

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
      <NextHeadSeo
        title={noTitleTemplate ? title : `${title} - ${APP_NAME}`}
        canonical={pageUrl}
        description={description}
        robots={noindex ? 'noindex, nofollow' : undefined}
        og={{
          title,
          description,
          url: pageUrl,
          image: ogImageUrl,
          type: isTopPage ? 'website' : 'article',
          siteName: APP_NAME,
        }}
        twitter={{
          card: 'summary_large_image',
        }}
        customLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />

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

                <Link href={tweetShareUrl}>
                  <a
                    target='_blank'
                    className='text-gray-400 duration-100 hover:text-gray-500 active:text-gray-600'
                  >
                    <svg
                      className='mx-auto my-4 h-8 w-8 transition-all'
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

                <Link href={facebookShareUrl}>
                  <a
                    target='_blank'
                    className='text-gray-400 duration-100 hover:text-gray-500 active:text-gray-600'
                  >
                    <svg
                      className='mx-auto my-4 h-8 w-8 transition-all'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
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
              className={`fixed inset-x-0 min-h-screen select-none overflow-auto overscroll-y-contain bg-white/50 backdrop-blur-lg lg:right-16 ${
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
