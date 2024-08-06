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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
