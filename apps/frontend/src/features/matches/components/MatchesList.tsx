import { MatchData } from '../data';
import { MatchesListItem } from './MatchesListItem';

interface MatchesListProps {
  matchesData: MatchData[];
}

export const MatchesList: React.FC<MatchesListProps> = ({ matchesData }: MatchesListProps) => {
  return (
    <ul>
      {matchesData.map((matchData) => (
        <MatchesListItem matchData={matchData} />
      ))}
    </ul>
  );
};
