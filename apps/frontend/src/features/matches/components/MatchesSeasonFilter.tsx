import clsx from 'clsx';
import { useState } from 'react';
import { getTheYear } from '@/utils';

interface MatchesSeasonFilterProps {
  seasons: string[];
  classNames?: string;
  onChange?: (selectValue: string) => void;
}

export const MatchesSeasonFilter: React.FC<MatchesSeasonFilterProps> = ({
  seasons,
  classNames,
  onChange,
}: MatchesSeasonFilterProps) => {
  const currentSeason = seasons.find((season) => Number(season) === getTheYear());
  const [season, setSeason] = useState(currentSeason);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSeason(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <select
      className={clsx(
        classNames,
        'w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-2xl text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300',
      )}
      value={season}
      onChange={handleChange}
    >
      {seasons.map((season, index) => (
        <option
          value={season}
          key={index}
        >
          {season}
        </option>
      ))}
    </select>
  );
};
