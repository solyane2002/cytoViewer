/* eslint-disable testing-library/prefer-screen-queries */
import * as testLibrary from "@testing-library/react";

import Header from "../components/Header";

describe("Header component", () => {
  test("renders Header", () => {
    const { getByText } = testLibrary.render(<Header />);
    expect(getByText("Header")).toBeInTheDocument();
  });
});
