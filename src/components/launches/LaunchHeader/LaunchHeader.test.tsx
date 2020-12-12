import React from "react";
import LaunchHeader from ".";

import { render, RenderResult, fireEvent } from "@testing-library/react";
import { Launch } from "../../../types/Launch";

let documentBody: RenderResult;
const stubbedLaunches: Launch[] = [
  {
    flight_number: 1,
    mission_name: "Falcon Sat",
    launch_year: "2006",
    launch_date_utc: new Date("2006-03-24T22:30:00.000Z"),
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
  {
    flight_number: 2,
    mission_name: "DemoSat",
    launch_year: "2006",
    launch_date_utc: new Date("2007-03-21T01:10:00.000Z"),
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
  {
    flight_number: 3,
    mission_name: "Trailblazer",
    launch_year: "2008",
    launch_date_utc: new Date("2008-08-29T01:10:00.000Z"),
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
];

const mockAscending = true;
const mockToggleAscending = jest.fn();
const mockYear = "";
const mockSelectedYear = jest.fn();

describe("<LaunchList />", () => {
  beforeEach(() => {
    // Arrange
    documentBody = render(
      <LaunchHeader
        launches={stubbedLaunches}
        ascending={mockAscending}
        handleSortClick={mockToggleAscending}
        selectedYear={mockYear}
        handleFilterClick={mockSelectedYear}
      />
    );
  });
  it("matches snapshot", () => {
    expect(documentBody).toMatchSnapshot();
  });

  it("shows button texts", () => {
    expect(documentBody.getByText("Sort Descending")).toBeInTheDocument();
    expect(documentBody.getByAltText("Sort Icon")).toBeInTheDocument();
  });

  it("button text changes", () => {
    const { rerender } = documentBody;
    rerender(
      <LaunchHeader
        launches={stubbedLaunches}
        ascending={false}
        handleSortClick={mockToggleAscending}
        selectedYear={"2006"}
        handleFilterClick={mockSelectedYear}
      />
    );
    expect(documentBody.getByText("Sort Ascending")).toBeInTheDocument();
    expect(documentBody.getByText("Filtered by 2006")).toBeInTheDocument();
  });

  it("runs on click", async () => {
    const sortButton = documentBody.getByText("Sort Descending");
    fireEvent.click(sortButton);
    expect(mockToggleAscending).toHaveBeenCalledTimes(1);
  });
});
