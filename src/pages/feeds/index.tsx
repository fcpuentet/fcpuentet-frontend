import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { FeedHeader, useFeeds } from '@/features/feed';
import { TopFeedContent } from '@/features/top';

const FeedsScreen: NextPage = () => {
  const { push } = useRouter();
  const { feeds } = useFeeds();

  const feedItems = feeds?.map((feed) => (
    <TopFeedContent
      key={feed.id}
      feed={feed}
      onClick={() => void push(`/feeds/${feed.id}`)}
    />
  ));

  return (
    <MainLayout
      path='/feeds'
      title='お知らせ'
    >
      <ContentLayout className='py-8 lg:pt-16'>
        <FeedHeader />
        <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>{feedItems}</div>
      </ContentLayout>
    </MainLayout>
  );
};

export default FeedsScreen;
