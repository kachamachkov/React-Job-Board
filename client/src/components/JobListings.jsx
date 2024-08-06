import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import JobListing from './JobListing';

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3030/jsonstore/jobs');
        const data = await res.json();

        setJobs(Object.values(data));

      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);



  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading
          ? (<Spinner loading={loading} />)
          : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job, i) => (
                <JobListing key={i} job={job} />
              ))}
            </div>
          )
        }
      </div>
    </section >
  );
};
export default JobListings;