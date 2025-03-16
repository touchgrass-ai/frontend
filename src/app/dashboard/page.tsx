'use client'

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import TaskCard from '@/components/TaskCard';
import ProfileCard from '@/components/ProfileCard'
import NavBar from '@/components/NavBar';
import TaskDetailModal from '@/components/TaskDetailModal';
import { SetStateAction, useEffect, useState } from 'react';


type userData = {
  id: number
}

const tasks = [
  {
    title: "Lune Crossainterie",
    type: 'type',
    criteria: 'Take a photo',
    exp: 20
  },
  {
    title: "title",
    type: 'type',
    criteria: 'criteria',
    exp: 120
  },
  {
    title: "title",
    type: 'type',
    criteria: 'criteria',
    exp: 120
  },
  {
    title: "title",
    type: 'type',
    criteria: 'criteria',
    exp: 120
  },
  {
    title: "title",
    type: 'type',
    criteria: 'criteria',
    exp: 120
  },
  {
    title: "title",
    type: 'type',
    criteria: 'criteria',
    exp: 120
  },
  {
    title: "title",
    type: 'type',
    criteria: 'criteria',
    exp: 120
  },
]

export default function Dashboard() {

    const router = useRouter();
    const [isTaskDetailOpen, setIsTaskDetailOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)
    const [userData, setUserData] = useState<userData | null>(null)
    const [userTasks, setUserTasks] = useState()

    useEffect(() => {
      // fetch('http://localhost:5000/auth/me', {
      //   method: 'GET'
      // }).then((response) => {
      //   if (response.ok) {
      //     response.json().then((data) => {

      //       if (data === null) router.push('/')
      //       setUserData(data)
      //     })
      //   }
      // }).catch((e) => console.error(e))

    }, [])

    useEffect(() => {

      if (userData === null) return;

      fetch(`http://localhost:5000/recommend/${userData.id}`, {
        method: 'GET'
      }).then((response) => {
        if (response.ok) {
          response.json().then((json) => setUserTasks(json))
        }
      }).catch((e) => console.error(e))

    }, [userData])




    const onClickTaskCard = (task: SetStateAction<null>) => {

      return (() => {
        setSelectedTask(task)
        setIsTaskDetailOpen(true)
      })

    }

    return (
      <div className='min-h-screen bg-pink-100 p-4 sm:p-6'>
        <ProfileCard
            username='Kevin'
            profileImage='/profile-picture.png'
        />
        <div className='flex justify-between items-center mb-4'>
            <h3 className='text-black text-xl font-bold'> Daily Tasks</h3>
            <motion.button
              className='bg-[#F50B57] text-white px-4 py-2 rounded-lg'
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >Reroll</motion.button>
        </div>
        <div>
          {
            tasks.map((t, i) => <TaskCard key={i} title={t.title} type={t.type} criteria={t.criteria} exp={t.exp} onClick={onClickTaskCard(null)}/>)
          }
        </div>
        <NavBar />
        <TaskDetailModal open={isTaskDetailOpen} onClose={() => setIsTaskDetailOpen(false)}/>
      </div>
    );
}
