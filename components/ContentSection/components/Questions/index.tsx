import { FC } from "react";
import { ContentSection, QuestionText, SpanText } from "./Questions.style";

interface Props {
  question: string;
  pageNumber: number;
}

const Questions: FC<Props> = ({ question, pageNumber }) => {
  return (
    <>
      <ContentSection>
        <QuestionText
          dangerouslySetInnerHTML={{
            __html: question,
          }}
        />

        <SpanText>{pageNumber + 1} of 10</SpanText>
      </ContentSection>
    </>
  );
};

export default Questions;
