import React from 'react';
import {Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) =>{
  let location = useLocation()
  console.log("props hats", props)
  console.log("loction -> ", location)
return (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/hats' element={<HatsPage/>} />
      </Routes>
    </div>
  );
}

export default App;