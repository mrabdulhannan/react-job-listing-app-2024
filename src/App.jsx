import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';

import MainLayout from './layouts/MainLayout';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={< HomePage />} />
    </Route>
    
  )
);

  return <RouterProvider router={router} />;

}

export default App

{/* Time 1:07:03 https://www.youtube.com/watch?v=LDB4uaJ87e0&t=1401s */}
  // return (
  //   <>
  //   < Navbar />
  //   <Hero />
  //   <HomeCards />
  //   <JobListings/>
  //  <ViewAllJobs/>
   
  //   </>
  // )