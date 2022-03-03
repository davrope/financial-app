import React from 'react'
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <aside isOpen = {isOpen} onClick={toggle}>
      <div className='icon' onClick={toggle}>
        <FaTimes/>
      </div>
      <div className='sidebar-wrapper'>
        <ul className='sidebar-menu'>
          <LinkScroll to ="about" onClick= {toggle}>
            About
          </LinkScroll>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar