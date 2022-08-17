import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MainLayout } from '@/components/Layout';
import { useEnvironment } from '@/hooks';

const PersonalSponsorsPage: NextPage = () => {
  const router = useRouter();
  const { environment } = useEnvironment();

  useEffect(() => {
    if (environment.isProduction) {
      void router.replace('/');
    }
  }, []);

  return (
    <MainLayout>
      <div></div>
    </MainLayout>
  );
};

export default PersonalSponsorsPage;
