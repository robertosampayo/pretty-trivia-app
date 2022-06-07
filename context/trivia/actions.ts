import { record, question } from "../../interfaces";

interface ActionType {
  type: string;
}

interface SetTitleAction extends ActionType {
  payload: string;
}

interface SetRecordAction extends ActionType {
  payload: record;
}

interface SetPageScoreAction extends ActionType {
  payload: number;
}

interface SetQuestionsAction extends ActionType {
  payload: question[];
}

// Trivia
export type ActionsType =
  | SetTitleAction
  | SetRecordAction
  | SetPageScoreAction
  | SetQuestionsAction;

export const SET_NAV_TITLE = "SET_NAV_TITLE";
export const SAVE_QUESTIONS = "SAVE_QUESTIONS";
export const GET_QUESTIONS = "SAVE_QUESTIONS";
export const GET_RECORD = "GET_RECORD";
export const SET_RECORD = "SET_RECORD";
export const SET_SCORE = "SET_SCORE";
export const RESTART_GAME = "RESTART_GAME";
export const SET_PAGE = "SET_PAGE";
export const GO_TO_NEXT_PAGE = "GO_TO_NEXT_PAGE";
