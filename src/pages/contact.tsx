import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { ContactForm } from '@/features/contact';

const title = 'お問い合わせ';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactScreenProps {}

const ContactScreen: NextPage<ContactScreenProps> = () => {
  const {
    query: { category },
  } = useRouter();

  return (
    <MainLayout
      path='/contact'
      title={title}
    >
      <ContentLayout className='py-8 lg:pt-16'>
        <TitleHeader title={title} />
        <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>
          <ContactForm category={category} />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default ContactScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<ContactScreenProps> = () => {
  return {
    props: {},
  };
};
