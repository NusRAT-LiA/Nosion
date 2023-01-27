import Sidebar from "../../components/Sidebar/Sidebar";
import "./Researcher.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from 'react';
import axios from 'axios';
import Chart from '../../components/chart/chart';
//import ReactDOM from "react-dom/client";
import Block from "./block";
//import IPFS from 'ipfs-js';

import {
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const Researcher =({projectLink,reviewBlock})=>
{     

    return(
      <>
     
        <div className="research">
        <Sidebar/>
        <div className="homeContainer">
  
         <nav>
         <div className="charts">
          <Chart/>
          </div>
          <div className="navbar bg-gradient-to-r from-indigo-500 ..."> <pre className="span text-white">Project-to-be-researched : <a href="https://github.com/NusRAT-LiA/Blockchain_in_Cpp-SPL-1" className="text-purple-900 "></a></pre></div>
          <div className="bg-purple-200 flex flex-col justify-center items-center">
          <form>
  <label for="findings">Findings:</label><br/>
  <textarea id="findings" name="findings" className="w-96 h-32"></textarea>
  <br/>
  <label for="recommendation">Recommendations:</label><br/>
  <textarea id="recommendation" name="recommendation" className="w-96 h-32"></textarea>
  <br/>
  <label for="investment">Estimated Investment Needed:</label><br/>
  <input type="number" id="investment" name="investment" className="w-96 h-32"/>
  <br/>
  <label for="impact">Estimated Impact:</label><br/>
  <input type="text" id="impact" name="impact" className="w-96 h-32"/>
  <br/>
  <label for="sustainability-index">Sustainability Index Analysis:</label><br/>
  <textarea id="sustainability-index" name="sustainability-index " className="w-96 h-32 px-8 py-3 my-6 " ></textarea>
  <br/>
  <input type="submit" className="bg-purple-500 text-white px-8 py-3 mx-6 rounded-full hover:bg-purple-900 cursor-pointer" value="Submit"/>
  </form>

</div>
          <div className="navbar bg-gradient-to-r from-indigo-500 ..."><pre className="span text-white">Block-to-verify :<Link to="/block" className="text-blue-900"> </Link></pre></div>
          </nav>
        </div>
        
        
        </div>

       <Routes>
         <Route path="/block" element={<Block />}></Route>
       </Routes>
</>
    );
}

export default Researcher;