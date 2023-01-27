
import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Routes,
  Link,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Result from "./pages/Result/Result";
import Researcher from "./pages/Researcher/Researcher";
import Block from "./pages/Researcher/block";


const block={
  index: 1,
  projectLink : "https://github.com/NusRAT-LiA/Blockchain_in_Cpp-SPL-1",
  researcherID : 40,
  researcherVerdict : "the project is scalable",
  prevHash : "004xx6",
  
};




function App() {
  return( 
    <>
  <nav className="bg-violet-100">
    <ul className="text-purple-800 md:flex list-none flex-row grid justify-end items-center flex-initial py-12 text-xl">
      <li className="mx-6 cursor-pointer"><Link to="/">Home</Link></li>
      <li className="mx-6 cursor-pointer"><Link to="/register">Register</Link></li>
      <li className="mx-6 cursor-pointer"><Link to="/researcher">Researcher</Link></li>
      <li className="mx-6 cursor-pointer"><Link to="/result">Result</Link></li>
      <li className="bg-purple-500 text-white px-8 py-3 mx-6 rounded-full hover:bg-purple-900 cursor-pointer"><Link to="/login">Login</Link></li>
    </ul>
    
  </nav>
  
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/researcher" element={<Researcher projectLink="https://github.com/NusRAT-LiA/Blockchain_in_Cpp-SPL-1" reviewBlock={block}/>}></Route>
    <Route path="/result" element={<Result/>}></Route>
  </Routes>
  </>
  );
}

export default App;
