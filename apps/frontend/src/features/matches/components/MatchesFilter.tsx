import clsx from 'clsx';

interface MatchesFilterProps {
  seasons: string[];
  classNames?: string;
  onChange?: (selectValue: string) => void;
}

export const MatchesFilter: React.FC<MatchesFilterProps> = ({
  seasons,
  classNames,
  onChange,
}: MatchesFilterProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <select
      className={clsx(
        classNames,
        'w-full rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-2xl text-neutral-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300',
      )}
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
