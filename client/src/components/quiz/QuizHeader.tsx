import { Brain } from "lucide-react";

export default function QuizHeader() {
  return (
    <header className="px-5 py-4 flex items-center border-b border-gray-100">
      <div className="flex items-center">
        <Brain className="text-primary text-xl mr-2" />
        <h1 className="font-poppins font-semibold text-lg text-foreground">PersonalityQuiz</h1>
      </div>
    </header>
  );
}
