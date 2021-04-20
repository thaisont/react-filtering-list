import React, { useState, useEffect } from "react";

import data from "../data.json";
import JobBoard from "./JobBoard";

console.log(data);

function List() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs);

  return (
    <div>
      <h1>Hello</h1>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default List;
