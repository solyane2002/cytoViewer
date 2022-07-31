/* eslint-disable testing-library/prefer-screen-queries */
import * as testLibrary from "@testing-library/react";

import LeftPanel from "../components/LeftPanel";

describe("LeftPanel component", () => {
  test("renders LeftPanel", () => {
    const { getByText } = testLibrary.render(<LeftPanel />);
    expect(getByText("LeftPanel")).toBeInTheDocument();
  });
});
