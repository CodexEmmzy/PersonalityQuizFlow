import { createContext, useState, useContext, ReactNode } from "react";
import { questions } from "@/data/questions";
import { results, PersonalityType } from "@/data/results";

interface Answer {
  questionId: number;
  selectedOption: string;
  personalityIndicators: Record<string, number>;
}

type QuizScreen = "welcome" | "questions" | "results";

interface QuizContextType {
  currentScreen: QuizScreen;
  currentQuestion: number;
  totalQuestions: number;
  answers: Answer[];
  personalityResult: PersonalityType | null;
  
  startQuiz: () => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  selectOption: (questionId: number, selectedOption: string, personalityIndicators: Record<string, number>) => void;
  calculateResults: () => void;
  restartQuiz: () => void;
  
  hasAnsweredCurrentQuestion: () => boolean;
  getProgressPercentage: () => number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentScreen, setCurrentScreen] = useState<QuizScreen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [personalityResult, setPersonalityResult] = useState<PersonalityType | null>(null);
  
  const totalQuestions = questions.length;
  
  const startQuiz = () => {
    setCurrentScreen("questions");
    setCurrentQuestion(1);
    setAnswers([]);
    setPersonalityResult(null);
  };
  
  const goToNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
      setCurrentScreen("results");
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const selectOption = (questionId: number, selectedOption: string, personalityIndicators: Record<string, number>) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = { questionId, selectedOption, personalityIndicators };
    } else {
      newAnswers.push({ questionId, selectedOption, personalityIndicators });
    }
    
    setAnswers(newAnswers);
  };
  
  const calculateResults = () => {
    // Aggregate personality indicators from answers
    const scores: Record<string, number> = {};
    
    answers.forEach(answer => {
      Object.entries(answer.personalityIndicators).forEach(([key, value]) => {
        if (!scores[key]) scores[key] = 0;
        scores[key] += value;
      });
    });
    
    // Find dominant personality type
    let maxScore = 0;
    let dominantType = "";
    
    Object.entries(scores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score;
        dominantType = type;
      }
    });
    
    // Get the personality result
    const result = results.find(r => r.type === dominantType) || results[0];
    setPersonalityResult(result);
  };
  
  const restartQuiz = () => {
    setCurrentScreen("welcome");
    setCurrentQuestion(1);
    setAnswers([]);
    setPersonalityResult(null);
  };
  
  const hasAnsweredCurrentQuestion = () => {
    return answers.some(a => a.questionId === currentQuestion);
  };
  
  const getProgressPercentage = () => {
    return Math.round((currentQuestion / totalQuestions) * 100);
  };
  
  return (
    <QuizContext.Provider value={{
      currentScreen,
      currentQuestion,
      totalQuestions,
      answers,
      personalityResult,
      startQuiz,
      goToNextQuestion,
      goToPreviousQuestion,
      selectOption,
      calculateResults,
      restartQuiz,
      hasAnsweredCurrentQuestion,
      getProgressPercentage
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
