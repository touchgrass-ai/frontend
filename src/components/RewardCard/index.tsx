import { motion } from "motion/react";

interface RewardsCardProps {
  rewards: RewardsCardType;
  onClaim: (points: number) => void;
}

export interface RewardsCardType {
  id: number;
  description: string;
  points: number;
  icon: string;
  category: string;
}

export default function RewardsCard({rewards, onClaim }: RewardsCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center mb-4">
      <img src={rewards.icon} alt="Reward Icon" className="w-12 h-12 mr-4" />
      <div>
        <h4 className="text-black text-lg font-bold">{rewards.description}</h4>
        <div className="flex items-center">
          <img src="/grass.png" alt="Grass Icon" className="w-4 h-4 mr-1" />
          <span className="text-black text-lg font-bold">{rewards.points}</span>
        </div>
      </div>
      <motion.button 
        className="ml-auto bg-[#F50B57] text-white px-4 py-2 rounded-lg hover:bg-[#FF6262]"
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onClaim(rewards.points)}
      >
        Claim
      </motion.button>
    </div>
  );
}