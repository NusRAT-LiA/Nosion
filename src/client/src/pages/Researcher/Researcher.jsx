import Sidebar from "../../components/Sidebar/Sidebar";
import "./Researcher.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from 'react';
import axios from 'axios';
import Chart from '../../components/chart/chart';
//import ReactDOM from "react-dom/client";
import Block from "./block";

import {
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const Researcher =({projectLink,reviewBlock})=>
{   
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('pdf', file);
        axios.post('http://localhost:4000/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => console.log("success",res))
        .catch(err => console.log(err));
      };

    return(
      <>
     
        <div className="research">
        <Sidebar/>
        <div className="homeContainer">
  
         <nav>
         <div className="charts">
          <Chart/>
          </div>
          <div className="navbar bg-gradient-to-r from-indigo-500 ..."> <pre className="span text-white">Project-to-be-researched : <a href="https://github.com/NusRAT-LiA/Blockchain_in_Cpp-SPL-1" className="text-purple-900 ">{projectLink}</a></pre></div>
          <div className=" bg-gradient-to-r from-white via-purple-500 to-indigo-500 ... flex items-center justify-center gradient-bg "> 
          <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl ">
		      <div class="text-center">
			    <h2 class="mt-5 text-3xl font-bold text-gray-900">
				    Upload Your Work !
			    </h2>
			
            <div class="grid grid-cols-1 space-y-2 ">  
            
            <form >
                 <div class="flex flex-auto max-h-48 w-2/5 mx-auto mt-10">
                  <img class=" h-40 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                 </div>
            
            <input type="file" name="pdf" className="py-10" onChange={handleChange} />
          <button type="submit"className="bg-purple-500 text-white px-8 py-3 mx-6 rounded-full hover:bg-purple-900 cursor-pointer" onClick={handleSubmit}>Upload</button>
           </form>
           </div>
		      </div>
         </div>
          </div>
          <div className="navbar bg-gradient-to-r from-indigo-500 ..."><pre className="span text-white">Block-to-verify :<Link to="/block" className="text-blue-900">Inspect Block </Link></pre></div>
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