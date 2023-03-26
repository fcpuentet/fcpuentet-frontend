import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '@/components/Layout';
import { News, NewsCardList } from '@/features/news';
import { TopBanner, TopContact, TopSocials } from '@/features/top';
import { supabase } from '@/utils';

const TOP_NEWS_MAX_COUNT = 10;

interface TopScreenProps {
  topNewsList: Array<News>;
}

const TopScreen: NextPage<TopScreenProps> = ({ topNewsList }) => {
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

        <section className='-mt-52 mb-32'>
          <NewsCardList newsList={topNewsList} />
        </section>

        <section className='m-auto mb-32 max-w-[1000px] px-6 sm:px-4'>
          <TopSocials />
        </section>

        <section className='m-auto mb-32 max-w-[1000px] px-6 sm:px-4'>
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
  const { data } = await supabase
    .from('news')
    .select('id, created_at, updated_at, title, content')
    .is('deleted_at', null)
    .order('created_at', { ascending: false })
    .limit(TOP_NEWS_MAX_COUNT);

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
  const topNewsList: Array<News> =
    data?.map((entity: any) => {
      return {
        id: `${entity.id}`,
        createdAtString: `${entity.created_at}`,
        updatedAtString: `${entity.updated_at}`,
        title: `${entity.title}`,
        content: `${entity.content}`,
      };
    }) ?? [];
  /* eslint-enable */

  return {
    props: {
      topNewsList,
    },
    revalidate: 10,
  };
};
