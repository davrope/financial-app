import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';

export const Header = () => {

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

