import Link from 'next/link';
import React from 'react';
import { BusinessSponsor } from '@/features/club';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SupplierSponsorsProps {
  supplierSponsors: BusinessSponsor[];
}

export const SupplierSponsors: React.FC<SupplierSponsorsProps> = ({
  supplierSponsors,
}: SupplierSponsorsProps): JSX.Element => {
  if (supplierSponsors.length === 0) {
    return <></>;
  }

  const supplierSponsorItems = supplierSponsors.map((sponsor) => {
    return (
      <div
        className='w-full md:w-[10%]'
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
        サプライヤー
      </h3>
      <div className='flex flex-wrap justify-around py-8'>{supplierSponsorItems}</div>
    </section>
  );
};
