import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

import { Route, Routes } from 'react-router-dom';
import ViewAllJobs from './components/ViewAllJobs';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}

export default App;
