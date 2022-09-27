import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MainLayout } from '@/components/Layout';
import { useEnvironment } from '@/hooks';

const TeamPage: NextPage = () => {
  const router = useRouter();
  const { environment } = useEnvironment();

  useEffect(() => {
    if (environment.isProduction) {
      void router.replace('/');
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/teams'
        title='チーム紹介'
        noindex
      >
        <div></div>
      </MainLayout>
    </motion.div>
  );
};

export default TeamPage;
