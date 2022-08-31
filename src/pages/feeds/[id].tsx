import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { FeedContent, FeedHeader } from '@/features/feed';

const FeedScreen: NextPage = () => {
  const {
    query: { id },
    back,
  } = useRouter();

  return (
    <MainLayout
      path={typeof id === 'string' ? `/feeds/${id}` : '/feeds'}
      title='お知らせ'
      noindex
    >
      <ContentLayout className='py-8 lg:pt-16'>
        <FeedHeader />
        <FeedContent
          className='pt-12 lg:px-8 lg:pb-8 lg:pt-24'
          feedId={id}
        />
        <div className='mt-8 flex justify-center'>
          <button
            className='flex select-none flex-row items-center gap-4 p-8 text-2xl'
            onClick={() => back()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='40'
              width='40'
            >
              <path d='M20 33.333 6.667 20 20 6.667l1.958 1.958-10 10h21.375v2.75H11.958l10 10Z' />
            </svg>
            BACK
          </button>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default FeedScreen;
