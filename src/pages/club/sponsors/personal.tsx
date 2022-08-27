import { NextPage } from 'next';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { SponsorContact, SponsorHeader } from '@/features/club';

const PersonalSponsorsPage: NextPage = () => {
  return (
    <MainLayout>
      <ContentLayout className=' py-8 lg:pt-16'>
        <SponsorHeader title='個人スポンサー紹介' />
        <SponsorContact />
      </ContentLayout>
    </MainLayout>
  );
};

export default PersonalSponsorsPage;
