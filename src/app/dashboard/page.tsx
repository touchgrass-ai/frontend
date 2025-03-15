'use client'

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import TaskCard from '@/components/TaskCard';
import ProfileCard from '@/components/ProfileCard'
import NavBar from '@/components/NavBar';
import TaskDetailModal from '@/components/TaskDetailModal';
import { SetStateAction, useState } from 'react';
import CustomButton from "@/components/CustomButton";

export default function Dashboard() {
    const router = useRouter();

    const handleNextClick = () => {
        router.push("/dashboard/rewards");
    }


    const [isTaskDetailOpen, setIsTaskDetailOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)

    const onClickTaskCard = (task: SetStateAction<null>) => {

      return (() => {
        setSelectedTask(task)
        setIsTaskDetailOpen(true)
      })

    }

    return (
        <>
            {/* Reward Button */}
            <div className="fixed top-12 right-12">
                <CustomButton text="View Rewards" onClick={handleNextClick} />
            </div>
                
            {/* Profile Card */}
          <div className='min-h-screen bg-pink-100 p-4 sm:p-6'>
            <ProfileCard
                username='Kevin Lim'
                profileImage='/profile-picture.png'
        />
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-black text-xl font-bold'> Daily Tasks</h3>
                <button className='bg-[#F50B57] text-white px-4 py-2 rounded-lg'>Reroll</button>
            </div>

                {/* Task Cards */}
            <TaskCard 
                title="Visit Flinders St Station" 
                type="Attraction" 
                criteria="Take a photo" 
                exp={69} 
                onClick={onClickTaskCard(null)}
        />
            <TaskCard 
                title="Eat at Lune Croissanterie" 
                type="Breakfast" 
                criteria="Take a photo" 
                exp={420}
                onClick={onClickTaskCard(null)}
        />
            <TaskCard 
                title="Eat at Hakata Gensuke" 
                type="Lunch" 
                criteria="Take a photo" 
                exp={6969}
                onClick={onClickTaskCard(null)}
        />
            <TaskCard 
                title="Visit Monash University" 
                type="Attraction" 
                criteria="Take a photo" 
                exp="Bonus"
                onClick={onClickTaskCard(null)}
        />
            <NavBar />
        <TaskDetailModal open={isTaskDetailOpen} onClose={() => setIsTaskDetailOpen(false)}/>
      </div>
        </>
    );
}
