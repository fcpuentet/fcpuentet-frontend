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
