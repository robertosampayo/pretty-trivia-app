import styled from "styled-components";

interface IButtonOptions {
  bWidth?: number;
  bHeight?: number;
}

export const ContainerOptionsButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 60%;
  margin: 0 auto;
  position: relative;
  height: 15vh;
`;

export const ButtonOptions = styled.button<IButtonOptions>`
  width: ${(props) => (props.bWidth ? `${props.bWidth}px` : "90px")};
  height: ${(props) => (props.bHeight ? `${props.bHeight}px` : "90px")};
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  background: transparent;
  border: 0;
  cursor: pointer;

  > span {
    width: 90px;
    height: 90px;
  }
`;
