"use client"

import RewardsCard, { RewardsCardType } from "@/components/RewardCard";
import RewardsClaimedCard, { RewardsClaimedType } from "@/components/RewardsClaimedCard";
import RewardCategoriesCard from "@/components/RewardCategories";
import PointsDisplay from "@/components/PointsDisplay";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from "@/components/NavBar";
import { motion } from "motion/react";


const placeholders = [
  { id: 1, description: "100$ Rebate Off Any Lenovo Purchase", points: 999, icon: "/dollar.png", category: "Rebates" },
  { id: 2, description: "10$ Rebate From Any Caring Pharmacy", points: 999, icon: "/dollar.png", category: "Rebates" },
  { id: 3, description: "100$ Off Bose Retailers", points: 999, icon: "/dollar.png", category: "Rebates" },
  { id: 4, description: "10% Voucher for Uniqlo T-shirts", points: 90, icon: "/dollar.png", category: "Vouchers" },
  { id: 5, description: "10% Voucher for Happy Ending", points: 90, icon: "/dollar.png", category: "Vouchers" }
]

export default function Rewards() {

  const [points, setPoints] = useState(0);

  // get rid of this once backend is up
  const [claimedRewards, setClaimedRewards] = useState<RewardsClaimedType[]>([]);
  const [isMyRewards, setIsMyRewards] = useState(false);
  const [rewards, setRewards] = useState<RewardsCardType[]>(placeholders);

  const categories = [
    { name: 'Rebates', icon: '/cashback.png' },
    { name: 'Vouchers', icon: '/voucher.png' },
    { name: 'View All', icon: '/view-all.png' },
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

  return (
      <div className="min-h-screen bg-[#FEF0F4] p-4 sm:p-6 space-y-4">
        <div className="flex flex-row justify-between">
          <div className="flex text-black font-bold text-3xl justify-center items-center">Rewards</div>
          <PointsDisplay points={points} />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex text-black font-bold text-xl justify-center items-center">{isMyRewards ? 'My Rewards' : 'Claimable Rewards'}</div>
          <motion.div className="flex w-auto h-12 bg-[#F50B57] justify-center items-center rounded-lg font-bold p-2"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMyRewards((prev) => !prev)}
          >
            To {!isMyRewards ? 'My Rewards' : 'Claimable Rewards'}
          </motion.div>
        </div>
        <div className="space-y-4">
          {
            !isMyRewards ? rewards.map((reward: RewardsCardType) => (<RewardsCard key={reward.id} rewards={reward} onClaim={() => handleClaim(reward.id, reward.points)}/>)) : 
            claimedRewards.map((reward, index) => (<RewardsClaimedCard key={index} reward={reward} />))
          }
        </div>
        <NavBar />
      </div>
  );
}