import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import {
  ClubCharacters,
  ClubHomeTown,
  ClubLogo,
  ClubSlogan,
  ClubSocial,
  ClubSponsors,
  ClubSummary,
} from '@/features/club';

const title = 'クラブ紹介';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ClubScreenProps {}

const ClubScreen: NextPage = () => {
  return (
    <MainLayout
      path='/club'
      title={title}
    >
      <ContentLayout className=' py-8 lg:pt-16'>
        <TitleHeader title={title} />
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

export default ClubScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<ClubScreenProps> = () => {
  return {
    props: {},
  };
};
