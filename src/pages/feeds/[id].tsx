import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { useFeed } from '@/features/feed';

const FeedScreen: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { feed } = useFeed(id);

  return (
    <MainLayout>
      <ContentLayout>{feed && <div>{feed.title}</div>}</ContentLayout>
    </MainLayout>
  );
};

export default FeedScreen;
