import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/jobs';


export const getAll = async () => {

  const result = await request.get(BASE_URL);
  const games = Object.values(result);
  return games;

};

export const getOne = (jobId) => request.get(`${BASE_URL}/${jobId}`);

export const create = (jobData) => request.post(`${BASE_URL}`, jobData);

const gamesAPI = {
  getOne,
  getAll,
  create
};

export default gamesAPI;