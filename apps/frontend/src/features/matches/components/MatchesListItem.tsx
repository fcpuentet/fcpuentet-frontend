import clsx from 'clsx';
import { formatDate, formatDayOfWeek, formatTime } from '@/utils';
import { Match } from '../types';

interface MatchesListItemProps {
  match: Match;
  isNextMatch?: boolean;
}

export const MatchesListItem: React.FC<MatchesListItemProps> = ({
  match,
  isNextMatch,
}: MatchesListItemProps) => {
  const date = formatDate(match.kickedOffAt, 'M/D');
  const day = formatDayOfWeek(match.kickedOffAt);
  const gameStartTime = formatTime(match.kickedOffAt);

  return (
    <li className={clsx(isNextMatch && 'bg-primary/20', 'py-4 px-2 border-b-2')}>
      {isNextMatch && (
        <div className='mb-2 px-2 bg-secondary text-white text-sm w-fit'>NEXT MATCH</div>
      )}
      <div className='text-sm text-gray-600'>{match.venue}</div>

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
          <span className='text-3xl'>{match.team}</span>
        </div>
      </div>
    </li>
  );
};
