import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import style from '../styles/navbar.module.css';
import tangerineLogo from '../img/logotang.png'

import { useSelector } from 'react-redux';



const Navbar = ({toggle}) => {

  const auth = useSelector((state)=>state.auth)



  const renderTest = ()=>{
    switch(auth){
      case false:
        return(
          <ul className={style.navMenu}>
            <li className={style.navItem}>
              <LinkScroll to= 'about' className={style.navLinkS}>About</LinkScroll>
            </li>
            <li className={style.navItem}>
              <LinkRouter className={style.navLinkS} to= "/login">Login</LinkRouter>  
            </li>
        </ul>

        );
      default:
        return(
          <ul className={style.navMenu}>
            <li className={style.navItem}>
                <LinkRouter className={style.navLinkS} to= "/dashboard">User</LinkRouter>  
            </li>
            <li className={style.navItem}>
              <a className={style.navLinkS} href= "/api/logout" key = "signout">Logout</a>  
            </li>
          </ul>
        )
    }
  }

  
  return (
    <nav className={style.navMain}>
      <nav className={style.navContainer}>
        <LinkRouter className={style.navLogo} to ="/">
          {/* <h2>Logo</h2> */}
          <img 
            className='logo'
            src= {tangerineLogo} />
          
        </LinkRouter>


        <div className={style.mobileIcon} onClick={toggle}>
          <FaBars/>
        </div>

          
            {renderTest()}
          
        
      </nav>
    </nav>
  )
}

export default Navbar