import * as React from "react";
import * as Actions from "./actions";
import { State } from "./types";
import { record, question } from "../../interfaces";

export const initialState = {
  title: "Welcome to the trivia challenge!",
  records: [],
  questions: [],
  page: 0,
  score: 0,
};

function TriviaReducer(state: State, action: Actions.ActionsType): State {
  switch (action.type) {
    case Actions.SET_NAV_TITLE: {
      return { ...state, title: <string>action.payload };
    }
    case Actions.RESTART_GAME: {
      return { ...initialState };
    }
    case Actions.SAVE_QUESTIONS: {
      return {
        ...initialState,
        questions: <question[]>action.payload,
      };
    }
    case Actions.GO_TO_NEXT_PAGE: {
      const correactAnswer = String(
        state.questions[state.page].correct_answer
      ).toLocaleLowerCase();

      return {
        ...state,
        page: state.page + 1,
        score: action.payload == correactAnswer ? state.score + 1 : state.score,
        records: [
          ...state.records,
          {
            question: state.questions[state.page].question,
            userAnsweredOk: action.payload == correactAnswer ? "true" : "false",
          },
        ],
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default TriviaReducer;
