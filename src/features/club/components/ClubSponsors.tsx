import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ClubSponsors: React.FC<Props> = ({ ...divHTMLAttributes }: Props): JSX.Element => {
  return <></>;

  const sponsors: string[] = [];

  const sponsorItems =
    sponsors.length > 0 ? (
      <div>
        {sponsors.map(() => (
          <div key='key'></div>
        ))}
      </div>
    ) : null;

  return (
    <div
      {...divHTMLAttributes}
      className='my-8 flex flex-col'
    >
      <h2 className='mb-4 text-xl font-semibold'>スポンサー</h2>

      {sponsorItems}
    </div>
  );
};
