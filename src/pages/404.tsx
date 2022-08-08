import { NextPage } from 'next';
import Link from 'next/link';

const NotFoundErrorPage: NextPage = () => {
  return (
    <section className='flex h-screen items-center p-16 text-gray-600'>
      <div className='container mx-auto my-8 flex flex-col items-center justify-center px-5'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 text-9xl font-extrabold dark:text-gray-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>ページが見つかりませんでした</p>
          <p className='mt-4 mb-8 text-base dark:text-gray-400 md:text-lg'>
            お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
          </p>
          <Link href='/'>
            <a
              rel='noopener noreferrer'
              className='rounded border border-blue-500 px-8 py-3 px-8 py-3 font-bold uppercase text-blue-500 outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-600'
            >
              トップへ戻る
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundErrorPage;
