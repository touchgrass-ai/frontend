"use client"

import { useState, useEffect } from 'react';
import RewardsClaimedCard from '@/components/RewardsClaimedCard';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';

export default function MyRewards(){
    const router = useRouter();
    const [claimedRewards, setClaimedRewards] = useState([]);

    // Fetch claimed rewards from localStorage or an API
    useEffect(() => {
        const savedClaimedRewards = JSON.parse(localStorage.getItem('claimedRewards') || '[]') || [];
        setClaimedRewards(savedClaimedRewards);
    }, []);

    return (
        <div className="min-h-screen bg-[#FEF0F4] p-4 sm:p-6">
            <div className="relative mt-6 mb-8">
                <CustomButton text="Back to Rewards" onClick={() => router.push('/dashboard/rewards')} />
            </div>
            <h1 className="text-black text-2xl font-bold mb-6">My Rewards</h1>

            {claimedRewards.length === 0 ? (
                <p className="text-gray-500">No rewards claimed yet.</p>
            ) : (
                <div className="space-y-4">
                    {claimedRewards.map((reward, index) => (
                        <RewardsClaimedCard key={index} reward={reward} />
                    ))}
                </div>
            )}
            <NavBar />
        </div>
    );
    
}