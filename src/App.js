import React from 'react';
import './App.css'
// import ChatBox from "./components/Chat/ChatBox";
import Ganttchart from './components/Charts/Ganttchart'
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import MainChart from './components/Charts/MainChart';
import Maincontact from './components/Contact/Maincontact';
import InvoiceForm from './components/Invoice/InvoiceForm'
import { Routes, Route } from "react-router-dom"
import HomePage from './homepage';
import Notes from './Notes'
import Budget from './budget'
import Trello from './components/Trello'
import { Calender } from './components/Calender/Calender'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <UserAuthContextProvider>
            <Routes>
            <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <MainDash />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notes"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Notes />
                  </ProtectedRoute>
                }
              />
               <Route
                path="/chartjs"
                element={
                  <ProtectedRoute>
                    <Ganttchart/>
                  
                  </ProtectedRoute>
                }
              />
                 {/* <Route
                path="/collaborate"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <ChatBox />
                  </ProtectedRoute>
                }
              /> */}

               <Route
                path="/team"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Maincontact/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/budget"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Budget />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/trello"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Trello />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/invoice"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <InvoiceForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/calender"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Calender />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/chart"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <MainChart />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default App
