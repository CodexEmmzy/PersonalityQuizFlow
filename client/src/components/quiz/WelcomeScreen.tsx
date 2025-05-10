import { useQuiz } from "@/contexts/QuizContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  const { startQuiz } = useQuiz();

  return (
    <motion.div 
      className="flex-grow flex flex-col items-center justify-center p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-64 h-64 mb-8 rounded-custom overflow-hidden shadow-custom relative">
        <svg className="w-full h-full text-primary bg-primary bg-opacity-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.5C15.5899 17.5 18.5 14.5899 18.5 11C18.5 7.41015 15.5899 4.5 12 4.5C8.41015 4.5 5.5 7.41015 5.5 11C5.5 14.5899 8.41015 17.5 12 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.5 12H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.5 12H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.5 5.5L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 7L18.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12C17.5 15.0376 15.0376 17.5 12 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 9.5C9.5 9.5 10 10.5 12 10.5C14 10.5 14.5 9.5 14.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <h2 className="font-poppins font-semibold text-2xl mb-3 text-foreground">Discover Your Personality</h2>
      <p className="text-gray-600 mb-8 max-w-sm">Take this 20-question quiz to uncover insights about your personality type and receive personalized recommendations.</p>
      
      <Button 
        onClick={startQuiz}
        className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-custom shadow-custom transition-all w-full max-w-xs"
      >
        Start Quiz
      </Button>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>Takes approximately 5 minutes</p>
      </div>
    </motion.div>
  );
}
