import { useQuiz } from "@/contexts/QuizContext";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";

export default function QuizQuestions() {
  const { 
    currentQuestion, 
    goToNextQuestion, 
    goToPreviousQuestion,
    hasAnsweredCurrentQuestion,
    totalQuestions
  } = useQuiz();
  
  const currentQuestionData = questions.find(q => q.id === currentQuestion);
  const isLastQuestion = currentQuestion === totalQuestions;
  const canGoNext = hasAnsweredCurrentQuestion();
  
  if (!currentQuestionData) return null;
  
  return (
    <div className="flex-grow flex flex-col">
      <ProgressBar />
      
      <div className="flex-grow flex flex-col p-5">
        <AnimatePresence mode="wait">
          <QuestionCard key={currentQuestion} question={currentQuestionData} />
        </AnimatePresence>
      </div>
      
      <div className="p-5 border-t border-gray-100">
        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="flex-1 py-3 px-6 border border-gray-200 text-foreground rounded-custom font-medium disabled:opacity-50"
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 1}
          >
            Previous
          </Button>
          <Button
            className="flex-1 py-3 px-6 bg-primary text-white rounded-custom font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
            onClick={goToNextQuestion}
            disabled={!canGoNext}
          >
            {isLastQuestion ? "See Results" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
