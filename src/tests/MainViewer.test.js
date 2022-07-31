/* eslint-disable testing-library/prefer-screen-queries */
import * as testLibrary from "@testing-library/react";
import MainViewer from "../components/MainViewer";

import LabelPanel from "../components/LabelPanel";
import GraphViewer from "../components/GraphViewer";

jest.mock("../components/LabelPanel");
jest.mock("../components/GraphViewer", () => jest.fn());

describe("MainViewer component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    LabelPanel.mockImplementation(() => <div>mock-label</div>);
    GraphViewer.mockImplementation(() => <div>mock-graph</div>);
  });
  test("renders MainViewer with graph-viewer and label panels", () => {
    const { getByText } = testLibrary.render(<MainViewer />);
    expect(getByText("mock-label")).toBeInTheDocument();
    expect(getByText("mock-graph")).toBeInTheDocument();
  });
  test("renders the label selected with graph-viewer", async () => {
    testLibrary.render(<MainViewer />);

    testLibrary.act(() => {
      GraphViewer.mock.calls[0][0].onTapped({ id: () => "label-tapped" });
    });

    await testLibrary.waitFor(() => {
      expect(LabelPanel).toHaveBeenNthCalledWith(
        2,
        { label: "label-tapped" },
        {}
      );
    });
  });
});
