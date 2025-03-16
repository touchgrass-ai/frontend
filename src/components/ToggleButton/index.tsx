import { motion } from "motion/react";


export default function ToggleButton({ text, isSelected, onToggle }: {text: string, isSelected: boolean, onToggle: () => void}) {

  return (
    <motion.div className={`h-12 w-auto px-4 ${isSelected ? 'bg-[#F50B57] text-white' : 'bg-gray-300 text-black'} font-bold text-lg rounded-lg transition-colors`}
    whileHover={{
      scale: 1.01,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.9 }}
    onClick={onToggle}
    >
      {text}
    </motion.div>
  )
}