import React, { useEffect, useState } from "react";

import Header from "./components/header";
import { LaunchList } from "./components/launches";
import { getLaunches } from "./services/requests";
import { Launch } from "./types/Launch";

const App: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = (): void => {
    getLaunches().then((launches: Launch[] | any) => setLaunches(launches));
  };

  return (
    <main className="App">
      <Header />
      <LaunchList launches={launches} />
    </main>
  );
};

export default App;
