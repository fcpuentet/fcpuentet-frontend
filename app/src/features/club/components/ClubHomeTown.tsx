import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ClubHomeTown: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return (
    <div
      {...divHTMLAttributes}
      className='my-8 flex flex-col'
    >
      <h2 className='mb-8 text-xl font-semibold underline decoration-blue-500 underline-offset-8'>
        活動拠点
      </h2>
      <ul className='flex flex-col gap-1'>
        <li className='md:text-lg'>埼玉県吉川市</li>
        <li className='md:text-lg'>埼玉県越谷市</li>
        <li className='md:text-lg'>埼玉県三郷市</li>
      </ul>
    </div>
  );
};
