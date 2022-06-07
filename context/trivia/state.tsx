import React, { useReducer, Reducer } from "react";
import TriviaReducer from "./reducer";
import { ActionsType } from "./actions";
import { State } from "./types";
import { initialState } from "./reducer";

type Dispatch = (action: ActionsType) => void;
type TriviaProviderProps = { children: React.ReactNode };

const TriviaStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function TriviaProvider({ children }: TriviaProviderProps) {
  const [state, dispatch] = useReducer(TriviaReducer, initialState);

  const value = { state, dispatch };
  return (
    <TriviaStateContext.Provider value={value}>
      {children}
    </TriviaStateContext.Provider>
  );
}

function useTrivia() {
  const context = React.useContext(TriviaStateContext);
  if (context === undefined) {
    throw new Error("useTrivia must be used within a TriviaProvider");
  }
  return context;
}

export { TriviaStateContext, TriviaProvider, useTrivia };
