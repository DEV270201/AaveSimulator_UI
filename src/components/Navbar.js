import React,{useState} from "react";
import Navlinks from "./Navlinks";
import AaveLogo from "./SVG's/AaveLogo";
import { NavLink } from "react-router-dom";
import HamburgerBtn from "./SVG's/HamburgerBtn";
import CloseBtn from "./SVG's/CloseBtn";
import MobileNav from "./MobileNav";
import '../css/Navbar.css';

const Navbar = () => {
    
    const [isOpen,setOpen] = useState(false);

    const toggle = ()=>{
        console.log("hello : ",isOpen);
        setOpen(!isOpen);
    }

    return (
        <>
            <header>
                <div className="navbar">
                    <NavLink to="/">
                        <AaveLogo height="20" width="71.989"/>
                    </NavLink>
                    <div className="d-none d-lg-flex" style={{ flex: 1 }}>
                        <Navlinks />
                    </div>
                    <div className="d-flex justify-content-center align-items-center d-lg-none menuBtn" onClick={toggle}>
                      {
                        isOpen ? 
                        <CloseBtn strokeColor="white" height="20" width="20"/>
                        :
                       <HamburgerBtn strokeColor="white" height="20" width="20" />
                      }
                    </div>
                    {
                        isOpen ? <MobileNav className="active" func={toggle}/> : <MobileNav />
                    }
                </div>
            </header>
        </>
    )
}

export default Navbar;