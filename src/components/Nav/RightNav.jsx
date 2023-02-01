import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Ul = styled.ul`
  list-style: none;
  display: flex;
   z-index: 1;
  flex-flow: row nowrap;
  padding: 15px 5px;


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 60vh;
    width: 220px;
    padding: 50px 5px;
    transition: transform 0.3s ease-in-out;

  }
  li{
    margin-bottom: 1rem;
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>

      <li><Link to="/" className='text-decoration-none text-black m-4'>Home</Link></li>
      <li><Link to="/notes" className='text-decoration-none text-black m-4'>Generate-Instructions</Link></li>
      <li><Link to='/budget' className='text-decoration-none text-black m-4'>Monitor-Budget</Link></li>
      <li><Link to='/trello' className='text-decoration-none text-black m-4'>Check-Progress</Link></li>
       
     </Ul>
     
  )
}

export default RightNav
