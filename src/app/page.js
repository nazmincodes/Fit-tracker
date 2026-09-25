import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WorkoutLibrary from './components/WorkoutLibrary';

const page = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <WorkoutLibrary/>
  </>
  );
};

export default page;