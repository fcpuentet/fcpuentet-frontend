import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ClubSummary: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return (
    <div
      {...divHTMLAttributes}
      className='my-8 flex flex-col items-center'
    >
      <img
        src='/emblem.webp'
        className='mx-8 my-12 w-3/4'
      />
      <h2 className='text-2xl font-bold md:text-4xl'>FC-PUENTET</h2>
      <p className='my-4'>
        PUENT（橋）スペイン語、ET（そして、～と）フランス語
        <br />
        人と人との「思い」をつなぐ架け橋、そして全ての人を「幸せ」にするチームへ
      </p>
    </div>
  );
};
