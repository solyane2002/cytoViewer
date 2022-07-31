/* eslint-disable testing-library/prefer-screen-queries */
import * as testLibrary from "@testing-library/react";

import GraphViewer from "../components/GraphViewer";
import CytoscapeComponent from "react-cytoscapejs";

jest.mock("cytoscape", () => jest.fn());
jest.mock("react-cytoscapejs", () => jest.fn());

const mockCy = {
  on: jest.fn(),
  removeAllListeners: jest.fn(),
};

const onTappedHandler = jest.fn();

describe("GraphViewer component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    CytoscapeComponent.mockImplementation(() => (
      <div>mock-cytoscape-component</div>
    ));
  });

  test("renders GraphViewer", () => {
    const { getByText } = testLibrary.render(<GraphViewer />);
    expect(getByText("mock-cytoscape-component")).toBeInTheDocument();
  });

  test("calls GraphViewer initListeners", async () => {
    testLibrary.render(<GraphViewer onTapped={onTappedHandler} />);

    testLibrary.act(() => {
      CytoscapeComponent.mock.calls[0][0].cy(mockCy);
    });

    await testLibrary.waitFor(() => {
      expect(mockCy.on).toHaveBeenCalledWith(
        "tap",
        "node",
        expect.any(Function)
      );
    });
  });

  test("calls cy removeAllListeners on unmount", async () => {
    const { unmount } = testLibrary.render(
      <GraphViewer onTapped={onTappedHandler} />
    );
    testLibrary.act(() => {
      CytoscapeComponent.mock.calls[0][0].cy(mockCy);
    });

    unmount();

    await testLibrary.waitFor(() => {
      expect(mockCy.removeAllListeners).toHaveBeenCalled();
    });
  });
});
