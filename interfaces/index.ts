export type question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export interface PageProps {
  questions: question[];
  restart: () => void;
}

export interface ResultsProps {
  resetGame: () => void;
}

export type record = {
  question: string;
  userAnsweredOk: string;
};

export interface ContentSectionProps {
  isTriviaStarted: boolean;
  startGame: () => void;
}

export interface OptionsButtonsSectionProps {
  handleClick: (answer: string) => void;
  width?: number;
  height?: number;
}

export enum Option {
  Yes = "true",
  No = "false",
}
