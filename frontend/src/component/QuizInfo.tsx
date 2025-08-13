import { QuizT } from "@/types/quiz.types";
import ShowTypeQuiz from "./ShowTypeQuiz";
import Button from "@/UI/Button";

interface QuizInfoProps {
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  quiz: QuizT;
}

export default function QuizInfo({ quiz, handleDelete }: QuizInfoProps) {
  return (
    <div className="flex flex-row justify-between w-full">
      <div>
        <h2 className="text-2xl">Title</h2>
        <p>{quiz.title}</p>

        <div className="mt-5">
          {quiz.questions.map((item, index) => (
            <div key={item.id} className="mt-2">
              <h3 className="mt-1 text-2xl">Question #{index + 1}:</h3>

              <p>{item.text}</p>

              <h3 className="text-2xl">Type:</h3>
              <ShowTypeQuiz type={item.type} />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[110px]">
        <Button handleClick={handleDelete} title="Delete" red />
      </div>
    </div>
  );
}
