import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ClubCharacters: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return (
    <div
      {...divHTMLAttributes}
      className='my-8 flex flex-col'
    >
      <h2 className='mb-12 text-xl font-semibold underline decoration-blue-500 underline-offset-8'>
        キャラクター
      </h2>

      <div className='flex flex-col'>
        <img
          src='/mascot-character.webp'
          alt='mascot-character'
          className='mx-auto'
        />
      </div>
    </div>
  );
};
