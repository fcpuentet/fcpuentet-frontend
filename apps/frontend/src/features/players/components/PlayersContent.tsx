import { Player } from '../types';
import { PlayerCardList } from './PlayerCardList';

interface PlayersContentProps {
  players: Player[];
}

export const PlayersContent: React.FC<PlayersContentProps> = ({ players }) => {
  const gkPlayers = players.filter((player) => player.position === 'GK');
  const dfPlayers = players.filter((player) => player.position === 'DF');
  const mfPlayers = players.filter((player) => player.position === 'MF');
  const fwPlayers = players.filter((player) => player.position === 'FW');

  return (
    <>
      <h4 className='text-5xl mb-4 border-b-8 border-primary inline-block'>GK</h4>
      <PlayerCardList players={gkPlayers} />
      <h4 className='text-5xl mb-4 mt-6 border-b-8 border-primary inline-block'>DF</h4>
      <PlayerCardList players={dfPlayers} />
      <h4 className='text-5xl mb-4 mt-6 border-b-8 border-primary inline-block'>MF</h4>
      <PlayerCardList players={mfPlayers} />
      <h4 className='text-5xl mb-4 mt-6 border-b-8 border-primary inline-block'>FW</h4>
      <PlayerCardList players={fwPlayers} />
    </>
  );
};
