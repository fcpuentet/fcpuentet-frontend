import { Player } from '../types';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className='w-full h-full overflow-hidden rounded-md relative shadow-md m-auto'>
      <img
        src={player.image}
        alt={player.name}
      />

      <p className='text-white text-xl text-center w-full bg-secondary py-2'>
        {player.uniformNumber}. {player.name}
      </p>
    </div>
  );
};
