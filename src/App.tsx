import React, { useEffect, useState } from "react";

import Header from "./components/header";
import { LaunchList } from "./components/launches";
import { getLaunches } from "./services/requests";
import { Launch } from "./types/Launch";

const App: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [initialLaunches, setInitialLaunches] = useState<Launch[]>([]);
  const [ascending, setAscending] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<string>("");

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = (): void => {
    getLaunches().then((launches: Launch[] | any) => {
      setLaunches(launches);
      setInitialLaunches(launches);
    });
  };

  const toggleAscending = (): void => {
    setAscending(!ascending);
  };

  const handleReloadClick = (): void => {
    setSelectedYear("");
    fetchLaunches();
  };

  const handleSortClick = (): void => {
    if (ascending) {
      const sortedLaunches = launches.sort(function (
        item1: Launch,
        item2: Launch
      ) {
        let x: number = item1.flight_number;
        let y: number = item2.flight_number;
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
        return 0;
      });
      setLaunches(sortedLaunches);
    } else {
      const sortedLaunches = launches.sort(function (
        item1: Launch,
        item2: Launch
      ) {
        let x: number = item1.flight_number;
        let y: number = item2.flight_number;
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setLaunches(sortedLaunches);
    }
    toggleAscending();
  };

  const handleFilterClick = (year: string): void => {
    setSelectedYear(year);
    const filteredLaunches = initialLaunches.filter(
      (launch: Launch) => launch.launch_year === year
    );
    setLaunches(filteredLaunches);
  };

  return (
    <>
      <Header handleReloadClick={handleReloadClick} />
      <main className="content">
        <LaunchList
          launches={launches}
          ascending={ascending}
          handleSortClick={handleSortClick}
          selectedYear={selectedYear}
          handleFilterClick={handleFilterClick}
        />
      </main>
    </>
  );
};

export default App;
