import Link from 'next/link';
import React from 'react';
import { BusinessSponsor } from '@/features/club';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PartnerSponsorsProps {
  partnerSponsors: BusinessSponsor[];
}

export const PartnerSponsors: React.FC<PartnerSponsorsProps> = ({
  partnerSponsors,
}: PartnerSponsorsProps): JSX.Element => {
  if (partnerSponsors.length === 0) {
    return <></>;
  }

  const partnerSponsorItems = partnerSponsors.map((sponsor) => {
    return (
      <div
        className='w-full md:w-[10%]'
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
        パートナースポンサー
      </h3>
      <div className='flex flex-wrap justify-around py-8'>{partnerSponsorItems}</div>
    </section>
  );
};
