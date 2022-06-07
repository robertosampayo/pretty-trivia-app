import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MainPage from "../components/MainPage/index";
import { TriviaStateContext } from "../context/trivia/state";
import { mockQuestions } from "../__mocks__/questions";

const state = {
  title: "Welcome to the trivia challenge!",
  records: [],
  questions: mockQuestions,
  page: 0,
  score: 0,
};

describe("<MainPage />", () => {
  test("It should change question after click in an option button", async () => {
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

    fireEvent.click(startButton);

    await waitFor(() => {
      expect(screen.getByText(mockQuestions[0].question)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByRole("img", {
          name: /yes option/i,
        })
      ).toBeInTheDocument();
    });

    const yesButton = screen.getByRole("img", {
      name: /yes option/i,
    });

    const noButton = screen.getByRole("img", {
      name: /no option/i,
    });

    fireEvent.click(yesButton);
    fireEvent.click(noButton);
    expect(dispatch).toHaveBeenCalledTimes(5);
  });

  test("It should restart the game after click in play again button", async () => {
    const stateWithRecords = {
      title: "Welcome to the trivia challenge!",
      records: [
        {
          question:
            "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
          userAnsweredOk: "false",
        },
        {
          question: "The Kingdom of Prussia briefly held land in Estonia.",
          userAnsweredOk: "true",
        },
        {
          question:
            "Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.",
          userAnsweredOk: "false",
        },
        {
          question:
            "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
          userAnsweredOk: "true",
        },
        {
          question:
            "The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;",
          userAnsweredOk: "true",
        },
        {
          question:
            "The chemical element Lithium is named after the country of Lithuania.",
          userAnsweredOk: "true",
        },
        {
          question:
            "During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.",
          userAnsweredOk: "true",
        },
        {
          question:
            "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
          userAnsweredOk: "false",
        },
        {
          question: "The term &quot;GTO&quot; was originated by Ferrari?",
          userAnsweredOk: "true",
        },
        {
          question:
            "In The Witcher 3, the Zoltan Chivay Gwent card can be found under the Hanged Man&#039;s Tree.",
          userAnsweredOk: "true",
        },
      ],
      questions: mockQuestions,
      page: 10,
      score: 7,
    };

    const user = userEvent.setup();
    const dispatch = jest.fn();

    render(
      <TriviaStateContext.Provider
        value={{ state: stateWithRecords, dispatch }}
      >
        <MainPage questions={mockQuestions} restart={jest.fn()} />
      </TriviaStateContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/play again\?/i)).toBeInTheDocument();
    });

    const playAgainButton = screen.getByText(/play again\?/i);

    fireEvent.click(playAgainButton);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  test("It should click in NO option", async () => {
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
          name: /no option/i,
        })
      ).toBeInTheDocument();
    });

    const noButton = screen.getByRole("img", {
      name: /no option/i,
    });

    user.click(noButton);

    await waitFor(() => {
      expect(screen.getByText(mockQuestions[0].question)).toBeInTheDocument();
    });
  });
});
