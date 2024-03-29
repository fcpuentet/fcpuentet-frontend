import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ClubLogo: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return (
    <div
      {...divHTMLAttributes}
      className='my-8 flex flex-col'
    >
      <h2 className='mb-8 text-xl font-semibold underline decoration-blue-500 underline-offset-8'>
        ロゴマーク
      </h2>

      <div className='grid grid-cols-2 place-content-center gap-4'>
        <div className='mx-auto flex flex-col gap-4'>
          <h3 className='text-center md:font-semibold'>チームエンブレム</h3>
          <img
            src='/emblem.webp'
            alt='emblem'
            className='mx-auto md:w-3/4'
          />
        </div>

        <div className='mx-auto flex flex-col gap-4'>
          <h3 className='text-center md:font-semibold'>チームロゴ</h3>
          <img
            src='/teamname.svg'
            alt='team-name'
            className='m-auto md:w-3/4'
          />
        </div>
      </div>
    </div>
  );
};
