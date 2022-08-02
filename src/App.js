import React from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Markets from "./pages/Markets";
import Dashboard from "./pages/Dashboard";
import { Routes,Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
    {/* for larger devices */}
    <Navbar />
    {/* for smaller devices */}
    <MobileNav />
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/markets" exact element={<Markets />} />
    </Routes>
    </>
  )
}

export default App;