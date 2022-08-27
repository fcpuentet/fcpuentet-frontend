import { NextPage } from 'next';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { SponsorContact, SponsorHeader } from '@/features/club';

const SponsorsPage: NextPage = () => {
  return (
    <MainLayout>
      <ContentLayout className=' py-8 lg:pt-16'>
        <SponsorHeader title='スポンサー紹介' />
        <SponsorContact />
      </ContentLayout>
    </MainLayout>
  );
};

export default SponsorsPage;
