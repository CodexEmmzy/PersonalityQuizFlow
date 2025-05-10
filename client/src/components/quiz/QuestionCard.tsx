import { useQuiz } from "@/contexts/QuizContext";
import { Question } from "@/data/questions";
import OptionButton from "./OptionButton";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const { answers } = useQuiz();
  
  const selectedOption = answers.find(a => a.questionId === question.id)?.selectedOption || "";
  
  return (
    <motion.div 
      className="question-item flex flex-col flex-grow"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="font-poppins font-semibold text-xl mb-6 text-foreground">{question.text}</h3>
      
      <div className="flex flex-col mb-auto">
        {question.options.map((option, index) => (
          <OptionButton 
            key={index}
            option={option}
            questionId={question.id}
            isSelected={selectedOption === option.text}
          />
        ))}
      </div>
    </motion.div>
  );
}
