import React from "react";
import LaunchList from ".";

import {
  render,
  RenderResult,
  fireEvent,
  screen,
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
    documentBody = render(<LaunchList launches={stubbedLaunches} />);
  });
  it("matches snapshot", () => {
    expect(documentBody).toMatchSnapshot();
  });

  it("display launches", async () => {
    const items = await documentBody.findAllByRole("listitem");
    expect(items).toHaveLength(3);
  });
});
