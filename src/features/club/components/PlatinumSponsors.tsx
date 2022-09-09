import Link from 'next/link';
import React from 'react';
import { BusinessSponsor } from '@/features/club';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PlatinumSponsorsProps {
  platinumSponsors: BusinessSponsor[];
}

export const PlatinumSponsors: React.FC<PlatinumSponsorsProps> = ({
  platinumSponsors,
}: PlatinumSponsorsProps): JSX.Element => {
  if (platinumSponsors.length === 0) {
    return <></>;
  }

  const platinumSponsorItems = platinumSponsors.map((sponsor) => {
    return (
      <div
        className='w-1/2'
        key={sponsor.id}
      >
        <Link href={sponsor.url}>
          <a target='_blank'>
            <div className='grid h-full w-full place-content-center'>
              <img
                src={sponsor.logoImageUrl}
                alt={sponsor.name}
              />
            </div>
          </a>
        </Link>
      </div>
    );
  });

  return (
    <section className='my-8'>
      <h3 className='mb-4 text-xl font-semibold underline decoration-blue-500 underline-offset-8'>
        プラチナスポンサー
      </h3>
      <div className='flex flex-wrap justify-around py-8'>{platinumSponsorItems}</div>
    </section>
  );
};
