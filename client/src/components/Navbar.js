import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import style from '../styles/navbar.module.css';

import { useSelector } from 'react-redux';



const Navbar = ({toggle}) => {

  const auth = useSelector((state)=>state.auth)
  console.log("console from navbar:", auth)


  const renderTest = ()=>{
    switch(auth){
      case false:
        return(
          <li className={style.navItem}>
            <LinkRouter className={style.navLinkS} to= "/login">Login</LinkRouter>  
          </li>
        );
      default:
        return(
          <div>
            <li className={style.navItem}>
                <LinkRouter className={style.navLinkS} to= "/user">User</LinkRouter>  
            </li>
            <li className={style.navItem}>
              <a className={style.navLinkS} href= "/api/logout" key = "signout">Logout</a>  
            </li>
        </div>
        )
    }
  }

  
  return (
    <nav className={style.navMain}>
      <nav className={style.navContainer}>
        <LinkRouter className={style.navLogo} to ="/">
          <h2>Logo</h2>
        </LinkRouter>


        <div className={style.mobileIcon} onClick={toggle}>
          <FaBars/>
        </div>
        <ul className={style.navMenu}>
          <li className={style.navItem}>
            <LinkScroll to= 'about' className={style.navLinkS}>About</LinkScroll>
          </li>

          <li>
            {renderTest()}
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default Navbar