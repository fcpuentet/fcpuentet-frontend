import type { NextPage } from 'next';
import { MainLayout } from '@/components/Layout';
import { TopBanner, TopContact, TopFeeds, TopSocials } from '@/features/top';

const TopScreen: NextPage = () => {
  return (
    <MainLayout>
      <TopBanner />
      <TopFeeds />
      <TopSocials />
      <TopContact />
    </MainLayout>
  );
};

export default TopScreen;
