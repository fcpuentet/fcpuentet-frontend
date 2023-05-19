import { BusinessSponsorRank } from '@/features/club/types';

export interface Sponsor {
  id: string;
  name: string;
  url: string;
}

export interface BusinessSponsor extends Sponsor {
  rank: BusinessSponsorRank;
  logoImageUrl: string;
}

export interface BusinessSponsors {
  mainSponsors: BusinessSponsor[];
  platinumSponsors: BusinessSponsor[];
  goldSponsors: BusinessSponsor[];
  silverSponsors: BusinessSponsor[];
  bronzeSponsors: BusinessSponsor[];
  partnerSponsors: BusinessSponsor[];
  supplierSponsors: BusinessSponsor[];
}
