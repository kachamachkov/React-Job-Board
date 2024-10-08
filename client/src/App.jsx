import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import AuthenticatedView from './components/AuthenticatedView';
import GuestView from './components/GuestView';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route
          path='/add-job'
          element={
            <AuthenticatedView>
              <AddJobPage />
            </AuthenticatedView>
          }
        />
        <Route
          path='/jobs/edit/:jobId'
          element={
            <AuthenticatedView>
              <EditJobPage />
            </AuthenticatedView>
          }
        />
        <Route path='/jobs/:jobId' element={<JobPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route
          path='/login'
          element={
            <GuestView>
              <LoginPage />
            </GuestView>
          }
        />
        <Route
          path='/register'
          element={
            <GuestView>
              <RegisterPage />
            </GuestView>
          }
        />
        <Route
          path='/logout'
          element={
            <AuthenticatedView>
              <LogoutPage />
            </AuthenticatedView>
          }
        />
      </Route>
    )
  );

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
