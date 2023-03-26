import Link from 'next/link';
import React from 'react';
import { BusinessSponsor } from '@/features/club';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SilverSponsorsProps {
  silverSponsors: BusinessSponsor[];
}

export const SilverSponsors: React.FC<SilverSponsorsProps> = ({
  silverSponsors,
}: SilverSponsorsProps): JSX.Element => {
  if (silverSponsors.length === 0) {
    return <></>;
  }

  const silverSponsorItems = silverSponsors.map((sponsor) => {
    return (
      <div
        className='w-full md:w-1/4'
        key={sponsor.id}
      >
        <Link
          href={sponsor.url}
          target='_blank'
        >
          <div className='grid h-full w-full place-content-center'>
            <img
              src={sponsor.logoImageUrl}
              alt={sponsor.name}
            />
          </div>
        </Link>
      </div>
    );
  });

  return (
    <section className='my-8'>
      <h3 className='mb-4 text-xl font-semibold underline decoration-blue-500 underline-offset-8'>
        シルバースポンサー
      </h3>
      <div className='flex flex-wrap justify-around py-8'>{silverSponsorItems}</div>
    </section>
  );
};
