import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';



const Header = () => {

  const [isOpen, setisOpen] = useState(false)

  const toggle = ()=>{
    setisOpen(!isOpen);
  }



  return (
    <div>
      <Sidebar isOpen = {isOpen} toggle= {toggle}/>
      <Navbar toggle = {toggle}/>
    </div>
  )
}


export default Header;