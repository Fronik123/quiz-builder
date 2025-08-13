import api from "@/services/api";
import QuizzesDetailsScreen from "@/screens/QuizzesDetailsScreen";
import { QuizT } from "@/types/quiz.types";
import { GetServerSidePropsContext } from "next";

type QuizProps = {
  quiz: QuizT;
};

export default function QuizDetail({ quiz }: QuizProps) {
  return <QuizzesDetailsScreen currentQuiz={quiz} />;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  const { id } = context.params!;

  try {
    const res = await api.get(`/quizzes/${id}`);
    const data = res.data;

    return {
      props: {
        quiz: data,
      },
    };
  } catch (error) {
    console.error("Error", error);
    return {
      props: {
        quiz: null,
      },
    };
  }
}
