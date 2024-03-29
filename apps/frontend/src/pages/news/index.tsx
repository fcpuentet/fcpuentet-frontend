import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { NewsListContent, News } from '@/features/news';
import { supabase } from '@/utils';

const title = 'お知らせ';

interface NewsListScreenProps {
  newsList: Array<News>;
}

const NewsListScreen: NextPage<NewsListScreenProps> = ({ newsList }) => {
  const newsItems = newsList.map((news) => (
    <NewsListContent
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
        path='/news'
        title={title}
      >
        <ContentLayout className='pt-32 pb-8'>
          <TitleHeader title={title} />
          <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>{newsItems}</div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default NewsListScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<NewsListScreenProps> = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = await supabase
    .from('news')
    .select(
      'id, created_at, updated_at, title, content, assets:cover_image_asset_id(src, file_name, height, width), slug',
    )
    .is('deleted_at', null)
    .order('created_at', { ascending: false });

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
  const newsList: Array<News> =
    data?.map((entity: any) => {
      return {
        id: `${entity.id}`,
        createdAtString: `${entity.created_at}`,
        updatedAtString: `${entity.updated_at}`,
        title: `${entity.title}`,
        content: `${entity.content}`,
        slug: `${entity.slug}`,
        coverImage: entity.assets && {
          src: `${entity.assets.src}`,
          fileName: `${entity.assets.file_name}`,
          height: entity.assets.height,
          width: entity.assets.width,
        },
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
