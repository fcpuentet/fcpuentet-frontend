import { Player } from '../types';
import { PlayerCard } from './PlayerCard';

interface PlayerCardListProps {
  players: Player[];
}

export const PlayerCardList: React.FC<PlayerCardListProps> = ({ players }) => {
  return (
    <div className='grid gap-4 grid-cols-[repeat(2,_1fr)] sm:grid-cols-[repeat(3,_1fr)] md:grid-cols-[repeat(4,_1fr)]'>
      {players.map((player, index) => (
        <PlayerCard
          player={player}
          key={index}
        />
      ))}
    </div>
  );
};
