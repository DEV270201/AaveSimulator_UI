import React from "react";
import Navbar from "./components/Navbar";
import Markets from "./pages/Markets";
import Dashboard from "./pages/Dashboard";
import { Routes,Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
    {/* for larger devices */}
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/markets" exact element={<Markets />} />
    </Routes>
    </>
  )
}

export default App;