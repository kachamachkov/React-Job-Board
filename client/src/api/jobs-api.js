import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/jobs';


export const getAll = async () => {

  const result = await request.get(BASE_URL);
  const jobs = Object.values(result);
  return jobs;

};

export const getLatestJobs = async () => {

  // const urlSearchParams = new URLSearchParams({
  //   sortBy: `${encode('_createdOn desc')}`,
  //   pageSize: 3,
  // });

  // BUG after 1st use
  // const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

  const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc&pageSize=3`);

  const latestGames = Object.values(result)

  return latestGames;
};

export const getOne = (jobId) => request.get(`${BASE_URL}/${jobId}`);

export const create = (jobData) => request.post(`${BASE_URL}`, jobData);

export const remove = (jobId) => request.del(`${BASE_URL}/${jobId}`);

export const update = (jobId, jobData) => request.put(`${BASE_URL}/${jobId}`, jobData);


const jobsAPI = {
  getOne,
  getAll,
  create,
  remove,
  update,
  getLatestJobs
};

export default jobsAPI;