import { useEffect, useState } from 'react';
import { Feed } from '@/features/feed';

type TopNews = {
  feeds?: Feed[];
};

export const useTopFeeds = (): TopNews => {
  const [feeds, setFeeds] = useState<Feed[]>();

  useEffect(() => {
    const feeds = Array.from<void, Feed>({ length: 3 }, (v, k) => {
      return {
        title: `NEWS ${k + 1}`,
        body: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      };
    });
    setFeeds(feeds);
  }, []);

  return {
    feeds,
  };
};
