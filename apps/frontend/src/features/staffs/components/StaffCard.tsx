import Image from 'next/image';
import { Staff } from '../types';
import { shimmer, toBase64 } from '@/utils';

interface StaffCardProps {
  staff: Staff;
}

export const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <div className='relative m-auto h-full w-full overflow-hidden rounded-md bg-secondary shadow-md'>
      {staff.profile_image ? (
        <Image
          src={staff.profile_image.src}
          alt={staff.profile_image.file_name}
          width={staff.profile_image.width}
          height={staff.profile_image.height}
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

      <div className=' w-full p-2 text-center text-white'>
        <p className='text-sm'>{staff.position}</p>
        <p className='text-xl'>{staff.name}</p>
        <p className='opacity-70'>{staff.name_en}</p>
      </div>
    </div>
  );
};
