import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Duties from "./components/Duties";
import Header from "./components/Header";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { company, title, dates, duties } = jobs[value];

  return (
    <section className="section">
      <Header />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((e, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
                key={e.id}
              >
                {e.company}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="dates">{dates}</p>
          <Duties duties={duties} />
        </article>
      </div>
    </section>
  );
}

export default App;
