import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { MatchesSeasonFilter, MatchesList } from '@/features/matches/components';
import { matchData } from '@/features/matches/data';

const title = '試合日程';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MatchesScreenProps {}

const MatchesScreen: NextPage<MatchesScreenProps> = () => {
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
        <ContentLayout className='pt-32 pb-8 leading-loose'>
          <TitleHeader title={title} />
          <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>
            {/* // TODO: 2024, 2023, 2022, 2021を動的に取得する */}
            <MatchesSeasonFilter
              seasons={['2024', '2023', '2022', '2021']}
              classNames='mb-4'
            />
            <MatchesList matchesData={matchData} />
          </div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

// noinspection JSUnusedGlobalSymbols
export default MatchesScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<MatchesScreenProps> = () => {
  return {
    props: {},
    revalidate: 10,
  };
};
