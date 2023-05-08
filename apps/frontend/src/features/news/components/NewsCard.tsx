import Image from 'next/image';
import Link from 'next/link';
import { News } from '../types';
import { formatDate } from '@/utils';

interface NewsCardProps {
  news: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Link
      href={`/news/${news.slug}`}
      className='relative block h-[400px] w-[300px] cursor-pointer shadow-xl'
    >
      {news.coverImage ? (
        <Image
          src={news.coverImage.src}
          alt={news.coverImage.fileName}
          width={news.coverImage.width}
          height={news.coverImage.height}
          className='h-[400px] w-[300px] object-cover'
        />
      ) : (
        <Image
          src='/gray-scale.svg'
          alt='empty'
          width={300}
          height={400}
          className='h-[400px] w-[300px] object-cover'
        />
      )}
      <div className='absolute bottom-0 flex h-[100px] w-full flex-col justify-between bg-black/50 p-2 text-white backdrop-blur-lg'>
        <p className='line-clamp-2'>{news.title}</p>
        <p className='text-right'>{formatDate(news.updatedAtString)}</p>
      </div>
    </Link>
  );
};
