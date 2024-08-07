import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";


const initialValues = {
  title: '',
  type: 'Full-Time',
  description: '',
  location: '',
  salary: 'Employer did not specify',
  company: {
    name: '',
    description: '',
    contactEmail: '',
  }
};

console.log(initialValues);

const AddJobPage = ({ addJobSubmit }) => {

  const navigate = useNavigate();

  const createHandler = (values) => {
    console.log(values);
  };

  const {
    values,
    changeHandler,
    submitHandler
  } = useForm(initialValues, createHandler);


  // const [title, setTitle] = useState('');
  // const [type, setType] = useState('Full-Time');
  // const [location, setLocation] = useState('');
  // const [description, setDescription] = useState('');
  // const [salary, setSalary] = useState('Employer did not specify');
  // const [companyName, setCompanyName] = useState('');
  // const [companyDescription, setCompanyDescription] = useState('');
  // const [contactEmail, setContactEmail] = useState('');


  // const submitForm = (e) => {
  //   e.preventDefault();

  //   const newJob = {
  //     title,
  //     type,
  //     description,
  //     location,
  //     salary,
  //     company: {
  //       name: companyName,
  //       description: companyDescription,
  //       contactEmail
  //     }
  //   };

  //   addJobSubmit(newJob);
  //   return navigate('/jobs');
  // };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitHandler}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
              >Job Type</label
              >
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={values.type}
                onChange={changeHandler}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
              >Job Listing Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={values.title}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={values.description}
                onChange={changeHandler}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
              >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={values.salary}
                onChange={changeHandler}
              >
                <option value="Employer did not specify">Do not specify</option>
                <option value="1.5-2.5K BGN">1.5-2.5K BGN</option>
                <option value="4-6K BGN">4-6K BGN</option>
                <option value="6-8K BGN">6-8K BGN</option>
                <option value="7-10K BGN">7-10K BGN</option>
                <option value="9-11K BGN">9-11K BGN</option>
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
                required
                value={values.location}
                onChange={changeHandler}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2"
              >Company Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={values.name}
                onChange={changeHandler}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >Company Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={values.company.description}
                onChange={changeHandler}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactEmail"
                className="block text-gray-700 font-bold mb-2"
              >Contact Email</label
              >
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={values.contactEmail}
                onChange={changeHandler}
              />
            </div>
            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddJobPage;