import { FC, useState } from "react";
import { Transition, animated } from "react-spring";
import {
  ScoreContainer,
  Container,
  QuestionSection,
  Span,
} from "./Results.style";
import ButtonScore from "../ButtonScore";
import Image from "next/image";

import errorIcon from "./images/error.png";
import okIcon from "./images/ok.png";
import { ResultsProps } from "../../interfaces";
import { useTrivia } from "../../context/trivia/state";

const Results: FC<ResultsProps> = ({ resetGame }) => {
  const [animate, setAnimation] = useState<boolean>(false);
  const { state } = useTrivia();

  return (
    <Transition
      items={animate}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      onRest={() => setAnimation(true)}
    >
      {(styles, item) =>
        item && (
          <animated.div style={styles}>
            <Container isResultPage>
              <ScoreContainer>
                {state.records.map((record, index) => (
                  <QuestionSection key={index}>
                    <Span>
                      {record.userAnsweredOk == "true" ? (
                        <Image src={okIcon} width={50} height={50} />
                      ) : (
                        <Image src={errorIcon} width={50} height={50} />
                      )}
                    </Span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: record.question,
                      }}
                    />
                  </QuestionSection>
                ))}
              </ScoreContainer>
              <ButtonScore
                text={`PLAY AGAIN?`}
                handleClick={() => resetGame()}
              />
            </Container>
          </animated.div>
        )
      }
    </Transition>
  );
};

export default Results;
