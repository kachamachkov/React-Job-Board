import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments/';

// add comments collection to server
const create = (jobId, text) => requester.post(BASE_URL, { jobId, text });


const getAll = (jobId) => {

  const params = new URLSearchParams({
    where: `jobId="${jobId}"`
  });

  return requester.get(`${BASE_URL}?${params.toString()}`);


};

export default {
  create,
  getAll
};

