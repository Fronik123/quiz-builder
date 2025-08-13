import QuizInfo from "@/component/QuizInfo";
import api from "@/services/api";
import { QuizT } from "@/types/quiz.types";
import Button from "@/UI/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type QuizProps = {
  currentQuiz: QuizT;
};

export default function QuizzesDetailsScreen({ currentQuiz }: QuizProps) {
  const router = useRouter();
  const { id } = router.query;

  const [quiz, setQuiz] = useState<QuizT | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    if (!currentQuiz) {
      api
        .get(`/quizzes/${id}`)
        .then((res) => {
          setQuiz(res.data);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setQuiz(currentQuiz);
      setLoading(false);
    }
  }, [id]);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/quizzes/${id}`);
      router.back();
    } catch (err) {
      alert("error");
      console.error(err);
    }
  };

  const handleBack = () => {
    router.back();
  };

  if (loading) return <p>Loading...</p>;
  if (!quiz) return <p>Quiz not found</p>;

  return (
    <div className="max-w-xl mx-auto p-5 ">
      <h1 className="text-center text-2xl font-bold ">Details Quiz</h1>

      <div className=" border border-yellow-400 p-3 rounded-[10px] shadow-md shadow-yellow-500/50 mb-5 mt-10">
        <QuizInfo handleDelete={() => handleDelete(quiz.id)} quiz={quiz} />
      </div>

      <Button blue title="Back" handleClick={handleBack} />
    </div>
  );
}
