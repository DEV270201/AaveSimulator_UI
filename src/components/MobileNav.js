import React from "react";
import Navlinks from "./Navlinks";
import '../css/MobileNav.css';

const MobileNav = ()=>{
  return(
    <>
      <div className="mobile_nav d-flex flex-column align-items-start">
        <div className="fs-6 my-2" style={{color:'#A5A8B6',marginLeft:'15px'}}>MENU</div>
        <Navlinks />
      </div>
    </>
  )
}

export default MobileNav;