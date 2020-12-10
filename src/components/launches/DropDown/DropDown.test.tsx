import React from "react";
import DropDown from ".";

import { render, RenderResult, fireEvent } from "@testing-library/react";

let documentBody: RenderResult;
const mockfilteredYears: string[] = [
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
        filterYears={mockfilteredYears}
        selectedYear={mockSelectedYear}
        setSelectedYear={mockSetSelectedYear}
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

  it("has list of years", async () => {
    const dropdown = documentBody.getByRole("button");
    fireEvent.click(dropdown);
    const items = await documentBody.queryAllByRole("listitem");
    expect(items).toHaveLength(7);
    expect(documentBody.queryByText("2006")).toBeInTheDocument();
  });

  it("button text changes", async () => {
    const { rerender } = documentBody;
    rerender(
      <DropDown
        filterYears={mockfilteredYears}
        selectedYear={"2006"}
        setSelectedYear={mockSetSelectedYear}
      />
    );
    fireEvent.click(documentBody.getByRole("button"));
    expect(documentBody.getByText("Filtered by 2006")).toBeInTheDocument();
  });
});
