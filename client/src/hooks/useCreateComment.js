import { useEffect, useState } from 'react';
import commentsApi from '../api/comments-api';

export function useCreateComment() {
  const createHandler = (jobId, comment) => commentsApi.create(jobId, comment);

  return createHandler;
}

export function useGetAllComments(jobId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await commentsApi.getAll(jobId);

      setComments(result);
    })();
  }, [jobId]);

  return [comments, setComments];
}
