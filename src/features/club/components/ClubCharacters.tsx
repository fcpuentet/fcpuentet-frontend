import Image from 'next/image';
import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ClubCharacters: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return (
    <div
      {...divHTMLAttributes}
      className='my-8 flex flex-col'
    >
      <h2 className='mb-4 text-xl font-semibold'>キャラクター</h2>

      <div className='flex flex-col'>
        <Image
          width={480}
          height={480}
          objectFit='contain'
          src='/mascot-character.png'
          className='mx-auto'
        />
      </div>
    </div>
  );
};
