import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { useFeeds, FeedListContent } from '@/features/feed';

const title = 'お知らせ';

const FeedsScreen: NextPage = () => {
  const { push } = useRouter();
  const { feeds } = useFeeds();

  const feedItems = feeds?.map((feed) => (
    <FeedListContent
      key={feed.id}
      feed={feed}
      onClick={() => void push(`/feeds/${feed.id}`)}
    />
  ));

  return (
    <MainLayout
      path='/feeds'
      title={title}
    >
      <ContentLayout className='py-8 lg:pt-16'>
        <TitleHeader title={title} />
        <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>{feedItems}</div>
      </ContentLayout>
    </MainLayout>
  );
};

export default FeedsScreen;
