import { useParams } from "react-router-dom";
import { useContext, useState } from "react";


import Spinner from "../components/Spinner";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useGetOneJobs } from "../hooks/useJobs";
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";
import { useCreateComment, useGetAllComments } from "../hooks/useCreateComment";

const initialValues = {
  comment: ''
};

const JobPage = () => {
  const { jobId } = useParams();
  // const [loading, setLoading] = useState(true);
  const [comments, setComments] = useGetAllComments(jobId);
  const createJobComment = useCreateComment();
  const [job] = useGetOneJobs(jobId);

  const { isAuthenticated } = useContext(AuthContext);


  const {
    values,
    changeHandler,
    submitHandler

  } = useForm(initialValues, async ({ comment }) => {
    try {

      const newComment = await createJobComment(jobId, comment);

      setComments(oldComments => [...oldComments, newComment]);

    } catch (err) {
      console.log(err.message);
    }
  });

  // const onDeleteClick = (jobId) => {

  //   const confirm = window.confirm('Are you sure you want to delete this listing?');

  //   if (!confirm) {
  //     return;
  //   }

  //   deleteJob(jobId);
  //   navigate('/jobs');

  // };


  // loading ? <Spinner /> :
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                  {job.title}
                </h1>
                <div
                  className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">
                  {job.description}
                </p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4">{job.salary}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Comments
                </h3>

                <div className="mb-4">
                  {/* render comments here */}
                  {comments.map(comment => (
                    <p key={comment._id}>{comment.author.email}: {comment.text}</p>

                  ))}
                </div>

                {/* <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4">{job.salary}</p> */}
              </div>

              {isAuthenticated && (
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Add Comment
                  </h3>

                  <form onSubmit={submitHandler}>
                    <textarea className="rounded-sm bg-gray-100 mb-4 h-full w-full focus:shadow-outline mt-4 block"
                      name="comment"
                      placeholder="Comment..."
                      value={values.comment}
                      onChange={changeHandler}

                    ></textarea>

                    <input type="submit" value='Add Comment'
                      className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    />
                  </form>


                </div>
              )}


            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.companyName}</h2>

                <p className="my-2">
                  {job.companyDescription}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.contactEmail}
                </p>


              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/jobs/edit/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job
                </Link>
                <button onClick={() => onDeleteClick(job._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
export default JobPage;