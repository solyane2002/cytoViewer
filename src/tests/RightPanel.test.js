/* eslint-disable testing-library/prefer-screen-queries */
import * as testLibrary from "@testing-library/react";

import Header from "../components/Header";
import MainViewer from "../components/MainViewer";

import RightPanel from "../components/RightPanel";

jest.mock("../components/Header");
jest.mock("../components/MainViewer");

describe("RightPanel component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    Header.mockImplementation(() => <div>mock-header</div>);
    MainViewer.mockImplementation(() => <div>mock-main</div>);
  });

  test("renders RightPanel with header and main panels", () => {
    const { getByText } = testLibrary.render(<RightPanel />);
    expect(getByText("mock-header")).toBeInTheDocument();
    expect(getByText("mock-main")).toBeInTheDocument();
  });
});
