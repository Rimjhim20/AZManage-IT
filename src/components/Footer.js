import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' '>
      <footer className=" bg-light m-8">
        <div className="container ">
    <section className="  text-center">
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-facebook-f"></i></Link>

      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-twitter"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"
        ><i className="fab fa-google"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to=" "
        role="button"><i className="fab fa-instagram"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to=" https://www.linkedin.com/in/rimjhim-kumari-r20/"
        role="button"
        ><i className="fab fa-linkedin-in"></i></Link>
      <Link
        className="btn btn-floating m-1"
        to="https://github.com/Rimjhim20 "
        role="button"
        ><i className="fab fa-github"></i></Link>
    </section>

  </div>
        <div className=" text-center mb-1">
      
        © Rimjhim Kumari 2023 
        </div>
      </footer>

    </div>
  )
}

export default Footer