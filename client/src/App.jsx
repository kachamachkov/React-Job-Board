import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';



function App() {

  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:3030/jsonstore/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:3030/jsonstore/jobs/${id}`, {
      method: 'DELETE',
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/edit/:id' element={<EditJobPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>)
  );

  return <RouterProvider router={router} />;
}

export default App;
