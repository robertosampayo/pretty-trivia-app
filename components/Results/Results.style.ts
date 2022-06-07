import styled from "styled-components";
import { device } from "../../styles/devices";

interface ResultPage {
  readonly isResultPage?: boolean;
}

interface SpanOrder {
  readonly rightSpace?: boolean;
  readonly leftSpace?: boolean;
  readonly downSpace?: boolean;
}

export const Span = styled.span<SpanOrder>`
  margin: ${(props) =>
    props.rightSpace
      ? "0 1rem 0 0"
      : props.leftSpace
      ? "0 0 0 1rem"
      : props.downSpace
      ? "0 0 1em 0"
      : "0"};
`;

export const QuestionSection = styled.section`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;

  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  @media ${device.laptop} {
    gap: 3vh;
  }
`;

export const Container = styled.section<ResultPage>`
  display: grid;
  position: relative;
  grid-template-rows: ${(props) =>
    props.isResultPage ? "0.1fr 1fr" : "1fr 0.2fr"};
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: ${(props) => (props.isResultPage ? "85vh" : "100%")};
  overflow: ${(props) => (props.isResultPage ? "auto" : "hidden")};
  text-align: center;

  @media ${device.tablet} {
    overflow: hidden;
  }
`;

export const ScoreContainer = styled.section`
  display: grid;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  top: 0px;
  align-items: center;
  height: auto;

  @media ${device.mobileS} {
    row-gap: 0vh;
    top: 3vh;
  }

  @media ${device.mobileL} {
    row-gap: 5vh;
    top: 5vh;
  }

  @media ${device.tablet} {
    width: 75%;
    row-gap: 0vh;
    top: 0;
    grid-template-columns: 1fr 1fr;
    column-gap: 5vh;
    overflow: hidden;
    height: 75vh;
  }

  @media ${device.laptop} {
    width: 60%;
    row-gap: 0vh;
    top: 0%;
    grid-template-columns: 1fr 1fr;
    column-gap: 5vh;
  }

  @media ${device.laptopL} {
    width: 60%;
    row-gap: 0vh;
    top: 0%;
    grid-template-columns: 1fr 1fr;
    column-gap: 5vh;
  }

  @media ${device.desktop} {
    width: 60%;
    row-gap: 0vh;
    top: 0%;
    grid-template-columns: 1fr 1fr;
    column-gap: 5vh;
  }
`;
