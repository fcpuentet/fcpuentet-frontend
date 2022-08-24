import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useMemo, useState } from 'react';
import { Feed } from '@/features/feed';

type FeedState = {
  feed?: Feed;
};

export const useFeed = (id?: string | string[]): FeedState => {
  const [feed, setFeed] = useState<Feed>();

  useMemo(() => {
    if (!id || typeof id !== 'string') {
      return;
    }

    void (async function () {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data: entity, error } = await supabaseClient
          .from('feeds')
          .select('id, created_at, updated_at, title, body')
          .is('deleted_at', null)
          .eq('id', id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (error) {
          return;
        }
        if (!entity) {
          return;
        }

        const feed = {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
          id: `${entity.id}`,
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
          createdAt: `${entity.created_at}`,
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
          updatedAt: `${entity.updated_at}`,
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
          title: `${entity.title}`,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
          body: `${entity.body}`,
        };

        setFeed(feed);
        // eslint-disable-next-line no-empty
      } catch {
        // eslint-disable-next-line no-empty
      } finally {
      }
    })();
  }, [id]);

  return {
    feed: feed,
  };
};
