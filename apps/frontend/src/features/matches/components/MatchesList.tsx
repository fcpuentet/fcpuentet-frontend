import { MatchData } from '../data';
import { MatchesListItem } from './MatchesListItem';
import { isAfterDate } from '@/utils';

interface MatchesListProps {
  matchesData: MatchData[];
}

export const MatchesList: React.FC<MatchesListProps> = ({ matchesData }: MatchesListProps) => {
  const nextMatch = matchesData.find((matchData) => {
    return isAfterDate(matchData.matchDate);
  });

  const isNextMatch = (matchData: MatchData) => {
    return nextMatch?.matchDate === matchData.matchDate;
  };

  return (
    <ul>
      {matchesData.map((matchData, index) => (
        <MatchesListItem
          matchData={matchData}
          isNextMatch={isNextMatch(matchData)}
          key={index}
        />
      ))}
    </ul>
  );
};
