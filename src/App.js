import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import data from "./data.json";
import JobBoard from "./components/JobBoard";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs);

  return (
    <div>
      <Header />
      <JobBoard />
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
