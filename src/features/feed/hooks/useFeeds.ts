import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { Feed } from '@/features/feed';

type FeedsState = {
  feeds?: Feed[];
};

export const useFeeds = (): FeedsState => {
  const [feeds, setFeeds] = useState<Feed[]>();

  useEffect(() => {
    void (async function () {
      try {
        const { data: feedList, error } = await supabaseClient
          .from('feeds')
          .select('id, created_at, updated_at, title, body')
          .is('deleted_at', null)
          .order('created_at', { ascending: false });

        if (error) {
          return;
        }

        const feeds = feedList?.map<Feed>((value) => {
          return {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
            id: `${value.id}`,
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
            createdAt: `${value.created_at}`,
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
            updatedAt: `${value.updated_at}`,
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
            title: `${value.title}`,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
            body: `${value.body}`,
          };
        });

        setFeeds(feeds);
        // eslint-disable-next-line no-empty
      } catch {
        // eslint-disable-next-line no-empty
      } finally {
      }
    })();
  }, []);

  return {
    feeds,
  };
};
