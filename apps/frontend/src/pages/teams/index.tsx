import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { TitleHeader } from '@/components/Elements';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { PlayersContent } from '@/features/players/components';
import { Player } from '@/features/players/types';
import { StaffCardList } from '@/features/staffs/components';
import { Staff } from '@/features/staffs/types';
import { supabase } from '@/utils';

const title = '選手 / スタッフ紹介';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TeamScreenProps {
  staffs: Array<Staff>;
  players: Array<Player>;
}

const TeamScreen: NextPage<TeamScreenProps> = ({ staffs, players }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainLayout
        path='/teams'
        title={title}
      >
        <ContentLayout className='pb-8 pt-32'>
          <TitleHeader title={title} />

          <section className='mt-16'>
            <h3 className='mb-6 text-5xl font-bold'>Players</h3>
            <PlayersContent players={players} />
          </section>

          <section className='mt-16'>
            <h3 className='mb-4 text-5xl font-bold'>Staffs & Mascots</h3>
            <StaffCardList staffs={staffs} />
          </section>
        </ContentLayout>
      </MainLayout>
    </motion.div>
  );
};

export default TeamScreen;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<TeamScreenProps> = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: staffsData } = await supabase
    .from('staffs')
    .select(
      'id, name, name_en, position, assets:profile_image_asset_id(src, file_name, height, width)',
    )
    .is('deleted_at', null)
    .order('sort', { ascending: true });

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
  const staffs =
    staffsData?.map((staff: any) => {
      return {
        id: staff.id,
        name: staff.name,
        name_en: staff.name_en,
        position: staff.position,
        profile_image: staff.assets && {
          src: staff.assets.src,
          file_name: staff.assets.file_name,
          height: staff.assets.height,
          width: staff.assets.width,
        },
      };
    }) ?? [];
  /* eslint-enable */

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: playersData } = await supabase
    .from('players')
    .select(
      'id, name, name_en, position, uniform_number, assets:profile_image_asset_id(src, file_name, height, width)',
    )
    .is('deleted_at', null)
    .order('uniform_number', { ascending: true });

  /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
  const players =
    playersData?.map((player: any) => {
      return {
        id: player.id,
        name: player.name,
        name_en: player.name_en,
        position: player.position,
        uniform_number: player.uniform_number,
        profile_image: player.assets && {
          src: player.assets.src,
          file_name: player.assets.file_name,
          height: player.assets.height,
          width: player.assets.width,
        },
      };
    }) ?? [];
  /* eslint-enable */

  return {
    props: {
      staffs,
      players,
    },
    revalidate: 30,
  };
};
