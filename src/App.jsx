import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  
  return (
    <>
    < Navbar />
    <Hero />
    <HomeCards />
    <JobListings/>
   
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App

{/* Time 1:07:03 https://www.youtube.com/watch?v=LDB4uaJ87e0&t=1401s */}