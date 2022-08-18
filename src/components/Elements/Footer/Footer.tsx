import { ContentLayout } from '@/components/Layout';

export const Footer = (): JSX.Element => {
  return (
    <footer className='mx-auto max-w-screen-2xl bg-white pt-4 sm:pt-10 lg:pt-12'>
      <div className='border-t'>
        <ContentLayout className='py-8'>
          <p className='text-center text-sm text-gray-400'>
            © 2022 - FC-PUENTET. ALL RIGHTS RESERVED.
          </p>
        </ContentLayout>
      </div>
    </footer>
  );
};
