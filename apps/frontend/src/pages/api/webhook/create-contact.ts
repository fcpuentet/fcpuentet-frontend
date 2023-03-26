import type { NextApiRequest, NextApiResponse } from 'next';
import { slackContactBotClient } from '@/utils';
import { supabase } from '@/utils';

type Message = {
  message: string;
};

const contactChannelId = '#contact';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>,
): Promise<void> {
  if (req.headers.authorization !== `Bearer ${process.env.WEBHOOK_SUPABASE_CONTACT_TABLE_TOKEN!}`) {
    return res.status(401).json({ message: 'Your secret is invalid !' });
  }

  try {
    /* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
    const record = req.body.record;

    const { data: category } = await supabase
      .from('contact_categories')
      .select('name')
      .is('deleted_at', null)
      .eq('id', record.category_id)
      .single();

    await slackContactBotClient.chat.postMessage({
      channel: contactChannelId,
      text: '新規お問い合わせを受信しました。',
      attachments: [
        {
          color: '3b82f6',
          fields: [
            {
              title: '名前',
              value: `${record.name}`,
              short: true,
            },
            {
              title: 'メールアドレス',
              value: `${record.email}`,
              short: true,
            },
            {
              title: 'カテゴリ',
              value: `${category?.name ?? '不明'}`,
              short: false,
            },
            {
              title: '問い合わせ内容',
              value: `${record.content}`,
              short: false,
            },
          ],
        },
      ],
    });
    /* eslint-enable */
  } catch (err) {} // eslint-disable-line no-empty
  res.json({
    message: 'OK',
  });
}
