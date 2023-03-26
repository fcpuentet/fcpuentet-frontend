import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fullWidth?: boolean;
  children: React.ReactNode;
};

export const ContentLayout = (props: Props): JSX.Element => {
  const { fullWidth = false, children, className = '', ...divHTMLAttributes } = props;

  return (
    <div
      {...divHTMLAttributes}
      className={`px-6 md:px-10 ${fullWidth ? '' : 'mx-auto max-w-6xl'} ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
