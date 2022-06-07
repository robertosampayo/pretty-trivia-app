import { record, question } from "../../interfaces";

export type State = {
  title: string;
  questions: question[];
  records: record[];
  page: number;
  score: number;
};

type Reducer<State, Action> = (state: State, action: Action) => State;
