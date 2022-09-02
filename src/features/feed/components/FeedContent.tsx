import { marked } from 'marked';
import React from 'react';
import { useFeed } from '@/features/feed';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  feedId?: string | string[];
};

export const FeedContent: React.FC<Props> = ({
  feedId,
  ...divHTMLAttributes
}: Props): JSX.Element => {
  const { feed } = useFeed(feedId);

  return (
    <div {...divHTMLAttributes}>
      {feed && (
        <article>
          <div className='flex flex-col lg:flex-row lg:items-baseline lg:justify-between'>
            <h3 className='text-2xl lg:text-3xl'>{feed.title}</h3>
            <p className='mt-4 lg:mt-0'>更新日: {feed.updatedAt.toLocaleDateString()}</p>
          </div>
          <div
            className="whitespace-pre-wrap py-8 font-['Noto_Sans_JP'] lg:py-16"
            dangerouslySetInnerHTML={{ __html: marked(feed.body) }}
          />
        </article>
      )}
    </div>
  );
};
