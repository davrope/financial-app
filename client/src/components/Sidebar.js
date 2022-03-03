import React from 'react'
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import styled from 'styled-components';
import styles from '../styles/sidebar.module.css';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick={toggle}>
      <div className={styles.icon} onClick={toggle}>
        <FaTimes className={styles.closeIcon}/>
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          <LinkScroll className = {styles.linkS} to ="about" onClick= {toggle}>
            About
          </LinkScroll>
        </ul>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '100%': '0')} ;
    top:${({isOpen})=>(isOpen ? '0%': '-100%')} ;

`