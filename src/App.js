import React from 'react';
import { Routes, Route } from "react-router-dom"
import HomePage from './homepage';
import Notes from './Notes'
import Budget from './budget'
import Trello from './components/Trello'
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
         <Navbar/>
      <div className=" ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/trello" element={ <Trello/> } />
       
        </Routes>
      </div>

      <Footer />
    </>

  )
}

export default App
