import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar/index";

describe("<Navbar />", () => {
  test("render Navbar", () => {
    render(<Navbar title={`Welcome to the trivia challenge!`} />);
  });

  test("render Navbar and get a welcome text", () => {
    const { getByText } = render(
      <Navbar title={`Welcome to the trivia challenge!`} />
    );

    expect(getByText(/Welcome to the trivia challenge!/i)).toBeInTheDocument();
  });
});
