import React from "react";
import LaunchItem from ".";

import { render, RenderResult } from "@testing-library/react";
import { Launch } from "../../../types/Launch";

const stubbedLaunch: Launch = {
  flight_number: 1,
  mission_name: "Falcon Sat",
  launch_year: "2006",
  launch_date_utc: new Date("2006-03-24T22:30:00.000Z"),
  rocket: {
    rocket_name: "Falcon 1",
  },
};

let documentBody: RenderResult;

describe("<LaunchItem />", () => {
  beforeEach(() => {
    // Arrange
    documentBody = render(<LaunchItem launch={stubbedLaunch} />);
  });
  it("matches snapshot", () => {
    expect(documentBody).toMatchSnapshot();
  });
});
