import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../components/Layout';
import { TopBanner } from '@/features/top';

const TopScreen: NextPage = () => {
  return (
    <MainLayout>
      <TopBanner />
    </MainLayout>
  );
};

export default TopScreen;
