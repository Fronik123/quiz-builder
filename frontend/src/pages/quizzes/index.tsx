import React from "react";
import api from "../../services/api";
import QuizzesScreen from "@/screens/QuizzesScreen";
import { QuizT } from "@/types/quiz.types";

type QuizProps = {
  quizs: QuizT[] | [];
};

export default function Quizzes({ quizs }: QuizProps) {
  return <QuizzesScreen quizs={quizs} />;
}

export async function getServerSideProps() {
  try {
    const res = await api.get("/quizzes");
    const data = res.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
