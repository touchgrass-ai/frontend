"use client"

import { useState, useEffect } from 'react';
import { RewardsCardType } from '@/components/RewardCard';

export default function MyRewards(){
    const [claimedRewards, setClaimedRewards] = useState([]);

    // Fetch claimed rewards from localStorage or an API
    useEffect(() => {
        const savedClaimedRewards = JSON.parse(localStorage.getItem('claimedRewards') || '[]') || [];
        setClaimedRewards(savedClaimedRewards);
    }, []);

    return (
        <div className="min-h-screen bg-[#FEF0F4] p-4 sm:p-6">
        <h1 className="text-black text-2xl font-bold mb-6">My Rewards</h1>

        {claimedRewards.length === 0 ? (
            <p className="text-gray-500">No rewards claimed yet.</p>
        ) : (
            <div className="space-y-4">
            {claimedRewards.map((reward : RewardsCardType, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                    <img src={reward.icon} alt={reward.category} className="w-10 h-10 mr-4" />
                    <div>
                    <h3 className="text-black font-semibold">{reward.description}</h3>
                    <p className="text-gray-500">{reward.category}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    );
    
}