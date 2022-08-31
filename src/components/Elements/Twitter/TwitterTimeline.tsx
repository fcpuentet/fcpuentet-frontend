import Script from 'next/script';

export const TwitterTimeline = (): JSX.Element => {
  return (
    <>
      <a
        className='twitter-timeline'
        href='https://twitter.com/FCPUENTET?ref_src=twsrc%5Etfw'
      >
        Tweets by FCPUENTET
      </a>
      <Script
        async
        src='https://platform.twitter.com/widgets.js'
        strategy='lazyOnload'
        charSet='utf-8'
      />
    </>
  );
};
