import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useGetOneJobs } from '../hooks/useJobs';
import jobsAPI from '../api/jobs-api';
import { useState } from 'react';

const initialValues = {
  title: '',
  type: 'Full-Time',
  description: '',
  location: '',
  salary: 'Employer did not specify',
  companyName: '',
  companyDescription: '',
  contactEmail: '',
};

const EditJobPage = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [job] = useGetOneJobs(jobId);
  const [error, setError] = useState(null);

  const { values, changeHandler, submitHandler } = useForm(
    Object.assign(initialValues, job),
    async (values) => {
      try {
        await jobsAPI.update(jobId, values);

        navigate(`/jobs/${jobId}`);
      } catch (err) {
        console.log(err.message);
        setError(
          'Oops, there was an error editing the job listing, please try again.'
        );
      }
    }
  );

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitHandler}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Update Job
            </h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Job Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={values.type}
                onChange={changeHandler}
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Job Listing Name
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Beautiful Apartment In Miami'
                minLength={3}
                maxLength={32}
                required
                value={values.title}
                onChange={changeHandler}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Update any job duties, expectations, requirements, etc'
                value={values.description}
                onChange={changeHandler}
                required
                minLength={3}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Salary
              </label>
              <select
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3'
                required
                value={values.salary}
                onChange={changeHandler}
              >
                <option value='Employer did not specify'>Do not specify</option>
                <option value='1.5-2.5K BGN'>1.5-2.5K BGN</option>
                <option value='4-6K BGN'>4-6K BGN</option>
                <option value='6-8K BGN'>6-8K BGN</option>
                <option value='7-10K BGN'>7-10K BGN</option>
                <option value='9-11K BGN'>9-11K BGN</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                minLength={3}
                maxLength={32}
                required
                value={values.location}
                onChange={changeHandler}
              />
            </div>

            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={values.companyName}
                onChange={changeHandler}
                minLength={3}
                maxLength={32}
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Description
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={values.companyDescription}
                onChange={changeHandler}
                required
                minLength={3}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                minLength={3}
                maxLength={32}
                value={values.contactEmail}
                onChange={changeHandler}
              />
            </div>
            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Job
              </button>
              {error ? (
                <span className='text-red-500 text-xl mt-2 justify-center'>
                  {error}
                </span>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditJobPage;
