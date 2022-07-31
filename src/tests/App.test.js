/* eslint-disable testing-library/prefer-screen-queries */
import * as testLibrary from "@testing-library/react";
import App from "../App";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

jest.mock("../components/LeftPanel");
jest.mock("../components/RightPanel");

describe("App component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    LeftPanel.mockImplementation(() => <div>mock-left-panel</div>);
    RightPanel.mockImplementation(() => <div>mock-right-panel</div>);
  });

  test("renders App with left and right panels", () => {
    const { getByText } = testLibrary.render(<App />);
    expect(getByText("mock-left-panel")).toBeInTheDocument();
    expect(getByText("mock-right-panel")).toBeInTheDocument();
  });
});
