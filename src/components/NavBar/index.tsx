import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="pb-20"> {/* Added padding-bottom to ensure content is not covered */}
        <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 flex justify-around py-3">
          <motion.div
            className='flex flex-col items-center'
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavigation('/rewards')}
          >
            <Image src='/gift.svg' alt='rewards' width={25} height={25} className='w-8 h-8'/>
            <div className='text-black text-xs'>Rewards</div>
          </motion.div>
          <motion.div
            className='flex flex-col items-center'
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavigation('/dashboard')}
          >
            <Image src='/home.svg' alt='home' width={25} height={25} className='w-8 h-8'/>
            <div className='text-black text-xs'>Home</div>
          </motion.div>
          <motion.div
            className='flex flex-col items-center'
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavigation('/settings')}
          >
            <Image src='/settings.svg' alt='settings' width={25} height={25} className='w-8 h-8'/>
            <div className='text-black text-xs'>Settings</div>
          </motion.div>
        </nav>
      </div>
    </>
  );
}