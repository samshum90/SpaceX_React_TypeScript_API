import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  const handleReloadClick = jest.fn();
  it('shows "Launches" text and image on page load', () => {
    const { getByTestId, getByAltText, getByRole } = render(
      <Header handleReloadClick={handleReloadClick} />
    );
    const title = "Launches";

    expect(getByTestId("header")).toHaveTextContent(title);
    expect(getByAltText("Space X logo")).toBeInTheDocument();
    expect(getByAltText("Refresh Icon")).toBeInTheDocument();
    expect(getByRole("button")).toHaveTextContent("Reload Data");
  });
});
