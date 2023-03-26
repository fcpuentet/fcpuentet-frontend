import Link from 'next/link';
import { News } from '../types';
import { formatDate } from '@/utils';

interface NewsCardProps {
  news: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Link
      href={`/news/${news.id}`}
      className='relative block h-[400px] w-[300px] cursor-pointer shadow-xl'
    >
      {/* TODO: DBにサムネイルカラムが追加後に対応 */}
      <img
        src='/gray-scale.svg'
        alt={news.title}
        className='h-[400px] w-[300px] object-cover'
      />
      <div className='absolute bottom-0 flex h-[100px] w-full flex-col justify-between bg-black/50 p-2 text-white backdrop-blur-lg'>
        <p className='line-clamp-2'>{news.title}</p>
        <p className='text-right'>{formatDate(news.updatedAtString)}</p>
      </div>
    </Link>
  );
};
