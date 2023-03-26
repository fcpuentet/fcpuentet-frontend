import { formatDate } from '@/utils';
import { useRouter } from 'next/router';
import { News } from '../types';

interface NewsCardProps {
  news: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/news/${news.id}`)}
      className='w-[300px] h-[400px] relative shadow-xl cursor-pointer'
    >
      {/* TODO: DBにサムネイルカラムが追加後に対応 */}
      <img
        src='/gray-scale.svg'
        alt={news.title}
        className='object-cover w-[300px] h-[400px]'
      />
      <div className='h-[100px] bg-black/50 backdrop-blur-lg absolute bottom-0 w-full flex flex-col justify-between p-2 text-white'>
        <p>{news.title}</p>
        <p className='text-right'>{formatDate(news.updatedAtString)}</p>
      </div>
    </div>
  );
};
