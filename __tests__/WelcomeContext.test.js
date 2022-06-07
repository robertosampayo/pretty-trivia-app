import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import WelcomeContent from "../components/ContentSection/components/WelcomeContent";

describe("<WelcomeContent />", () => {
  test("render WelcomeContent and get the main instructions of the game", () => {
    const { getByText } = render(
      <WelcomeContent
        text={`You will be presented with 10 True or False questions.`}
        secondText={`Can you score 100%?`}
      />
    );

    expect(
      getByText(/You will be presented with 10 True or False questions./i)
    ).toBeInTheDocument();
    expect(getByText(/Can you score 100%?/i)).toBeInTheDocument();
  });

  test("render WelcomeContent without second text", () => {
    const { getByText } = render(
      <WelcomeContent
        text={`You will be presented with 10 True or False questions.`}
      />
    );

    expect(
      getByText(/You will be presented with 10 True or False questions./i)
    ).toBeInTheDocument();
  });
});
