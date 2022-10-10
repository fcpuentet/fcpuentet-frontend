import { SupporterRank } from '@/features/club/types';

export interface Supporter {
  id: string;
  name: string;
  url: string | null;
  iconImageUrl: string | null;
  rank: SupporterRank;
}

export interface Supporters {
  kingSupporters: Supporter[];
  queenSupporters: Supporter[];
  jackSupporters: Supporter[];
  jokerSupporters: Supporter[];
}
