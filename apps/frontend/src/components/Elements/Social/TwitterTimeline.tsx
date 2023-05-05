import Link from 'next/link';
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
    <div className='w-full'>
      <h3 className='mb-2 text-5xl'>Twitter</h3>
      <p className='mb-8'>各種イベントや試合など最新情報をお届けします👍</p>
      <div className='border overflow-hidden rounded-sm'>
        <Link
          href='https://twitter.com/FCPUENTET?ref_src=twsrc%5Etfw'
          className='twitter-timeline'
          data-chrome='noborders'
          data-height='480'
          data-theme={theme}
        >
          Tweet を読み込んでいます...
        </Link>
      </div>
    </div>
  );
};
