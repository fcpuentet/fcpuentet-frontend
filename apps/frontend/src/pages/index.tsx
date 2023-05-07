import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '@/components/Layout';
import { Match } from '@/features/matches/types';
import { News, NewsCardList } from '@/features/news';
import { TopBanner, TopContact, TopSocials } from '@/features/top';
import { TopSchedules } from '@/features/top/components/TopSchedules';
import { supabase } from '@/utils';

const TOP_NEWS_MAX_COUNT = 10;

interface TopScreenProps {
  topNewsList: Array<News>;
  topMatchesList: Array<Match>;
}

const TopScreen: NextPage<TopScreenProps> = ({ topNewsList, topMatchesList }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/'
        title='FC-PUENTET 公式サイト'
        noTitleTemplate
        isTopPage
      >
        <TopBanner />

        <section className='mb-32 mt-8'>
          <NewsCardList newsList={topNewsList} />
        </section>

        <section className='m-auto mb-32 max-w-[1000px] px-4'>
          <TopSchedules matches={topMatchesList} />
        </section>

        <section className='m-auto mb-32 max-w-[1000px] px-4'>
          <TopSocials />
        </section>

        <section className='m-auto mb-32 max-w-[1000px] px-4'>
          <TopContact />
        </section>
      </MainLayout>
    </motion.div>
  );
};

export default TopScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<TopScreenProps> = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: newsData } = await supabase
    .from('news')
    .select('id, created_at, updated_at, title, content')
    .is('deleted_at', null)
    .order('created_at', { ascending: false })
    .limit(TOP_NEWS_MAX_COUNT);

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
  const topNewsList: Array<News> =
    newsData?.map((entity: any) => {
      return {
        id: `${entity.id}`,
        createdAtString: `${entity.created_at}`,
        updatedAtString: `${entity.updated_at}`,
        title: `${entity.title}`,
        content: `${entity.content}`,
      };
    }) ?? [];
  /* eslint-enable */

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: matchesData } = await supabase
    .from('matches')
    .select('id, kicked_off_at, team:team_id(name), locales:locale_id(name)')
    .is('deleted_at', null)
    .order('kicked_off_at', { ascending: true })
    .gt('kicked_off_at', new Date().toISOString())
    .limit(5);

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
  const topMatchesList: Array<Match> =
    matchesData?.map((entity: any) => {
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
      topNewsList,
      topMatchesList,
    },
    revalidate: 10,
  };
};
