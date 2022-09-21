import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { MainLayout } from '@/components/Layout';
import { News } from '@/features/feed';
import { TopBanner, TopContact, TopFeeds, TopSocials } from '@/features/top';

const TOP_NEWS_MAX_COUNT = 3;

interface TopScreenProps {
  topNewsList: Array<News>;
}

const TopScreen: NextPage<TopScreenProps> = ({ topNewsList }) => {
  return (
    <MainLayout
      path='/'
      title='FC-PUENTET 公式サイト'
      noTitleTemplate
      isTopPage
    >
      <TopBanner />
      <TopFeeds newsList={topNewsList} />
      <TopSocials />
      <TopContact />
    </MainLayout>
  );
};

export default TopScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<TopScreenProps> = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = await supabaseClient
    .from('feeds')
    .select('id, created_at, updated_at, title, body')
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
        body: `${entity.body}`,
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
