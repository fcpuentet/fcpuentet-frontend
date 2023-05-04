import { Match } from '../types';
import { MatchesListItem } from './MatchesListItem';
import { isAfterDate } from '@/utils';

interface MatchesListProps {
  matches: Match[];
}

export const MatchesList: React.FC<MatchesListProps> = ({ matches }: MatchesListProps) => {
  const nextMatch = matches.find((match) => {
    return isAfterDate(match.kickedOffAt);
  });

  const isNextMatch = (match: Match) => {
    return nextMatch?.kickedOffAt === match.kickedOffAt;
  };

  return (
    <ul>
      {matches.map((match, index) => (
        <MatchesListItem
          match={match}
          isNextMatch={isNextMatch(match)}
          key={index}
        />
      ))}
    </ul>
  );
};
