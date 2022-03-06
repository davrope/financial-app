import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
// import HeroSection from './HeroSection';
// import About from './About';
// import {connect} from 'react-redux';

import {useSelector} from 'react-redux';


const Header = () => {

  const [isOpen, setisOpen] = useState(false)

  const toggle = ()=>{
    setisOpen(!isOpen);
  }

  // const test = useSelector(testvar);
  // switch(test){
  //   case false:
  //     console.log("this is false");
  //   case true:
  //     console.log("this is true");
  //   default:
  //     console.log(test)
  // }


  return (
    <div>
      <Sidebar isOpen = {isOpen} toggle= {toggle}/>
      <Navbar toggle = {toggle}/>
    </div>
  )
}

// function mapStateToProps(state){
//   return{
//     auth:state,
//   }
// }

// export default connect(mapStateToProps)(Header);

export default Header;