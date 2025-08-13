import React, { useEffect, useState } from "react";
import api from "@/services/api";
import { QuizT } from "@/types/quiz.types";
import Button from "@/UI/Button";
import { useRouter } from "next/router";
import QuizzesList from "@/component/QuizzesList";
import { ImagesComponents } from "@/services/ImagesService";
import Image from "next/image";

type QuizProps = {
  quizs: QuizT[];
};

export default function QuizzesScreen({ quizs }: QuizProps) {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<QuizT[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQuizzes = () => {
    api
      .get("/quizzes")
      .then((res) => {
        setQuizzes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!quizs) {
      fetchQuizzes();
    } else {
      setQuizzes(quizs);
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/quizzes/${id}`);
      fetchQuizzes();
    } catch (err) {
      alert("error");
      console.error(err);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleDetails = (id: number) => {
    router.push(`/quizzes/${id}`);
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      {quizzes.length === 0 ? (
        <div className="text-center flex flex-col">
          <h1 className="m-10 text-3xl font-bold">No quizzes found</h1>

          <Button blue title="Back" handleClick={handleBack} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={ImagesComponents.hatGraduate}
            alt="hat Graduate"
            width={100}
            height={100}
          />
          <h1 className="text-center text-2xl font-bold">List of quizzes</h1>

          <ul className="w-full mb-5">
            {quizzes.map((q) => (
              <li
                key={q.id}
                onClick={() => handleDetails(q.id)}
                className="px-5 py-2 mt-3 border border-yellow-400 p-3 rounded-[10px] shadow-md shadow-yellow-500/50"
              >
                <QuizzesList
                  quiz={q}
                  handleClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    handleDelete(q.id);
                  }}
                />
              </li>
            ))}
          </ul>

          <Button blue title="Back" handleClick={handleBack} />
        </div>
      )}
    </div>
  );
}
