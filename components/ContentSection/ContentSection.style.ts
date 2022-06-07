import styled from "styled-components";
import { device } from "../../styles/devices";

interface ResultPage {
  readonly isResultPage?: boolean;
}

export const Section = styled.section`
  height: 60vh;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    max-width: 80%;
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
