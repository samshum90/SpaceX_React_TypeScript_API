import React from "react";
import LaunchList from ".";

import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from "@testing-library/react";
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
    launch_year: "2007",
    launch_date_utc: new Date("2007-03-21T01:10:00.000Z"),
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
      <LaunchList
        launches={stubbedLaunches}
        ascending={mockAscending}
        toggleAscending={mockToggleAscending}
        selectedYear={mockYear}
        setSelectedYear={mockSelectedYear}
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
      <LaunchList
        launches={stubbedLaunches}
        ascending={false}
        toggleAscending={mockToggleAscending}
        selectedYear={mockYear}
        setSelectedYear={mockSelectedYear}
      />
    );
    expect(documentBody.getByText("Sort Ascending")).toBeInTheDocument();
  });

  it("display launches", async () => {
    const items = await documentBody.findAllByRole("listitem");
    expect(items).toHaveLength(2);
  });
});
