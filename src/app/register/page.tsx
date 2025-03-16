'use client'

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const enter = {
  opacity: 1,
  transition: {
    duration: 0.3
  },
}

const exit = {
  opacity: 0,
  transition: {
    duration: 0.3
  },
}

function ToggleButton({ text, isSelected, onToggle }: {text: string, isSelected: boolean, onToggle: () => void}) {

  return (
    <motion.button className={`h-12 w-auto px-4 ${isSelected ? 'bg-[#F50B57] text-white' : 'bg-gray-300 text-black'} font-bold text-lg rounded-lg transition-colors`}
    whileHover={{
      scale: 1.01,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.9 }}
    onClick={onToggle}
    >
      {text}
    </motion.button>
  )
}

const preferences = [
  'food', 'sports', 'tech', 'movies', 'nature', 'intense', 'gambling', 'social', 'scenic'
]

export default function Register() {

  const un_ref = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const [selectedPreferences, setSelectedPreferences] = useState<boolean[]>(new Array(preferences.length).fill(false))

  const toggleSelected = (index: number) => {
    setSelectedPreferences((prev) => {
      const newSelectedPreferences = [...prev];
      newSelectedPreferences[index] = !newSelectedPreferences[index]
      return (newSelectedPreferences)
    })
  }

  const onContinue = () => {

    fetch('', {
      method: 'POST'
    }).then((response) => {
      if (response.ok) {
        router.push('/dashboard')
      } else {
        router.push('/error')
      }
    }).catch((e) => console.error(e))

    router.push('/dashboard')
  }

  return (
    <div className='flex min-h-screen bg-pink-100 p-4 sm:p-6'>
      <div className="flex flex-col justify-center text-black text-xl space-y-4">
        <div className="font-bold text-4xl">Welcome!</div>
        <div>Please fill out the information below to get started.</div>
        <motion.input className="h-12 bg-white rounded-lg p-2 text-black text-lg" placeholder={'Username'} ref={un_ref} initial={exit} animate={enter}/>
        <div className="space-y-4">
          <div>Preferences</div>
          <div className="flex flex-wrap space-x-3 space-y-3">
            {
              preferences.map((p, i) => <ToggleButton key={i} text={p} isSelected={selectedPreferences[i]} onToggle={() => toggleSelected(i)} />)
            }
          </div>
        </div>
        <motion.button
        className="flex p-2 w-32 h-12 bg-[#F50B57] justify-center items-center rounded-lg text-white font-bold"
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={onContinue}
        >Continue</motion.button>
      </div>
    </div>
  )
}