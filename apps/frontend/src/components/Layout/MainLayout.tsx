import NextHeadSeo from 'next-head-seo';
import React, { useState } from 'react';
import { HamburgerMenu } from '../Elements/Header/HamburgerMenu';
import { Footer, Header } from '@/components/Elements';

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
  // ページの絶対パス
  const pageUrl = APP_ROOT_URL + path;
  // OG画像の絶対パス
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  const [isMenuVisible, setMenuVisible] = useState(false);

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
