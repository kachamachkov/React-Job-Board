import { useEffect, useState } from 'react';
import jobsAPI from '../api/jobs-api';

export function useGetAllJobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await jobsAPI.getAll();

      setJobs(result);
    })();
  }, []);


  return [jobs, setJobs];
}

export function useGetOneJobs(jobId) {
  const [job, setJob] = useState({});

  useEffect(() => {
    (async () => {
      const result = await jobsAPI.getOne(jobId);
      setJob(result);
    })();
  }, [jobId]);

  return [
    job,
    setJob
  ];
}

export function useCreateJob() {
  //    must return function , as we need to utilize it at later stage
  const jobCreateHandler = (jobData) => jobsAPI.create(jobData);

  return jobCreateHandler;

}