import { QuizT } from "@/types/quiz.types";

import QuizInfo from "./QuizInfo";

interface QuizzesListProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  quiz: QuizT;
}

export default function QuizzesList({ quiz, handleClick }: QuizzesListProps) {
  return (
    <div className="flex flex-row justify-between mt-5 cursor-pointer">
      <QuizInfo quiz={quiz} handleDelete={handleClick} />
    </div>
  );
}
