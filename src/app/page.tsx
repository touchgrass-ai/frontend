'use client'

import { useRouter } from 'next/navigation';
import Image from "next/image";
import { motion } from 'motion/react';

export default function TouchGrass() {

  const router = useRouter();

  const login = () => {
    router.push('http://localhost:5000/auth/google');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAE0E7] p-6">
      {/* Text Section */}
      <h1 className="text-black text-2xl sm:text-3xl font-bold text-center">
        Not sure what to do? <br />
        Touch <span className="text-pink-600">grass.</span>
      </h1>

      {/* Grass Image */}
      <img 
        src="/touchgrasslogo.png" 
        alt="Grass icon" 
        className="w-64 h-64 my-1"
      />

      {/* Google Button */}

      <div className="flex items-center bg-[#FACA73] px-6 py-3 rounded-xl shadow-md mt-4 w-72 h-24">
        <motion.div className="bg-white px-6 py-2 rounded-md font-medium text-gray-900 flex
          hover:scale-105 hover:shadow-xl transition-all cursor-pointer select-none"
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={login}
        >
          Continue with Google
          <Image 
            src="/google.svg" 
            alt="Google" 
            className="w-6 h-6 ml-2"
            width={25}
            height={25}
          />
        </motion.div>
      </div>
    </div>
  );
}