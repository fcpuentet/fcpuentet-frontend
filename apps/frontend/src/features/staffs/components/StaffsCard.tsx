import { Staff } from '../types';

interface StaffsCardProps {
  staff: Staff;
}

export const StaffsCard: React.FC<StaffsCardProps> = ({ staff }) => {
  return (
    <div className='w-full h-full overflow-hidden rounded-md relative shadow-md m-auto bg-secondary'>
      <img
        src={staff.image}
        alt={staff.name}
      />

      <p className=' text-white text-xl text-center w-full p-2'>
        <span className='text-sm mr-2 inline-block'>{staff.position}</span>
        <span className='inline-block'>{staff.name}</span>
      </p>
    </div>
  );
};
