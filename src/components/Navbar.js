import React from "react";
import Navlinks from "./Navlinks";
import AaveLogo from "./SVG's/AaveLogo";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = () => {
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
                </div>
            </header>
        </>
    )
}

export default Navbar;