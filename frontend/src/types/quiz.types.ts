export interface QuizT {
  id: number;
  title: string;
  type: string;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  type: string;
}
