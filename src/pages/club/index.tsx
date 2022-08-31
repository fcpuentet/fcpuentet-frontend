import { NextPage } from 'next';
import { ContentLayout, MainLayout } from '@/components/Layout';
import {
  ClubCharacters,
  ClubHeader,
  ClubHomeTown,
  ClubLogo,
  ClubSlogan,
  ClubSocial,
  ClubSponsors,
  ClubSummary,
} from '@/features/club';

const ClubPage: NextPage = () => {
  return (
    <MainLayout
      path='/club'
      title='クラブ紹介'
    >
      <ContentLayout className=' py-8 lg:pt-16'>
        <ClubHeader />
        <div className='mx-auto flex flex-col gap-4 md:max-w-4xl md:gap-12'>
          <ClubSummary />
          <ClubSocial />
          <ClubLogo />
          <ClubSlogan />
          <ClubCharacters />
          <ClubHomeTown />
          <ClubSponsors />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default ClubPage;
