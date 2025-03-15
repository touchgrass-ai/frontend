
import { motion } from "motion/react"

interface TaskCardProps {
  title: string;
  type: string;
  criteria: string;
  exp: number | string;
  onClick: () => void
}

export default function TaskCard({ title, type, criteria, exp, onClick }: TaskCardProps) {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center select-none"
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <div>
        <h4 className="text-black text-lg font-bold">{title}</h4>
        <p className="text-black text-sm">Task Type: {type}</p>
        <p className="text-black text-sm">Success Criteria: {criteria}</p>
      </div>
      <div className="text-center ml-4">
        <div className="text-[#F50B57] text-2xl font-bold">
          {typeof exp === 'number' ? exp : exp}
        </div>
        <div className="text-[#F50B57] text-lg font-bold">
          {typeof exp === 'number' ? 'EXP' : ''}
        </div>
      </div>
    </motion.div>
  );
}