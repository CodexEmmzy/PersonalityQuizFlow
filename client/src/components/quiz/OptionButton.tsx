import { useState, useEffect } from "react";
import { useQuiz } from "@/contexts/QuizContext";
import { motion } from "framer-motion";
import { Option } from "@/data/questions";

interface OptionButtonProps {
  option: Option;
  questionId: number;
  isSelected: boolean;
}

export default function OptionButton({ option, questionId, isSelected }: OptionButtonProps) {
  const { selectOption } = useQuiz();
  const [selected, setSelected] = useState(isSelected);
  
  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);
  
  const handleClick = () => {
    selectOption(questionId, option.text, option.personalityIndicators);
    setSelected(true);
  };
  
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`text-left p-4 border ${
        selected 
          ? "border-primary bg-primary bg-opacity-5" 
          : "border-gray-200 hover:border-primary hover:bg-primary hover:bg-opacity-5"
      } rounded-custom transition-all flex items-start mb-3`}
    >
      <span 
        className={`w-5 h-5 rounded-full flex-shrink-0 mr-3 mt-0.5 ${
          selected 
            ? "bg-primary border-2 border-primary" 
            : "border-2 border-gray-300"
        }`}
      ></span>
      <span>{option.text}</span>
    </motion.button>
  );
}
