import { NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { SponsorContact } from '@/features/club';

const title = 'スポンサー紹介';

const BusinessSponsorsPage: NextPage = () => {
  return (
    <MainLayout
      path='/sponsors/business'
      title={title}
      noindex
    >
      <ContentLayout className=' py-8 lg:pt-16'>
        <TitleHeader title={title} />
        <SponsorContact />
      </ContentLayout>
    </MainLayout>
  );
};

export default BusinessSponsorsPage;
