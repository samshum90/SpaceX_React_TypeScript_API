import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  it("runs handleReloadClick on click", async () => {
    const { getByText } = render(
      <Header handleReloadClick={handleReloadClick} />
    );
    const button = getByText("Reload Data");
    fireEvent.click(button);
    expect(handleReloadClick).toHaveBeenCalledTimes(1);
  });
});
