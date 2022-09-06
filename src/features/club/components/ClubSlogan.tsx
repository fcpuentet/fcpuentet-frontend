import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ClubSlogan: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return (
    <div
      {...divHTMLAttributes}
      className='flex flex-col md:gap-12'
    >
      <div className='my-8 flex flex-col gap-4'>
        <h2 className='mb-8 text-xl font-semibold underline decoration-blue-500 underline-offset-8'>
          クラブスローガン
        </h2>
        <p className='text-center text-xl font-bold'>壁の向こうの景色を見に行こう</p>
      </div>

      <div className='my-8 flex flex-col gap-4'>
        <h2 className='mb-8 text-xl font-semibold underline decoration-blue-500 underline-offset-8'>
          チームスローガン
        </h2>
        <p className='text-center text-xl font-bold'>覚悟</p>
      </div>
    </div>
  );
};
