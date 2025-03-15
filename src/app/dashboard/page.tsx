'use client'

import TaskCard from '@/components/TaskCard';
import ProfileCard from '@/components/ProfileCard'

export default function Dashboard() {
    return (
        <div className='min-h-screen bg-pink-100 p-4 sm:p-6'>
            <ProfileCard
                username='P.Diddy'
                profileImage='/profile-picture.png'
            />
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-black text-xl font-bold'> Daily Tasks</h3>
                <button className='bg-[#F50B57] text-white px-4 py-2 rounded-lg'>Reroll</button>
            </div>
            <TaskCard 
                title="Visit Flinders St Station" 
                type="Attraction" 
                criteria="Take a photo" 
                exp={69} 
            />
            <TaskCard 
                title="Eat at Lune Croissanterie" 
                type="Breakfast" 
                criteria="Take a photo" 
                exp={420} 
            />
            <TaskCard 
                title="Eat at Hakata Gensuke" 
                type="Lunch" 
                criteria="Take a photo" 
                exp={6969} 
            />
            <TaskCard 
                title="Visit Monash University" 
                type="Attraction" 
                criteria="Take a photo" 
                exp="Bonus" 
            />
        </div>
    )
}