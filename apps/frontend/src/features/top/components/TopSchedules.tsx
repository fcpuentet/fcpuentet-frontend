import Link from 'next/link';
import React from 'react';
import { MatchesList } from '@/features/matches/components';
import { Match } from '@/features/matches/types';

interface Props {
  matches: Array<Match>;
}

export const TopSchedules: React.FC<Props> = ({ matches }) => {
  return (
    <>
      <h2 className='text-8xl text-primary/30 md:text-9xl'>Schedule</h2>
      <div className='-mt-12'>
        <h3 className='mb-2 text-5xl'>Matches</h3>
        <MatchesList matches={matches} />

        <div className='mt-4 flex justify-end'>
          <Link
            href={'/matches'}
            className='border-b-2 border-secondary px-2 text-2xl font-semibold text-secondary'
          >
            MORE...
          </Link>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='mb-2 text-5xl'>Standings</h3>
        <img
          src='/assets/image/standings.webp'
          alt='standings'
        />
      </div>

      <div className='mt-8'>
        <h3 className='mb-2 text-5xl'>Events</h3>
        <img
          src='/assets/image/events.webp'
          alt='events'
        />
      </div>
    </>
  );
};
