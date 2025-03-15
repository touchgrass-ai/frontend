"use client"

import RewardsCard from "@/components/RewardCard";
import RewardCategoriesCard from "@/components/RewardCategories";
import PointsDisplay from "@/components/PointsDisplay";
import { useState } from 'react';

export default function Rewards() {
  const [points, setPoints] = useState(9999);
  const [rewards, setRewards] = useState([
    { id: 1, description: "100$ Rebate Off Any Lenovo Purchase", points: 999, icon: "/dollar.png" },
    { id: 2, description: "10$ Rebate From Any Caring Pharmacy", points: 999, icon: "/dollar.png" },
    { id: 3, description: "100$ Off Bose Retailers", points: 999, icon: "/dollar.png" },
  ]);

  const categories = [
    { name: 'Rebates', icon: '/path/to/rebates-icon.png' },
    { name: 'Vouchers', icon: '/path/to/vouchers-icon.png' },
  ];

  const handleClaim = (id: number, pointsToDeduct: number) => {
    setPoints(points - pointsToDeduct);
    setRewards(rewards.filter(reward => reward.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FEF0F4] p-4 sm:p-6">
      {/* Points Display */}
      <div className="flex justify-end mb-6">
        <PointsDisplay points={points} />
      </div>

      {/* Reward Categories */}
      <div className="mb-6">
        <h3 className="text-black text-xl font-bold mb-2">Reward Categories</h3>
        <RewardCategoriesCard categories={categories} />
      </div>

      {/* Reward Items */}
      <div className="space-y-4">
        {rewards.map(reward => (
          <RewardsCard 
            key={reward.id}
            description={reward.description}
            points={reward.points}
            icon={reward.icon}
            onClaim={() => handleClaim(reward.id, reward.points)}
          />
        ))}
      </div>
    </div>
  );
}