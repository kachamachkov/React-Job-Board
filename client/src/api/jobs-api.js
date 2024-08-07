import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/jobs';


export const getAll = async () => {

  const result = await request.get(BASE_URL);
  const jobs = Object.values(result);
  return jobs;

};

export const getOne = (jobId) => request.get(`${BASE_URL}/${jobId}`);

export const create = (jobData) => request.post(`${BASE_URL}`, jobData);

export const remove = (jobId) => request.del(`${BASE_URL}/${jobId}`)

const jobsAPI = {
  getOne,
  getAll,
  create,
  remove
};

export default jobsAPI;