import clsx from 'clsx';
import { MatchData } from '../data';
import { formatDate, formatDayOfWeek, formatTime } from '@/utils';

interface MatchesListItemProps {
  matchData: MatchData;
  isNextMatch?: boolean;
}

export const MatchesListItem: React.FC<MatchesListItemProps> = ({
  matchData,
  isNextMatch,
}: MatchesListItemProps) => {
  const date = formatDate(matchData.matchDate, 'M/D');
  const day = formatDayOfWeek(matchData.matchDate);
  const gameStartTime = formatTime(matchData.matchDate);

  return (
    <li className={clsx(isNextMatch && 'bg-primary/20', 'py-4 px-2 border-b-2')}>
      <div className='text-sm text-gray-600'>{matchData.matchVenue}</div>

      <div className='flex flex-wrap items-end'>
        <div className='mr-6 flex items-end min-w-[180px]'>
          <div className='min-w-[80px]'>
            <span className='text-3xl'>{date}</span>
            <span className='text-1xl ml-2'>{day}</span>
          </div>
          <span className='text-3xl ml-4'>{gameStartTime}</span>
        </div>

        <div className='flex items-end min-w-[300px] mt-1'>
          <span className='text-2xl mr-1'>vs</span>
          <span className='text-3xl'>{matchData.team}</span>
        </div>
      </div>
    </li>
  );
};
