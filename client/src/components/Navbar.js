import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import style from '../styles/navbar.module.css'



const Navbar = ({toggle, auth}) => {

  const renderTest = ({auth})=>{
    switch({auth}){
      case false:
        return(
          <div>
            This is the false case
          </div>
        );
      default:
        return(
          <div>
            This is the default case :(
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
          <li className={style.navItem}>
            <LinkRouter className={style.navLinkS} to= "/login">Login</LinkRouter>  
          </li>
          <li>
            {renderTest({auth})}
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default Navbar