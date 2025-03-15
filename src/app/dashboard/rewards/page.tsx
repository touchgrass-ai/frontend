"use client"

import RewardsCard, { RewardsCardType } from "@/components/RewardCard";
import RewardCategoriesCard from "@/components/RewardCategories";
import PointsDisplay from "@/components/PointsDisplay";
import { useState } from 'react';

export default function Rewards() {
  const [points, setPoints] = useState(9999);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [rewards, setRewards] = useState<RewardsCardType[]>([
    { id: 1, description: "100$ Rebate Off Any Lenovo Purchase", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 2, description: "10$ Rebate From Any Caring Pharmacy", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 3, description: "100$ Off Bose Retailers", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 4, description: "10% Voucher for Uniqlo T-shirts", points: 90, icon: "/dollar.png", category: "Vouchers" }
  ]);
  // get rid of this once backend is up
  const [claimedRewards, setClaimedRewards] = useState<RewardsCardType[]>([]);

  const categories = [
    { name: 'Rebates', icon: '/cashback.png' },
    { name: 'Vouchers', icon: '/voucher.png' },
  ];

  const handleClaim = (id: number, pointsToDeduct: number) => {
    const claimedReward = rewards.find(reward => reward.id === id);
    const updatedClaimedRewards = [...claimedRewards, claimedReward];
    setPoints(points - pointsToDeduct);
    setRewards(rewards.filter(reward => reward.id !== id));
    setClaimedRewards(updatedClaimedRewards.filter((reward): reward is RewardsCardType => reward !== undefined));
    localStorage.setItem('claimedRewards', JSON.stringify(updatedClaimedRewards));  

  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredRewards = selectedCategory
    ? rewards.filter(reward => reward.category === selectedCategory)
    : rewards;

  return (
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
            rewards={reward}
            onClaim={() => handleClaim(reward.id, reward.points)}
          />
        ))}
      </div>
    </div>
  );
}