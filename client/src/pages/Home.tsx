import { useQuiz } from "@/contexts/QuizContext";
import WelcomeScreen from "@/components/quiz/WelcomeScreen";
import QuizQuestions from "@/components/quiz/QuizQuestions";
import ResultsScreen from "@/components/quiz/ResultsScreen";
import QuizHeader from "@/components/quiz/QuizHeader";

export default function Home() {
  const { currentScreen } = useQuiz();

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <QuizHeader />
      
      <div className="flex-grow flex flex-col">
        {currentScreen === "welcome" && <WelcomeScreen />}
        {currentScreen === "questions" && <QuizQuestions />}
        {currentScreen === "results" && <ResultsScreen />}
      </div>
    </div>
  );
}
