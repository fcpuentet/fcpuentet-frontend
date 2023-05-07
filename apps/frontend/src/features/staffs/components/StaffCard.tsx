import Image from 'next/image';
import { Staff } from '../types';
import { shimmer, toBase64 } from '@/utils';

interface StaffCardProps {
  staff: Staff;
}

export const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <div className='w-full h-full overflow-hidden rounded-md relative shadow-md m-auto bg-secondary'>
      {staff.image ? (
        <Image
          src={staff.image}
          alt={staff.name}
          width={1800}
          height={2200}
          placeholder={'blur'}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1800, 2200))}`}
        />
      ) : (
        <Image
          src='/person_empty.webp'
          alt='empty'
          width={1800}
          height={2200}
          placeholder={'blur'}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1800, 2200))}`}
        />
      )}

      <div className=' text-white text-center w-full p-2'>
        <p className='text-sm'>{staff.position}</p>
        <p className='text-xl'>{staff.name}</p>
        <p className='opacity-70'>{staff.name_en}</p>
      </div>
    </div>
  );
};
