import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import data from "./data.json";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div>
      <Header />

      {data && data.map((job) => <Jobs {...job} />)}
    </div>
  );
}

export default App;
