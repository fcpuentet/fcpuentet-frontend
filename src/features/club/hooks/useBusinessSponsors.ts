import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { BusinessSponsor, BusinessSponsorRank } from '@/features/club';

interface BusinessSponsors {
  mainSponsors: BusinessSponsor[];
  platinumSponsors: BusinessSponsor[];
  goldSponsors: BusinessSponsor[];
  silverSponsors: BusinessSponsor[];
  bronzeSponsors: BusinessSponsor[];
  partnerSponsors: BusinessSponsor[];
}

export const useBusinessSponsors = (): BusinessSponsors => {
  const [mainSponsors, setMainSponsors] = useState<BusinessSponsor[]>([]);
  const [platinumSponsors, setPlatinumSponsors] = useState<BusinessSponsor[]>([]);
  const [goldSponsors, setGoldSponsors] = useState<BusinessSponsor[]>([]);
  const [silverSponsors, setSilverSponsors] = useState<BusinessSponsor[]>([]);
  const [bronzeSponsors, setBronzeSponsors] = useState<BusinessSponsor[]>([]);
  const [partnerSponsors, setPartnerSponsors] = useState<BusinessSponsor[]>([]);

  useEffect(() => {
    void (async function () {
      try {
        const { data: businessSponsors, error } = await supabaseClient
          .from('business_sponsors')
          .select('id, name, rank, url, logo_image_url')
          .is('deleted_at', null)
          .order('sort', { ascending: true })
          .order('created_at', { ascending: true });

        if (error) {
          return;
        }

        /* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access */
        const sponsors = businessSponsors?.map<BusinessSponsor>((value): BusinessSponsor => {
          return {
            id: `${value.id}`,
            name: `${value.name}`,
            rank: `${value.rank}` as BusinessSponsorRank,
            url: `${value.url}`,
            logoImageUrl: `${value.logo_image_url}`,
          };
        });
        /* eslint-enable */

        setMainSponsors(sponsors.filter((sponsor) => sponsor.rank === 'main'));
        setPlatinumSponsors(sponsors.filter((sponsor) => sponsor.rank === 'platinum'));
        setGoldSponsors(sponsors.filter((sponsor) => sponsor.rank === 'gold'));
        setSilverSponsors(sponsors.filter((sponsor) => sponsor.rank === 'silver'));
        setBronzeSponsors(sponsors.filter((sponsor) => sponsor.rank === 'bronze'));
        setPartnerSponsors(sponsors.filter((sponsor) => sponsor.rank === 'partner'));

        // eslint-disable-next-line no-empty
      } catch {
        // eslint-disable-next-line no-empty
      } finally {
      }
    })();
  }, []);

  return {
    mainSponsors,
    platinumSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    partnerSponsors,
  };
};
