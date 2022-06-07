import { FC, useState } from "react";
import WelcomeContent from "./components/WelcomeContent";
import Questions from "./components/Questions";
import { Section, Container } from "./ContentSection.style";
import OptionsButtonsSection from "../OptionsButtonsSection";
import ButtonStart from "../ButtonStart";
import { Transition, animated } from "react-spring";
import { ContentSectionProps } from "../../interfaces";
import { useTrivia } from "../../context/trivia/state";
import * as Actions from "../../context/trivia/actions";

const ContentSection: FC<ContentSectionProps> = ({
  isTriviaStarted,
  startGame,
}) => {
  const [animate, setAnimation] = useState<boolean>(false);
  const { state, dispatch } = useTrivia();

  const handleClick = (answer: string) => {
    if (state.page < 9) {
      dispatch({
        type: Actions.SET_NAV_TITLE,
        payload: state.questions[state.page + 1].category,
      });
    }

    dispatch({
      type: Actions.GO_TO_NEXT_PAGE,
      payload: answer,
    });
  };

  return (
    <>
      <Transition
        items={animate}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        onRest={() => setAnimation(true)}
      >
        {(styles, item) =>
          item && (
            <animated.div style={styles}>
              <Container>
                <Section>
                  {!isTriviaStarted ? (
                    <WelcomeContent
                      text={`You will be presented with 10 True or False questions.`}
                      secondText={`Can you score 100%?`}
                    />
                  ) : (
                    <Questions
                      question={state.questions[state.page].question}
                      pageNumber={state.page}
                    />
                  )}
                </Section>

                {isTriviaStarted ? (
                  <OptionsButtonsSection handleClick={handleClick} />
                ) : (
                  <ButtonStart text={`BEGIN`} handleClick={startGame} />
                )}
              </Container>
            </animated.div>
          )
        }
      </Transition>
    </>
  );
};

export default ContentSection;
