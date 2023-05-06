import { Staff } from '../types';
import { StaffsCard } from './StaffsCard';

interface StaffCardListProps {
  staffs: Staff[];
}

export const StaffCardList: React.FC<StaffCardListProps> = ({ staffs }) => {
  return (
    <div className='grid gap-4 grid-cols-[repeat(2,_1fr)] sm:grid-cols-[repeat(3,_1fr)] md:grid-cols-[repeat(4,_1fr)]'>
      {staffs.map((staff, index) => (
        <StaffsCard
          staff={staff}
          key={index}
        />
      ))}
    </div>
  );
};
