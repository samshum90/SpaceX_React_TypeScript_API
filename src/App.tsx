import React, { useEffect, useState } from "react";

import Header from "./components/header";
import { LaunchList } from "./components/launches";
import { getLaunches } from "./services/requests";
import { Launch } from "./types/Launch";
import { LaunchImage } from "./assets/img";

const App: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = (): void => {
    getLaunches().then((launches: Launch[] | any) => setLaunches(launches));
  };

  return (
    <>
      <Header />
      <main className="content">
        <img className="image" src={LaunchImage} alt="Space X Rocket launch" />
        <LaunchList launches={launches} />
      </main>
    </>
  );
};

export default App;
