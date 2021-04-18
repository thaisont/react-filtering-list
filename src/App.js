import { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import data from "./data.json";

console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs);

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}

export default App;
