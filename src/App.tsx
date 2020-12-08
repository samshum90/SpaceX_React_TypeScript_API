import React from "react";
import Header from "./components/header";
import { LaunchList } from "./components/launches";

function App() {
  return (
    <div className="App">
      <Header />
      <LaunchList />
    </div>
  );
}

export default App;
