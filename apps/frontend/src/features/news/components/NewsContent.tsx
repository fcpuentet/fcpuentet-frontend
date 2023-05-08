import { marked } from 'marked';
import React from 'react';
import { NewsDetail } from '@/features/news';
import { formatDateTime } from '@/utils';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  news: NewsDetail;
};

export const NewsContent: React.FC<Props> = ({
  news,
  ...divHTMLAttributes
}: Props): JSX.Element => {
  return (
    <div {...divHTMLAttributes}>
      <article>
        <div className='flex flex-col lg:flex-row lg:items-baseline lg:justify-between'>
          <h3 className='text-2xl lg:text-3xl'>{news.title}</h3>
          <p className='mt-4 lg:mt-0'>更新日時: {formatDateTime(news.updatedAtString)}</p>
        </div>
        <div
          className="whitespace-pre-wrap py-8 font-['Noto_Sans_JP'] leading-relaxed lg:py-16 [&_a]:text-blue-500"
          dangerouslySetInnerHTML={{ __html: marked(news.content) }}
        />
      </article>
    </div>
  );
};
