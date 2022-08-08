import type { NextPage } from 'next';
import { MainLayout } from '@/components/Layout';
import { TopBanner, TopContact, TopFeeds } from '@/features/top';

const TopScreen: NextPage = () => {
  return (
    <MainLayout>
      <TopBanner />
      <TopFeeds />
      <TopContact />
    </MainLayout>
  );
};

export default TopScreen;
