import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import {
  BronzeSponsors,
  BusinessSponsor,
  BusinessSponsorRank,
  BusinessSponsors,
  GoldSponsors,
  MainSponsors,
  PartnerSponsors,
  PlatinumSponsors,
  SilverSponsors,
  SponsorContact,
} from '@/features/club';

const title = 'スポンサー紹介';

interface SponsorsScreenProps {
  business: BusinessSponsors;
}

const SponsorsScreen: NextPage<SponsorsScreenProps> = ({
  business: {
    mainSponsors,
    platinumSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    partnerSponsors,
  },
}) => {
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

export default SponsorsScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<SponsorsScreenProps> = async () => {
  const { data: businessSponsors } = await supabaseClient
    .from('business_sponsors')
    .select('id, name, rank, url, logo_image_url')
    .is('deleted_at', null)
    .order('sort', { ascending: true })
    .order('created_at', { ascending: true });

  /* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access */
  const sponsors =
    businessSponsors?.map<BusinessSponsor>((value): BusinessSponsor => {
      return {
        id: `${value.id}`,
        name: `${value.name}`,
        rank: `${value.rank}` as BusinessSponsorRank,
        url: `${value.url}`,
        logoImageUrl: `${value.logo_image_url}`,
      };
    }) ?? [];
  /* eslint-enable */

  const mainSponsors = sponsors.filter((sponsor) => sponsor.rank === 'main');
  const platinumSponsors = sponsors.filter((sponsor) => sponsor.rank === 'platinum');
  const goldSponsors = sponsors.filter((sponsor) => sponsor.rank === 'gold');
  const silverSponsors = sponsors.filter((sponsor) => sponsor.rank === 'silver');
  const bronzeSponsors = sponsors.filter((sponsor) => sponsor.rank === 'bronze');
  const partnerSponsors = sponsors.filter((sponsor) => sponsor.rank === 'partner');

  return {
    props: {
      business: {
        mainSponsors,
        platinumSponsors,
        goldSponsors,
        silverSponsors,
        bronzeSponsors,
        partnerSponsors,
      },
    },
    revalidate: 30,
  };
};
