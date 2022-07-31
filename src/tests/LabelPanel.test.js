/* eslint-disable testing-library/prefer-screen-queries */
import * as testLibrary from "@testing-library/react";

import LabelPanel from "../components/LabelPanel";

describe("LabelPanel component", () => {
  test("renders LabelPanel", () => {
    const { getByText } = testLibrary.render(
      <LabelPanel label={"LabelPanel"} />
    );
    expect(getByText("LabelPanel")).toBeInTheDocument();
  });
});
