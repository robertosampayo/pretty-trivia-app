import { FC } from "react";
import { ButtonContainer, Button, Span } from "./ButtonStart.style";
import Image from "next/image";
import play from "./images/play.png";

interface Props {
  handleClick: () => void;
  text: string;
  width?: number;
  height?: number;
}

const ButtonStart: FC<Props> = ({
  handleClick,
  text,
  width = 80,
  height = 80,
}) => {
  return (
    <ButtonContainer>
      <Button onClick={handleClick} downIcon>
        <Span downSpace>{text}</Span>
        <Image alt="start" src={play} width={width} height={height} />
      </Button>
    </ButtonContainer>
  );
};

export default ButtonStart;
