import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3030/jsonstore/jobs/${id}`);
        const data = await res.json();
        console.log(data);
        setJob(data);

      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);




  return (
    <div>Hello</div>
  );
};
export default JobPage;