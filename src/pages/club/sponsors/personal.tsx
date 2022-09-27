import { motion } from 'framer-motion';
import { NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { SponsorContact } from '@/features/club';

const title = 'スポンサー紹介';

const PersonalSponsorsPage: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/sponsors/personal'
        title={title}
        noindex
      >
        <ContentLayout className=' py-8 lg:pt-16'>
          <TitleHeader title={title} />
          <SponsorContact />
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default PersonalSponsorsPage;
