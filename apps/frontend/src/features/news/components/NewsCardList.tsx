import { Icon } from '@/components/Elements/Icon/Icon';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRef } from 'react';
import { News } from '../types';
import { NewsCard } from './NewsCard';

const NEWS_CARD_WIDTH = 300;
const NEWS_CARD_MARGIN_RIGHT = 8;
const MOVE_SCROLL_LEFT = NEWS_CARD_WIDTH + NEWS_CARD_MARGIN_RIGHT;

interface NewsCardProps {
  newsList: Array<News>;
}

export const NewsCardList: React.FC<NewsCardProps> = ({ newsList }) => {
  const newsCardList = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (newsCardList.current === null) return;

    newsCardList.current.scrollLeft -= MOVE_SCROLL_LEFT;
  };

  const handleNextClick = () => {
    if (newsCardList.current === null) return;

    newsCardList.current.scrollLeft += MOVE_SCROLL_LEFT;
  };

  return (
    <>
      <div
        ref={newsCardList}
        className='flex w-screen overflow-scroll scroll-smooth'
      >
        {newsList.map((news) => (
          <div
            key={news.id}
            className='mr-2 w-[300px]'
          >
            <NewsCard news={news} />
          </div>
        ))}
      </div>

      <div className='flex justify-between items-center mt-8 px-4 max-w-[1000px] m-auto'>
        <div className='flex text-secondary font-semibold text-5xl'>
          <Icon
            icon={faArrowLeftLong}
            className='w-12 mr-8 cursor-pointer'
            color='secondary'
            onClick={handlePrevClick}
          />
          <Icon
            icon={faArrowRightLong}
            className='w-12 cursor-pointer'
            color='secondary'
            onClick={handleNextClick}
          />
        </div>

        <Link
          href={'/news'}
          className='text-secondary font-semibold text-2xl border-b-2 border-secondary px-2'
        >
          MORE...
        </Link>
      </div>
    </>
  );
};
