import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments/';

const create = (jobId, text) => requester.post(BASE_URL, { jobId, text });


const getAll = (jobId) => {

  const params = new URLSearchParams({
    where: `jobId="${jobId}"`,
    load: `author=_ownerId:users`,
  });

  return requester.get(`${BASE_URL}?${params.toString()}`);


};

export default {
  create,
  getAll
};

