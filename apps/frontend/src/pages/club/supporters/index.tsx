import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { SupporterRank, Supporter, Supporters, SupporterContentItems } from '@/features/club';
import { supabase } from '@/utils';

const title = 'SUPPORTER CLUB';

interface SupportersScreenProps {
  hasSupporters: boolean;
  supporters: Supporters;
}

const SupportersScreen: NextPage<SupportersScreenProps> = ({
  hasSupporters,
  supporters: { kingSupporters, queenSupporters, jackSupporters, jokerSupporters },
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/supporters'
        title={title}
      >
        <ContentLayout className='pt-32 pb-8'>
          <TitleHeader title={title} />
          <div className='my-8 md:my-16'>
            {/*/!* サポーター一覧 *!/*/}
            {/*<SupporterItems*/}
            {/*  title='KING SUPPORTERS'*/}
            {/*  supporters={kingSupporters}*/}
            {/*/>*/}
            {/*<SupporterItems*/}
            {/*  title='QUEEN SUPPORTERS'*/}
            {/*  supporters={queenSupporters}*/}
            {/*/>*/}
            {/*<SupporterItems*/}
            {/*  title='JACK SUPPORTERS'*/}
            {/*  supporters={jackSupporters}*/}
            {/*/>*/}
            {/*<SupporterItems*/}
            {/*  title='JOKER SUPPORTERS'*/}
            {/*  supporters={jokerSupporters}*/}
            {/*/>*/}

            {/*/!* サポーターが存在する場合のみボーダーで区切る *!/*/}
            {/*{hasSupporters && <div className='my-8 border' />}*/}

            {/* サポーター内容 */}
            <SupporterContentItems />
          </div>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default SupportersScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<SupportersScreenProps> = async () => {
  // TODO: リリース時に遷移可能にする
  return {
    notFound: true,
  };

  const { data } = await supabase
    .from('supporters')
    .select('id, name, rank, url, icon_image_url')
    .is('deleted_at', null)
    .order('created_at', { ascending: true });

  /* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access */
  const supporters =
    data?.map<Supporter>((value): Supporter => {
      return {
        id: `${value.id}`,
        name: `${value.name}`,
        rank: `${value.rank}` as SupporterRank,
        url: value.url ? `${value.url}` : null,
        iconImageUrl: value.icon_image_url ? `${value.icon_image_url}` : null,
      };
    }) ?? [];
  /* eslint-enable */

  const kingSupporters = supporters.filter((supporter) => supporter.rank === 'king');
  const queenSupporters = supporters.filter((supporter) => supporter.rank === 'queen');
  const jackSupporters = supporters.filter((supporter) => supporter.rank === 'jack');
  const jokerSupporters = supporters.filter((supporter) => supporter.rank === 'joker');

  return {
    props: {
      hasSupporters: supporters.length > 0,
      supporters: {
        kingSupporters,
        queenSupporters,
        jackSupporters,
        jokerSupporters,
      },
    },
    revalidate: 30,
  };
};
