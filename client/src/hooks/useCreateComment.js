import commentsApi from "../api/comments-api";

export default function useCreateComment() {

  const createHandler = (jobId, comment) => commentsApi.create(jobId, comment);


  return createHandler;

}