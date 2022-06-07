import React, { useReducer } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MainPage from "../components/MainPage";
import { TriviaStateContext } from "../context/trivia/state";
import { mockQuestions } from "../__mocks__/questions";

const state = {
  title: "Welcome to the trivia challenge!",
  records: [],
  questions: mockQuestions,
  page: 0,
  score: 0,
};

describe("<Page />", () => {
  test("Should show start message and a button", async () => {
    const dispatch = jest.fn();

    render(
      <TriviaStateContext.Provider value={{ state, dispatch }}>
        <MainPage questions={mockQuestions} restart={jest.fn()} />
      </TriviaStateContext.Provider>
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /You will be presented with 10 True or False questions./i
        )
      ).toBeInTheDocument();
    });

    expect(screen.getByText(/BEGIN/i)).toBeInTheDocument();
  });

  test("Should show the first question after click in start button", async () => {
    const dispatch = jest.fn();
    const user = userEvent.setup();

    render(
      <TriviaStateContext.Provider value={{ state, dispatch }}>
        <MainPage questions={mockQuestions} restart={jest.fn()} />
      </TriviaStateContext.Provider>
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /You will be presented with 10 True or False questions./i
        )
      ).toBeInTheDocument();
    });

    const startButton = screen.getByRole("img", { name: /start/i });

    user.click(startButton);

    await waitFor(() => {
      expect(screen.getByText(mockQuestions[0].question)).toBeInTheDocument();
    });

    expect(dispatch).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(
        screen.getByRole("img", {
          name: /yes option/i,
        })
      ).toBeInTheDocument();
    });
  });
});
