import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';

const initialValues = { email: '', password: '' };

const LoginPage = () => {
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <form onSubmit={submitHandler}>
      <div className='flex justify-center items-start h-screen bg-indigo-600 p-20'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl block text-center font-semibold'>
            <i className='fa-solid fa-user'></i> Login
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
              autoComplete='off'
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
              autoComplete='off'
              value={values.password}
              onChange={changeHandler}
            />
          </div>

          <div className='mt-5'>
            <button
              type='submit'
              className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'
            >
              <i className='fa-solid fa-right-to-bracket'></i>&nbsp;&nbsp;Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default LoginPage;
