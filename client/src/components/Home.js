import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const Home = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = ()=>{
    setisOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen = {isOpen} toggle= {toggle}/>
      <Navbar toggle = {toggle}/>
      <HeroSection/>
    </div>
  )
}

export default Home