import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { MatchesList } from '@/features/matches/components';
import { Match } from '@/features/matches/types';
import { supabase } from '@/utils';

const title = '試合日程';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MatchesScreenProps {
  matches: Match[];
}

const MatchesScreen: NextPage<MatchesScreenProps> = ({ matches }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/matches'
        title={title}
      >
        <ContentLayout className='pb-8 pt-32 leading-loose'>
          <TitleHeader title={title} />
          <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>
            {/* TODO: 2024, 2023, 2022, 2021を動的に取得する */}
            {/* <MatchesSeasonFilter
              seasons={['2024', '2023', '2022', '2021']}
              classNames='mb-4'
            /> */}
            <MatchesList matches={matches} />
          </div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

// noinspection JSUnusedGlobalSymbols
export default MatchesScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<any> = async () => {
  const { data } = await supabase
    .from('matches')
    .select('id, kicked_off_at, team:team_id(name), locales:locale_id(name)')
    .is('deleted_at', null)
    .order('kicked_off_at', { ascending: true });

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
  const matches: Array<Match> =
    data?.map((entity: any) => {
      return {
        id: `${entity.id}`,
        kickedOffAt: `${entity.kicked_off_at}`,
        team: `${entity.team.name}`,
        venue: `${entity.locales.name}`,
      };
    }) ?? [];
  /* eslint-enable */

  return {
    props: {
      matches,
    },
    revalidate: 10,
  };
};
