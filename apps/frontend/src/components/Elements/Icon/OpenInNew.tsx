import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type InstagramProps = {};

// eslint-disable-next-line no-empty-pattern
export const OpenInNew: React.FC<InstagramProps> = ({}: InstagramProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      height='24'
      width='24'
    >
      <path d='M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z' />
    </svg>
  );
};
