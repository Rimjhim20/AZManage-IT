import React from 'react';
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import InvoiceForm from './components/Invoice/InvoiceForm'
import { Routes, Route } from "react-router-dom"
import HomePage from './homepage';
import Notes from './Notes'
import Budget from './budget'
import Trello from './components/Trello'
// import { Calender }  from './components/Calender/Calender'
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     <div className="App">
         {/* <Navbar/> */}
         <div className="AppGlass">
         <Sidebar/>
        <Routes>
          <Route path="/" element={<MainDash/>} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/trello" element={ <Trello/> } />
          <Route path="/about" element={<HomePage />} />
          <Route path="/invoice" element={<InvoiceForm/>} />
          {/* <Route path="/calender" element={<Calender/>} /> */}
        </Routes>
        </div>
        </div>
      <Footer />
      

   
    </>

  )
}

export default App
