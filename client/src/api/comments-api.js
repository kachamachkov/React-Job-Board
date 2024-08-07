import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/jobs/';

const buildUrl = (jobId) => `${BASE_URL}/${jobId}/comments`;

const create = async (jobId, username, text) => await requester.post(buildUrl(jobId), { username, text });


const getAll = async (jobId) => {
    const result = await requester.get(buildUrl(jobId));

    const comments = Object.values(result);
    return comments;

};

export default {
    create,
    getAll
};

