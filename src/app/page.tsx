import Image from "next/image";

export default function TouchGrass() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      {/* Text Section */}
      <h1 className="text-black text-2xl sm:text-3xl font-bold text-center">
        Not sure what to do? <br />
        Touch <span className="text-pink-600">grass.</span>
      </h1>

      {/* Grass Image */}
      <img 
        src="/grass.png" 
        alt="Grass icon" 
        className="w-16 h-16 my-4"
      />

      {/* Google Button */}
      <button className="flex items-center bg-yellow-200 px-6 py-3 rounded-xl shadow-md mt-4 hover:bg-yellow-300">
        <span className="bg-white px-6 py-2 rounded-md font-medium text-gray-900 flex">
          Continue with Google
          <img 
            src="/google.png" 
            alt="Google" 
            className="w-6 h-6 ml-2"
          />
        </span>
      </button>
    </div>
  );
}