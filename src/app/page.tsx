'use client'

import { useRouter } from 'next/navigation';
import Image from "next/image";

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

      <div className="flex items-center bg-yellow-200 px-6 py-3 rounded-xl shadow-md mt-4 w-72 h-24">
        <div className="bg-white px-6 py-2 rounded-md font-medium text-gray-900 flex
          hover:scale-105 hover:shadow-xl transition-all cursor-pointer select-none"
          onClick={login}
        >
          Continue with Google
          <Image 
            src="/google.png" 
            alt="Google" 
            className="w-6 h-6 ml-2"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
}