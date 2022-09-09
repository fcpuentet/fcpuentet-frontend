import { NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import {
  BronzeSponsors,
  GoldSponsors,
  MainSponsors,
  PartnerSponsors,
  PlatinumSponsors,
  SilverSponsors,
  SponsorContact,
  useBusinessSponsors,
} from '@/features/club';

const title = 'スポンサー紹介';

const SponsorsPage: NextPage = () => {
  const {
    mainSponsors,
    platinumSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    partnerSponsors,
  } = useBusinessSponsors();

  return (
    <MainLayout
      path='/sponsors'
      title={title}
    >
      <ContentLayout className='py-8 lg:pt-16'>
        <TitleHeader title={title} />
        <div className='my-8 md:my-16'>
          <MainSponsors mainSponsors={mainSponsors} />
          <PlatinumSponsors platinumSponsors={platinumSponsors} />
          <GoldSponsors goldSponsors={goldSponsors} />
          <SilverSponsors silverSponsors={silverSponsors} />
          <BronzeSponsors bronzeSponsors={bronzeSponsors} />
          <PartnerSponsors partnerSponsors={partnerSponsors} />
          <SponsorContact />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default SponsorsPage;
