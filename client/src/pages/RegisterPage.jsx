import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';

const initialValues = { email: '', password: '', rePassword: '' };

const RegisterPage = () => {
  const [error, setError] = useState('');
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async ({ email, password, rePassword }) => {
    if (password !== rePassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      await register(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <form onSubmit={submitHandler}>
      <div className='flex justify-center items-start h-screen bg-indigo-600 p-20'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl block text-center font-semibold'>
            <i className='fa-solid fa-user'></i> Register
          </h1>
          <hr className='mt-3' />
          <div className='mt-3'>
            <label htmlFor='email' className='block text-base mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='gosho@gmail.com'
              value={values.email}
              onChange={changeHandler}
              autoComplete=''
            />
          </div>

          <div className='mt-3'>
            <label htmlFor='password' className='block text-base mb-2'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              value={values.password}
              onChange={changeHandler}
              autoComplete=''
            />
          </div>

          <div className='mt-3'>
            <label htmlFor='rePassword' className='block text-base mb-2'>
              Confirm Password
            </label>

            {error && <span className='text-red-600'>{error}</span>}

            <input
              type='password'
              id='rePassword'
              name='rePassword'
              className='bg-gray-100 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              value={values.rePassword}
              onChange={changeHandler}
              autoComplete=''
            />
          </div>

          <div className='mt-5'>
            <button
              type='submit'
              className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'
            >
              <i className='fa-solid fa-right-to-bracket'></i>
              &nbsp;&nbsp;Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default RegisterPage;
