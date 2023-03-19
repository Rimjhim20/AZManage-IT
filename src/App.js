import React from 'react';
import './App.css'
import Documents from './Documents'
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
import About from './About';
import Notes from './Notes'
import Budget from './budget'
import Trello from './components/Trello'
import { Calender } from './components/Calender/Calender'
import Footer from './components/Footer';
import Realtimechat from './Realtimechat';

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
                path="/documents"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Documents />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/collaborate"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Realtimechat />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/team"
                element={
                  <ProtectedRoute>
                    <Sidebar />
                    <Maincontact />
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
                    <About />
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
