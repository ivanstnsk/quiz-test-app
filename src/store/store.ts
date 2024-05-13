import { create } from "zustand";

interface Question {
  title: string;
  variants: string[];
  answer: string;
  points: number;
}

type QuizPhase = "start" | "quiz" | "finish";

export type QuizAnswerStatus = "default" | "correct" | "error";

type Store = {
  score: number;
  questions: Question[];
  answers: string[];
  current: number;
  phase: QuizPhase;
  hasPrev: () => boolean;
  hasNext: () => boolean;
  start: () => void;
  finish: () => void;
  next: () => void;
  prev: () => void;
  setAnswer: (answer: string) => void;
  getAnswer: () => string;
  getAnswerStatus: () => QuizAnswerStatus;
  getPossibleScore: () => number;
};

const QUESTIONS: Question[] = [
  {
    title: "1 + 1",
    variants: ["2", "3", "4", "100"],
    answer: "2",
    points: 10,
  },
  {
    title: "2 + 3",
    variants: ["11", "5", "7", "4"],
    answer: "5",
    points: 10,
  },
];

export const useStore = create<Store>()((set, get) => ({
  score: 0,
  questions: QUESTIONS,
  answers: QUESTIONS.map(() => ""),
  current: 0,
  phase: "start",
  hasPrev: () => get().current > 0,
  hasNext: () => get().current < get().questions.length,
  start: () =>
    set((state: any) => ({
      phase: "quiz",
      answers: state.questions.map(() => ""),
    })),
  finish: () =>
    set((state: any) => ({
      phase: "start",
      current: 0,
      answers: state.questions.map(() => ""),
    })),
  next: () =>
    set((state: any) => {
      if (state.phase !== "quiz") {
        return state;
      }
      if (state.current + 1 > state.questions.length - 1) {
        return {
          phase: "finish",
        };
      }
      return {
        current: state.current + 1,
      };
    }),
  prev: () =>
    set((state) => {
      if (state.phase !== "quiz") {
        return state;
      }
      if (state.current - 1 < 0) {
        return state;
      }
      return {
        current: state.current - 1,
      };
    }),
  setAnswer: (answer: string) =>
    set((state: any) => {
      if (state.answers[state.current]) {
        return state;
      }

      const question = state.questions[state.current];
      const nextAnswers = [...state.answers];
      nextAnswers[state.current] = answer;
      const isAnswerCorrect = question.answer === answer;

      return {
        answers: nextAnswers,
        score: isAnswerCorrect ? state.score + question.points : state.score,
      };
    }),
  getAnswer: () => get().answers[get().current],
  getAnswerStatus: () => {
    const answer = get().answers[get().current];

    if (!answer) {
      return "default";
    }

    const correctAnswer = get().questions[get().current].answer;

    if (answer === correctAnswer) {
      return "correct";
    }
    return "error";
  },
  getPossibleScore: () =>
    get().questions.reduce((acc: number, q: Question) => acc + q.points, 0),
}));
