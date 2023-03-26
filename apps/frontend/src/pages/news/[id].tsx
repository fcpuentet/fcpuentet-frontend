import { motion } from 'framer-motion';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { NewsContent, News } from '@/features/news';
import { supabase } from '@/utils';

interface NewsContentScreenProps {
  news: News;
}

const NewsContentScreen: NextPage<NewsContentScreenProps> = ({ news }) => {
  const { back } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path={`/news/${news.id}`}
        title={news.title}
      >
        <ContentLayout className='py-8 lg:pt-16'>
          <TitleHeader title='お知らせ' />
          <NewsContent
            className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'
            news={news}
          />
          <div className='mt-8 flex justify-center'>
            <button
              className='flex select-none flex-row items-center gap-4 p-8 text-2xl'
              onClick={() => back()}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='40'
                width='40'
              >
                <path d='M20 33.333 6.667 20 20 6.667l1.958 1.958-10 10h21.375v2.75H11.958l10 10Z' />
              </svg>
              BACK
            </button>
          </div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default NewsContentScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await supabase.from('news').select('id').is('deleted_at', null);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
  const paths = data?.map((row) => `/news/${row.id}`) ?? [];

  return {
    paths,
    fallback: 'blocking',
  };
};

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<NewsContentScreenProps> = async (context) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: entity, error } = await supabase
    .from('news')
    .select('id, created_at, updated_at, title, content')
    .is('deleted_at', null)
    .eq('id', context.params?.id)
    .single();

  if (error || !entity) {
    return {
      notFound: true,
    };
  }

  /* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access */
  const news = {
    id: `${entity.id}`,
    createdAtString: `${entity.created_at}`,
    updatedAtString: `${entity.updated_at}`,
    title: `${entity.title}`,
    content: `${entity.content}`,
  };
  /* eslint-enable */

  return {
    props: {
      news,
    },
    revalidate: 30,
  };
};
