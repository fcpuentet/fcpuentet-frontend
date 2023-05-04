import clsx from 'clsx';
import { Match } from '../types';
import { formatDate, formatDayOfWeek, formatTime } from '@/utils';

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
    <li className={clsx(isNextMatch && 'bg-primary/20', 'border-b-2 px-2 py-4')}>
      {isNextMatch && (
        <div className='mb-2 w-fit bg-secondary px-2 text-sm text-white'>NEXT MATCH</div>
      )}
      <div className='text-sm text-gray-600'>{match.venue}</div>

      <div className='flex flex-wrap items-end'>
        <div className='mr-6 flex min-w-[180px] items-end'>
          <div className='min-w-[80px]'>
            <span className='text-3xl'>{date}</span>
            <span className='text-1xl ml-2'>{day}</span>
          </div>
          <span className='ml-4 text-3xl'>{gameStartTime}</span>
        </div>

        <div className='mt-1 flex min-w-[300px] items-end'>
          <span className='mr-1 text-2xl'>vs</span>
          <span className='text-3xl'>{match.team}</span>
        </div>
      </div>
    </li>
  );
};
