import Image from 'next/image';
import { Player } from '../types';
import { shimmer, toBase64 } from '@/utils';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className='w-full h-full overflow-hidden rounded-md relative shadow-md m-auto'>
      <Image
        src={player.image}
        alt={player.name}
        width={1800}
        height={2200}
        placeholder={'blur'}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1800, 2200))}`}
      />

      <p className='text-white text-xl text-center w-full bg-secondary py-2'>
        {player.uniformNumber}. {player.name}
      </p>
    </div>
  );
};
