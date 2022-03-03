import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';



const Navbar = ({toggle}) => {
  return (
    <nav className='nav-main'>
      <nav className='navbar-container'>
        <LinkRouter className='NavLogo' to ="/">
          <h2>Logo</h2>
        </LinkRouter>

        <div className='mobile-icon' onClick={toggle}>
          <FaBars/>
        </div>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <LinkScroll to= 'about'>About</LinkScroll>
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default Navbar