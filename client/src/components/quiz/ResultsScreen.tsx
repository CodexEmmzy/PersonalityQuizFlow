import { useQuiz } from "@/contexts/QuizContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Star, Lightbulb, Check } from "lucide-react";

export default function ResultsScreen() {
  const { personalityResult, restartQuiz } = useQuiz();
  
  if (!personalityResult) return null;
  
  return (
    <motion.div 
      className="flex-grow flex flex-col p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-primary text-2xl" />
        </div>
        <h2 className="font-poppins font-semibold text-2xl mb-2 text-foreground">Your Results</h2>
        <p className="text-gray-600">Based on your answers, we've created your personality profile</p>
      </div>
      
      <div className="w-full h-48 bg-secondary bg-opacity-10 rounded-custom shadow-custom mb-6 flex items-center justify-center overflow-hidden">
        <svg 
          className="w-full h-full text-secondary opacity-20" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M19.5 4.5h-15v15h15v-15Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path 
            fill="currentColor" 
            d="M9.5 8.5c0 0.5523 -0.44772 1 -1 1s-1 -0.4477 -1 -1s0.44772 -1 1 -1s1 0.4477 1 1Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path 
            stroke="currentColor" 
            d="M4.5 19.5l4 -4l2 2l6 -6l3 3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      <div className="bg-white rounded-custom shadow-custom p-5 mb-6">
        <h3 className="font-poppins font-semibold text-xl mb-3 text-primary">{personalityResult.title}</h3>
        <p className="text-gray-600 mb-4">{personalityResult.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Key Strengths:</h4>
            <ul className="space-y-2">
              {personalityResult.keyStrengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-secondary mt-1 mr-2 h-4 w-4" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-2">Growth Areas:</h4>
            <ul className="space-y-2">
              {personalityResult.growthAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <Lightbulb className="text-primary mt-1 mr-2 h-4 w-4" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary bg-opacity-10 p-5 rounded-custom mb-6">
        <h4 className="font-poppins font-medium text-secondary mb-3">Personalized Recommendations</h4>
        <ul className="space-y-3">
          {personalityResult.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <Star className="text-secondary mt-1 mr-2 h-4 w-4" />
              <span>{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button
        onClick={restartQuiz}
        className="mt-auto w-full py-3 bg-primary text-white rounded-custom font-medium hover:bg-primary/90 transition-all"
      >
        Restart Quiz
      </Button>
    </motion.div>
  );
}
