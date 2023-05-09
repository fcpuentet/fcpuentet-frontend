import Image from 'next/image';
import { Player } from '../types';
import { shimmer, toBase64 } from '@/utils';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className='relative m-auto h-full w-full overflow-hidden rounded-md shadow-md'>
      {player.profile_image ? (
        <Image
          src={player.profile_image.src}
          alt={player.profile_image.file_name}
          width={player.profile_image.width}
          height={player.profile_image.height}
          placeholder={'blur'}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1800, 2200))}`}
        />
      ) : (
        <Image
          src='/person_empty.webp'
          alt='empty'
          width={1800}
          height={2200}
          placeholder={'blur'}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1800, 2200))}`}
        />
      )}

      <div className='w-full bg-secondary py-2 text-center text-white'>
        <p className='text-xl'>
          {player.uniform_number}. {player.name}
        </p>
        <p className='opacity-70'>{player.kana}</p>
      </div>
    </div>
  );
};
