import React from "react";
import App from "./App";

import { render, RenderResult } from "@testing-library/react";
import { Launch } from "./types/Launch";
import { getLaunches } from "./services/requests";

let documentBody: RenderResult;

const mockResponse: Launch[] = [
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
const mockSetState = jest.fn();

describe("<App />", () => {
  beforeEach(() => {
    documentBody = render(<App />);
  });
  it("matches snapshot", () => {
    expect(documentBody).toMatchSnapshot();
  });
});
