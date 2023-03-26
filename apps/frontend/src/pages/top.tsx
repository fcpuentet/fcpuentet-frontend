import { MainLayout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import { TopBanner } from '@/features/top';
import { News, NewsCardList } from '@/features/news';
import { supabase } from '@/utils';

const TOP_NEWS_MAX_COUNT = 10;

interface TopProps {
  topNewsList: Array<News>;
}

const Top: NextPage<TopProps> = ({ topNewsList }) => {
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

        <section className='-mt-52'>
          <NewsCardList newsList={topNewsList} />
        </section>
      </MainLayout>
    </motion.div>
  );
};

export default Top;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<TopProps> = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = await supabase
    .from('news')
    .select('id, created_at, updated_at, title, content')
    .is('deleted_at', null)
    .order('created_at', { ascending: false })
    .limit(TOP_NEWS_MAX_COUNT);

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access */
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
