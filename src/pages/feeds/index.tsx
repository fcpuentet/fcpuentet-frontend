import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { useFeeds } from '@/features/feed';
import { TopFeedContent } from '@/features/top';

const FeedsScreen: NextPage = () => {
  const { push } = useRouter();
  const {
    query: { id },
  } = useRouter();
  const { feeds } = useFeeds();

  const feedItems = feeds?.map((feed) => (
    <TopFeedContent
      key={feed.id}
      feed={feed}
      onClick={() => void push(`/feeds/${feed.id}`)}
    />
  ));

  return (
    <MainLayout>
      <ContentLayout>{feedItems}</ContentLayout>
    </MainLayout>
  );
};

export default FeedsScreen;
