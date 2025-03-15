import { motion } from 'framer-motion';

interface CustomButtonProps {
  text: string; // Text to display on the button
  onClick: () => void; // Custom onClick handler
  className?: string; // Optional custom CSS classes
}

export default function CustomButton({ text, onClick, className }: CustomButtonProps) {
  return (
    <motion.button
      className={`bg-[#FF3F3F] text-white px-4 py-2 rounded-lg ${className}`}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}