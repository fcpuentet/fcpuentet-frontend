import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { PlayerCardList } from '@/features/players/components';
import { playersData } from '@/features/players/data';
import { StaffCardList } from '@/features/staffs/components';
import { staffsData } from '@/features/staffs/data';

const title = '選手 / スタッフ紹介';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TeamScreenProps {}

const TeamScreen: NextPage<TeamScreenProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/teams'
        title={title}
      >
        <ContentLayout className='pt-32 pb-8'>
          <TitleHeader title={title} />

          <section className='mt-16'>
            <h3 className='text-5xl font-bold mb-4'>Players</h3>
            <PlayerCardList players={playersData} />
          </section>

          <section className='mt-16'>
            <h3 className='text-5xl font-bold mb-4'>Staffs & MASCOTS</h3>
            <StaffCardList staffs={staffsData} />
          </section>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default TeamScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<TeamScreenProps> = () => {
  return {
    props: {},
  };
};
