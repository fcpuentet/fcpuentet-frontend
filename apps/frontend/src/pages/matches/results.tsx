import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';

const title = '試合結果';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MatchResultsScreenProps {}

const MatchResultsScreen: NextPage<MatchResultsScreenProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/matches/results'
        title={title}
      >
        <ContentLayout className='h-[80vh] pt-32 pb-8'>
          <TitleHeader title={title} />

          <div className='flex h-full flex-col items-center justify-center gap-4'>
            <h2 className='cursor-default'>Coming Soon...</h2>
            <p>こちらのページは現在準備中です。</p>

            <Link
              href='/'
              className='my-8 w-full max-w-xl rounded border border-blue-500 py-4 text-center font-bold text-blue-500 outline-none transition-all duration-100 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-600'
            >
              トップへもどる
            </Link>
          </div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default MatchResultsScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<MatchResultsScreenProps> = () => {
  // TODO: リリース時に遷移可能にする
  return {
    notFound: true,
  };

  return {
    props: {},
  };
};
