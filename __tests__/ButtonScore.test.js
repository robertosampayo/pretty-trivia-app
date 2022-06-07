import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonScore from "../components/ButtonScore/index";

describe("<ButtonScore />", () => {
  test("render ButtonScore", () => {
    render(<ButtonScore text={`PLAY AGAIN?`} handleClick={() => jest.fn()} />);
  });

  test("render ButtonScore with width and height", () => {
    render(
      <ButtonScore
        text={`PLAY AGAIN?`}
        handleClick={() => jest.fn()}
        width={90}
        height={90}
      />
    );
  });
});
