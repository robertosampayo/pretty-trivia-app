import { FC } from "react";
import { ContentSection, WelcomeText, H4 } from "./WelcomContent.style";

interface Props {
  text: string;
  secondText?: string;
}

const WelcomeContent: FC<Props> = ({ text, secondText }) => {
  return (
    <>
      <ContentSection>
        <WelcomeText>{text}</WelcomeText>
        {secondText ? <H4>{secondText}</H4> : null}
      </ContentSection>
    </>
  );
};

export default WelcomeContent;
