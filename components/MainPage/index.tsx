import { useState, FC } from "react";
import Navbar from "../Navbar";
import { PageProps } from "../../interfaces";

import ContentSection from "../ContentSection";
import Results from "../Results";
import { useTrivia } from "../../context/trivia/state";
import * as Actions from "../../context/trivia/actions";

const MainPage: FC<PageProps> = ({ questions, restart }) => {
  const { state, dispatch } = useTrivia();
  const [isTriviaStarted, startTrivia] = useState<boolean>(false);

  const startGame = () => {
    dispatch({
      type: Actions.SET_NAV_TITLE,
      payload: state.questions[state.page].category,
    });

    startTrivia(true);
  };

  const playAgain = () => {
    startTrivia(false);
    dispatch({ type: Actions.RESTART_GAME, payload: "" });
    restart();
  };

  if (state.page === questions.length) {
    return (
      <>
        <Navbar title={`You Scored ${state.score}/10`} />
        <Results resetGame={playAgain} />
      </>
    );
  }

  return (
    <>
      <Navbar title={state.title} />

      <ContentSection isTriviaStarted={isTriviaStarted} startGame={startGame} />
    </>
  );
};

export default MainPage;
