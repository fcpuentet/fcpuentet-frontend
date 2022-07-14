import { NextPage } from 'next';
import Link from 'next/link';

const NotFoundErrorPage: NextPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-white-900 text-gray-600'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>ページが見つかりませんでした</p>
          <p className='text-base mt-4 mb-8 dark:text-gray-400 md:text-lg'>
            お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
          </p>
          <Link href='/'>
            <a
              rel='noopener noreferrer'
              className='px-8 py-3 font-semibold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150'
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
