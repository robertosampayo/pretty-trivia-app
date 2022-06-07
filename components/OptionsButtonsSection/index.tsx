import { FC } from "react";
import {
  ContainerOptionsButtons,
  ButtonOptions,
} from "./OptionsButtonsSection.style";
import errorIcon from "./images/error.png";
import okIcon from "./images/ok.png";
import Image from "next/image";
import { OptionsButtonsSectionProps, Option } from "../../interfaces";

const OptionsButtonsSection: FC<OptionsButtonsSectionProps> = ({
  handleClick,
  width = 90,
  height = 90,
}) => {
  return (
    <ContainerOptionsButtons>
      <ButtonOptions
        data-testid="yes-option"
        bWidth={width}
        bHeight={height}
        onClick={() => handleClick(Option.Yes)}
      >
        <Image alt="yes option" src={okIcon} width={width} height={height} />
      </ButtonOptions>
      <ButtonOptions
        data-testid="no-option"
        bWidth={width}
        bHeight={height}
        onClick={() => handleClick(Option.No)}
      >
        <Image alt="no option" src={errorIcon} width={width} height={height} />
      </ButtonOptions>
    </ContainerOptionsButtons>
  );
};

export default OptionsButtonsSection;
