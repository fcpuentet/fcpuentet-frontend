import Image from 'next/image';
import { Staff } from '../types';
import { shimmer, toBase64 } from '@/utils';

interface StaffCardProps {
  staff: Staff;
}

export const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <div className='w-full h-full overflow-hidden rounded-md relative shadow-md m-auto bg-secondary'>
      <Image
        src={staff.image}
        alt={staff.name}
        width={1800}
        height={2200}
        placeholder={'blur'}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1800, 2200))}`}
      />

      <p className=' text-white text-xl text-center w-full p-2'>
        <span className='text-sm mr-2 inline-block'>{staff.position}</span>
        <span className='inline-block'>{staff.name}</span>
      </p>
    </div>
  );
};
