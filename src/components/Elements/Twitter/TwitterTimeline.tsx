import { useEffect, useState } from 'react';

export const TwitterTimeline = (): JSX.Element => {
  const [isFinishLoading, setIsFinishLoading] = useState(false);

  useEffect(() => {
    if (!isFinishLoading) {
      const timelineScript = document.createElement('script');
      timelineScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(timelineScript);
      setIsFinishLoading(true);
    }
  }, []);

  return (
    <>
      <a
        className='twitter-timeline'
        href='https://twitter.com/FCPUENTET?ref_src=twsrc%5Etfw'
      >
        Tweets by FCPUENTET
      </a>
    </>
  );
};
