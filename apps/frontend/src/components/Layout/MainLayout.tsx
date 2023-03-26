import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Footer, Header } from '@/components/Elements';
import { HamburgerMenu } from '../Elements/Header/HamburgerMenu';

const APP_NAME = 'FC PUENTET 公式サイト';
const APP_ROOT_URL = 'https://fc-puentet.com';
const APP_DEFAULT_DESCRIPTION =
  '吉川・越谷・三郷の社会人サッカーチーム FC PUENTET（プエンテット） 公式サイトです。最新のニュース、試合情報、所属選手・スタッフ紹介やチケット/グッズ購入、ホームタウン活動など役立つ情報を日々お届けしています。';
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
            href: 'favicons/favicon.ico',
          },
        ]}
      />

      <div className='mx-0 my-auto w-full'>
        {isMenuVisible && <HamburgerMenu onClose={() => setMenuVisible(false)} />}
        <Header onClick={() => setMenuVisible(true)} />
        <main className=''>{children}</main>
        <Footer />
      </div>
    </>
  );
};
