import Image from 'next/image';
import Link from 'next/link';

type GreatestOutdoorsProps = {
  title: string;
  desc: string;
  linkText: string;
};
const GreatestOutdoors = ({
  title,
  desc,
  linkText,
}: GreatestOutdoorsProps) => {
  return (
    <section>
      <div className='container relative cursor-pointer pt-6'>
        <div className='relative h-96 min-w-[300px]'>
       <Image
              src='https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='banner-img'
              className='object-cover object-left'
              fill
            />          
        </div>
        <div className='absolute top-32 left-12'>
          <h3 className='text-4xl mb-3 w-64'>{title}</h3>
          <p>{desc}</p>
          <Link
            href='/'
            className='text-sm px-4 py-2 rounded-lg mt-5 block text-white  bg-gray-900'
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GreatestOutdoors;
