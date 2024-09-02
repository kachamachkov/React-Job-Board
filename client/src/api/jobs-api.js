import * as request from './requester';

// const BASE_URL = 'http://localhost:3030/data/jobs';
const BASE_URL = `${import.meta.env.VITE_API_URL}/data/jobs`;

export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const jobs = Object.values(result);
  return jobs;
};

export const getLatestJobs = async () => {
  const urlSearchParams = new URLSearchParams({
    sortBy: `_createdOn desc`,
    pageSize: 3,
  });

  const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);
  const latestGames = Object.values(result);

  return latestGames;
};

export const getOne = (jobId) => request.get(`${BASE_URL}/${jobId}`);

export const create = (jobData) => request.post(`${BASE_URL}`, jobData);

export const remove = (jobId) => request.del(`${BASE_URL}/${jobId}`);

export const update = (jobId, jobData) =>
  request.put(`${BASE_URL}/${jobId}`, jobData);

const jobsAPI = {
  getOne,
  getAll,
  create,
  remove,
  update,
  getLatestJobs,
};

export default jobsAPI;
