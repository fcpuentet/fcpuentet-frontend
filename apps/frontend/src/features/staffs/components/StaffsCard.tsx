import { Staff } from '../types';

interface StaffsCardProps {
  staff: Staff;
}

export const StaffsCard: React.FC<StaffsCardProps> = ({ staff }) => {
  return (
    <div className='w-full h-full overflow-hidden rounded-md relative shadow-md m-auto'>
      <img
        src={staff.image}
        alt={staff.name}
      />

      <p className='text-white text-xl text-center w-full bg-secondary py-2'>
        <span className='text-sm mr-2'>{staff.position}</span>
        {staff.name}
      </p>
    </div>
  );
};
