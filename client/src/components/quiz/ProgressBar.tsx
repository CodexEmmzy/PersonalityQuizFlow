import { useQuiz } from "@/contexts/QuizContext";

export default function ProgressBar() {
  const { currentQuestion, totalQuestions, getProgressPercentage } = useQuiz();
  const progressPercentage = getProgressPercentage();
  
  return (
    <div className="px-5 pt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">Question {currentQuestion} of {totalQuestions}</span>
        <span className="text-sm font-medium text-primary">{progressPercentage}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full progress-bar-transition" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
