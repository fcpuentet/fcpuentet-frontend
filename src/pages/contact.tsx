import type { NextPage } from 'next';
import React from 'react';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { ContactForm, ContactHeader } from '@/features/contact';

const ContactScreen: NextPage = () => {
  return (
    <MainLayout>
      <ContentLayout className='py-8 lg:pt-16'>
        <ContactHeader />
        <div className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'>
          <ContactForm />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default ContactScreen;
