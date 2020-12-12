import React from "react";
import App from "./App";
import fetchMock from "fetch-mock";

import {
  render,
  RenderResult,
  fireEvent,
  screen,
} from "@testing-library/react";
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

describe("<App />", () => {
  beforeEach(() => {
    documentBody = render(<App />);
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it("matches snapshot", () => {
    expect(documentBody).toMatchSnapshot();
  });

  it("Verify if Launches are retrieved - success", async () => {
    fetchMock.get("https://api.spacexdata.com/v3/launches/", {
      body: mockResponse,
      status: 200,
    });

    const texts = [
      "#1",
      "Falcon Sat",
      "24th Mar 2006",
      "#2",
      "DemoSat",
      "21st Mar 2007",
    ];

    const button = documentBody.getByText("Reload Data");

    fireEvent.click(button);

    for (let text of texts) {
      expect(await documentBody.findByText(text)).toBeInTheDocument();
    }
    expect(await documentBody.findAllByRole("listitem")).toHaveLength(3);

    const launches = await documentBody.findAllByText(/#[1-3]/);
    // const launches = await documentBody.findAllByRole("listitem");
    expect(launches).toHaveLength(3);
    expect(launches[0]).toHaveTextContent("#1");
    expect(launches[1]).toHaveTextContent("#2");
    expect(launches[2]).toHaveTextContent("#3");
  });

  it("sorts on click", async () => {
    fetchMock.get("https://api.spacexdata.com/v3/launches/", {
      body: mockResponse,
      status: 200,
    });

    const loadButton = documentBody.getByText("Reload Data");
    fireEvent.click(loadButton);

    const sortButton = documentBody.getByText("Sort Descending");
    fireEvent.click(sortButton);
    expect(documentBody.getByText("Sort Ascending")).toBeInTheDocument();

    // const launches = await documentBody.findAllByText(/#[1-2]/);
    const launches = await documentBody.findAllByRole("listitem");
    expect(launches).toHaveLength(3);
    screen.debug();
    expect(launches[0]).toHaveTextContent("#2");
    expect(launches[1]).toHaveTextContent("#1");
  });

  it("filters on year click", async () => {
    fetchMock.get("https://api.spacexdata.com/v3/launches/", {
      body: mockResponse,
      status: 200,
    });

    const loadButton = documentBody.getByText("Reload Data");
    fireEvent.click(loadButton);

    const listItems = await documentBody.findAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    const filterButton = documentBody.getByText("Filter by Year");
    fireEvent.click(filterButton);

    const year = await documentBody.findByText("2006");
    expect(year).toBeInTheDocument();
    fireEvent.click(year);

    const filteredListItems = documentBody.queryAllByRole("listitem");
    expect(filteredListItems).toHaveLength(1);

    const filteredLaunch = await documentBody.findByText("#1");
    expect(filteredLaunch).toBeInTheDocument();
  });
});
