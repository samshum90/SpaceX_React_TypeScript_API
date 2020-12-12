import React from "react";
import DropDown from ".";

import { render, RenderResult, fireEvent } from "@testing-library/react";

let documentBody: RenderResult;
const mockFilteredYears: string[] = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
];
const mockSelectedYear: string = "";
const mockSetSelectedYear = jest.fn();

describe("<DropDown />", () => {
  beforeEach(() => {
    documentBody = render(
      <DropDown
        filterYears={mockFilteredYears}
        selectedYear={mockSelectedYear}
        handleFilterClick={mockSetSelectedYear}
      />
    );
  });
  it("matches snapshot", () => {
    expect(documentBody).toMatchSnapshot();
  });

  it("has text", () => {
    expect(documentBody.getByRole("button")).toHaveTextContent(
      "Filter by Year"
    );
    expect(documentBody.getByAltText("Filter Icon")).toBeInTheDocument();
  });

  it("has a dropdown list of years", async () => {
    const dropdown = documentBody.getByRole("button");
    fireEvent.click(dropdown);

    const listItems = await documentBody.queryAllByRole("listitem");
    expect(listItems).toHaveLength(7);
    for (let i = 0; i < mockFilteredYears.length; i++) {
      expect(listItems[i]).toHaveTextContent(mockFilteredYears[i]);
    }
  });

  it("button text changes", async () => {
    const { rerender } = documentBody;
    rerender(
      <DropDown
        filterYears={mockFilteredYears}
        selectedYear={"2006"}
        handleFilterClick={mockSetSelectedYear}
      />
    );
    expect(documentBody.getByText("Filtered by 2006")).toBeInTheDocument();
  });

  it("runs method on year click", async () => {
    const dropdown = documentBody.getByRole("button");
    fireEvent.click(dropdown);

    const year = await documentBody.findByText("2006");
    fireEvent.click(year);
    expect(mockSetSelectedYear).toHaveBeenCalledTimes(1);
  });
});
