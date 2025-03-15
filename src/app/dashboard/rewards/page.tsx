"use client"

import RewardsCard from "@/components/RewardCard";
import RewardCategoriesCard from "@/components/RewardCategories";
import PointsDisplay from "@/components/PointsDisplay";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Rewards() {
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/dashboard");
}

  const [points, setPoints] = useState(9999);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [rewards, setRewards] = useState([
    { id: 1, description: "100$ Rebate Off Any Lenovo Purchase", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 2, description: "10$ Rebate From Any Caring Pharmacy", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 3, description: "100$ Off Bose Retailers", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 4, description: "10% Voucher for Uniqlo T-shirts", points: 90, icon: "/dollar.png", category: "Vouchers" }
  ]);

  const categories = [
    { name: 'Rebates', icon: '/cashback.png' },
    { name: 'Vouchers', icon: '/voucher.png' },
  ];

  const handleClaim = (id: number, pointsToDeduct: number) => {
    setPoints(points - pointsToDeduct);
    setRewards(rewards.filter(reward => reward.id !== id));
  };

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filteredRewards = selectedCategory
    ? rewards.filter(reward => reward.category === selectedCategory)
    : rewards;

  return (
    <>
      {/* Reward Button */}
      <div className="fixed top-8 left-12">
        <motion.button
            className="bg-[#F50B57] text-white px-4 py-2 rounded-lg"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextClick}>
            Back to Dashboard
        </motion.button>
      </div>
      <div className="min-h-screen bg-[#FEF0F4] p-4 sm:p-6">
        {/* Points Display */}
        <div className="flex justify-end mb-6">
          <PointsDisplay points={points} />
        </div>

        {/* Reward Categories */}
        <div className="mb-6">
          <h3 className="text-black text-xl font-bold mb-2">Reward Categories</h3>
          <RewardCategoriesCard categories={categories} onSelectCategory={handleSelectCategory} />
        </div>

        {/* Reward Items */}
        <div className="space-y-4">
          {filteredRewards.map(reward => (
            <RewardsCard 
              key={reward.id}
              description={reward.description}
              points={reward.points}
              icon={reward.icon}
              category={reward.category}
              onClaim={() => handleClaim(reward.id, reward.points)}
            />
          ))}
        </div>
      </div>
    </>
  );
}