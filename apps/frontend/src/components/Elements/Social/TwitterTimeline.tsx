import Link from 'next/link';
import React, { useEffect } from 'react';
import { OpenInNew } from '@/components/Elements';

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
    <section className='bg-blue-400 p-2'>
      <div className='flex flex-col bg-white/80 p-4'>
        <h3 className='mx-auto mb-6 mt-4 cursor-default'>Twitter</h3>
        <p className='mx-auto flex flex-col md:flex-row'>
          <span>各種イベントや試合など</span>
          <span>最新情報をお届けします！</span>
        </p>

        <Link
          href='https://twitter.com/FCPUENTET'
          target='_blank'
          className='mx-auto mt-4 flex select-none flex-row gap-2 rounded-md border border-black py-2 px-8 duration-100 hover:bg-black hover:text-white focus:bg-black focus:text-white'
        >
          Twitter を見る
          <OpenInNew />
        </Link>

        <div className='mt-8 select-none text-center'>
          <Link
            href='https://twitter.com/FCPUENTET?ref_src=twsrc%5Etfw'
            className='twitter-timeline'
            data-height='480'
            data-theme={theme}
          >
            Tweet を読み込んでいます...
          </Link>
        </div>
      </div>
    </section>
  );
};
