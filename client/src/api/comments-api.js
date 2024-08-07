import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/jobs/';

// add comments collection to server
const create = async (jobId, text) => await requester.post(BASE_URL, { jobId, text });


const getAll = async (jobId) => {
  const result = await requester.get(BASE_URL);

  const comments = Object.values(result);
  return comments;

};

export default {
  create,
  getAll
};

