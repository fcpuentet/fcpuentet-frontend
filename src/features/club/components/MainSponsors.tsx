import Link from 'next/link';
import React from 'react';
import { BusinessSponsor } from '@/features/club';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainSponsorsProps {
  mainSponsors: BusinessSponsor[];
}

export const MainSponsors: React.FC<MainSponsorsProps> = ({
  mainSponsors,
}: MainSponsorsProps): JSX.Element => {
  if (mainSponsors.length === 0) {
    return <></>;
  }

  const mainSponsorItems = mainSponsors.map((sponsor) => {
    return (
      <div
        className='w-full'
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
        メインスポンサー
      </h3>
      <div className='flex flex-wrap justify-around py-8'>{mainSponsorItems}</div>
    </section>
  );
};
