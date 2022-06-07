import styled from "styled-components";
import { device } from "../../styles/devices";

interface ButtonProps {
  readonly downIcon?: boolean;
  readonly rightIcon?: boolean;
}

interface SpanOrder {
  readonly rightSpace?: boolean;
  readonly leftSpace?: boolean;
  readonly downSpace?: boolean;
}

export const ButtonContainer = styled.div`
  position: relative;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
  background: pink;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #dde3e0;
`;

export const Button = styled.button<ButtonProps>`
  border: 0;
  display: flex;
  flex-direction: ${(props) =>
    props.downIcon ? "column" : props.rightIcon ? "row" : "column"};
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  font-size: 1.6rem;
  padding: ${(props) => (props.downIcon ? "0" : "1em")};

  @media ${device.mobileS} {
    padding: ${(props) => (props.downIcon ? "0" : "0.5em")};
  }

  @media ${device.tablet} {
    padding: ${(props) => (props.downIcon ? "0" : "0.4em")};
  }
`;

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
