import { FC } from "react";
import { ButtonContainerScore, Button, Span } from "./ButtonScore.style";
import Image from "next/image";
import checkIcon from "./images/check.png";

interface Props {
  handleClick: () => void;
  text: string;
  width?: number;
  height?: number;
}

const ButtonScore: FC<Props> = ({
  handleClick,
  text,
  width = 80,
  height = 80,
}) => {
  return (
    <ButtonContainerScore>
      <Button onClick={handleClick} rightIcon>
        <Span rightSpace>{text}</Span>
        <Image src={checkIcon} width={80} height={80} />
      </Button>
    </ButtonContainerScore>
  );
};

export default ButtonScore;
