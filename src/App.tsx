import React, { useEffect, useState } from "react";

import Header from "./components/header";
import { LaunchList } from "./components/launches";
import { getOrderedLaunches } from "./services/requests";
import { Launch } from "./types/Launch";
// import { LaunchImage } from "./assets/img";

const App: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [ascending, setAscending] = useState<boolean>(true);
  const [filterYears, setFilterYears] = useState<string[]>([]);

  useEffect(() => {
    fetchLaunches();
  }, [ascending]);

  const fetchLaunches = (): void => {
    getOrderedLaunches(ascending).then((launches: Launch[] | any) =>
      setLaunches(launches)
    );
  };

  const toggleAscending = (): void => {
    setAscending(!ascending);
  };

  return (
    <>
      <Header fetchLaunches={fetchLaunches} />
      <main className="content">
        {/* <img className="image" src={LaunchImage} alt="Space X Rocket launch" /> */}

        <LaunchList
          launches={launches}
          ascending={ascending}
          toggleAscending={toggleAscending}
        />
      </main>
    </>
  );
};

export default App;
