import React, { useEffect, useState } from "react";

import Header from "./components/header";
import { LaunchList } from "./components/launches";
import { getOrderedFilteredLaunches } from "./services/requests";
import { Launch } from "./types/Launch";
// import { LaunchImage } from "./assets/img";

const App: React.FC = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [ascending, setAscending] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<string>("");

  useEffect(() => {
    fetchLaunches();
  }, [ascending, selectedYear]);

  const fetchLaunches = (): void => {
    getOrderedFilteredLaunches(
      ascending,
      selectedYear
    ).then((launches: Launch[] | any) => setLaunches(launches));
  };

  const toggleAscending = (): void => {
    setAscending(!ascending);
  };

  const handleReloadClick = (): void => {
    setSelectedYear("");
    fetchLaunches();
  };

  return (
    <div ref={container}>
      <Header handleReloadClick={handleReloadClick} />
      <main className="content">
        {/* <img className="image" src={LaunchImage} alt="Space X Rocket launch" /> */}

        <LaunchList
          launches={launches}
          ascending={ascending}
          toggleAscending={toggleAscending}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </main>
    </div>
  );
};

export default App;
