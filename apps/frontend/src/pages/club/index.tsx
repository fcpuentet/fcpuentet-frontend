import { motion, Variants } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import {
  ClubCharacters,
  ClubHomeTown,
  ClubLogo,
  ClubSlogan,
  ClubSocial,
  ClubSponsors,
  ClubSummary,
} from '@/features/club';

const title = 'クラブ紹介';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ClubScreenProps {}

const variants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ClubScreen: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/club'
        title={title}
      >
        <ContentLayout className='pt-32 pb-8'>
          <TitleHeader title={title} />
          <div className='mx-auto flex flex-col gap-4 md:max-w-4xl md:gap-12'>
            <motion.div
              variants={variants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
            >
              <ClubSummary />
            </motion.div>

            <motion.div
              variants={variants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
            >
              <ClubSocial />
            </motion.div>

            <motion.div
              variants={variants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
            >
              <ClubLogo />
            </motion.div>

            <motion.div
              variants={variants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
            >
              <ClubSlogan />
            </motion.div>

            <motion.div
              variants={variants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
            >
              <ClubCharacters />
            </motion.div>

            <motion.div
              variants={variants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
            >
              <ClubHomeTown />
            </motion.div>

            <motion.div
              variants={variants}
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0 }}
            >
              <ClubSponsors />
            </motion.div>
          </div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default ClubScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<ClubScreenProps> = () => {
  return {
    props: {},
  };
};
