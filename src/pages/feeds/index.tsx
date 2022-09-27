import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { FeedListContent, News } from '@/features/feed';

const title = 'お知らせ';

interface FeedListScreenProps {
  newsList: Array<News>;
}

const FeedListScreen: NextPage<FeedListScreenProps> = ({ newsList }) => {
  const feedItems = newsList.map((news) => (
    <FeedListContent
      key={news.id}
      news={news}
    />
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/feeds'
        title={title}
      >
        <ContentLayout className='py-8 lg:pt-16'>
          <TitleHeader title={title} />
          <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>{feedItems}</div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default FeedListScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<FeedListScreenProps> = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = await supabaseClient
    .from('feeds')
    .select('id, created_at, updated_at, title, body')
    .is('deleted_at', null)
    .order('created_at', { ascending: false });

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access */
  const newsList: Array<News> =
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
      newsList,
    },
    revalidate: 30,
  };
};
