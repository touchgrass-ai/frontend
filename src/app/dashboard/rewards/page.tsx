"use client"

import RewardsCard, { RewardsCardType } from "@/components/RewardCard";
import { RewardsClaimedType } from "@/components/RewardsClaimedCard";
import RewardCategoriesCard from "@/components/RewardCategories";
import PointsDisplay from "@/components/PointsDisplay";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from "@/components/CustomButton";
import NavBar from "@/components/NavBar";

export default function Rewards() {
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/dashboard/rewards/myrewards");
}

  const [points, setPoints] = useState(9999);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [rewards, setRewards] = useState<RewardsCardType[]>([
    { id: 1, description: "100$ Rebate Off Any Lenovo Purchase", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 2, description: "10$ Rebate From Any Caring Pharmacy", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 3, description: "100$ Off Bose Retailers", points: 999, icon: "/dollar.png", category: "Rebates" },
    { id: 4, description: "10% Voucher for Uniqlo T-shirts", points: 90, icon: "/dollar.png", category: "Vouchers" },
    { id: 5, description: "10% Voucher for Happy Ending", points: 90, icon: "/dollar.png", category: "Vouchers" }
  ]);
  // get rid of this once backend is up
  const [claimedRewards, setClaimedRewards] = useState<RewardsClaimedType[]>([]);

  const categories = [
    { name: 'Rebates', icon: '/cashback.png' },
    { name: 'Vouchers', icon: '/voucher.png' },
  ];

  const handleClaim = (id: number, pointsToDeduct: number) => {
    const claimedReward = rewards.find(reward => reward.id === id);
    if (claimedReward) {
      // Calculate expiry date (e.g., 30 days from now)
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30); // Add 30 days
      const expiryDateString = expiryDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

      // Add expiryDate to the claimed reward
      const claimedRewardWithExpiry = { ...claimedReward, expiryDate: expiryDateString };

      // Update state
      setPoints(points - pointsToDeduct);
      setRewards(rewards.filter(reward => reward.id !== id));
      setClaimedRewards([...claimedRewards, claimedRewardWithExpiry]);

      // Save to localStorage
      localStorage.setItem('claimedRewards', JSON.stringify([...claimedRewards, claimedRewardWithExpiry]));
    }

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
      <div className="min-h-screen bg-[#FEF0F4] p-4 sm:p-6">
        <div className="relative top-10 left-1 z-50">
          <CustomButton
            text="My Rewards"
            onClick={handleNextClick} 
          />
        </div>
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
            rewards={reward}
            onClaim={() => handleClaim(reward.id, reward.points)}
          />
        ))}
      </div>
      <NavBar />
    </div>
    </>
  );
}