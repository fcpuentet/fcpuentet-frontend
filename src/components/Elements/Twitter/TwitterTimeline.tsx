import React, { useEffect } from 'react';

type Theme = 'system' | 'light' | 'dark';

type TwitterTimelineProps = {
  theme?: Theme;
};

export const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  theme = 'light',
}: TwitterTimelineProps): JSX.Element => {
  useEffect(() => {
    // scriptを読み込み
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
    // アンマウント時に一応scriptタグを消しておく
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <a
        className='twitter-timeline select-none'
        data-theme={theme}
        href='https://twitter.com/FCPUENTET?ref_src=twsrc%5Etfw'
      >
        Tweets by FCPUENTET
      </a>
    </>
  );
};
