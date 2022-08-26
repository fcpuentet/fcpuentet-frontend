import { NextPage } from 'next';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { ClubHeader, ClubSocial, ClubSummary } from '@/features/club';

const ClubPage: NextPage = () => {
  return (
    <MainLayout>
      <ContentLayout className=' py-8 lg:pt-16'>
        <ClubHeader />
        <div className='mx-auto flex flex-col gap-4 lg:max-w-3xl'>
          <ClubSummary />
          <ClubSocial />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default ClubPage;
