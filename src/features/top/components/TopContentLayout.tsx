import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const TopContentLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='mx-auto w-full max-w-3xl py-16 px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      {children}
    </div>
  );
};
