import React from 'react';
import { Supporter } from '@/features/club';
import { SupporterItem } from '@/features/club/components/supporters/SupporterItem';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SupportersProps {
  title: string;
  supporters: Supporter[];
}

export const SupporterItems: React.FC<SupportersProps> = ({
  title,
  supporters,
}: SupportersProps): JSX.Element => {
  if (supporters.length === 0) {
    return <></>;
  }

  return (
    <section className='my-8'>
      <h2 className='mb-4 underline decoration-blue-500 underline-offset-[12px]'>{title}</h2>
      <div className='flex flex-wrap justify-around py-8'>
        {supporters.map((supporter) => (
          <SupporterItem
            key={supporter.id}
            supporter={supporter}
          />
        ))}
      </div>
    </section>
  );
};
