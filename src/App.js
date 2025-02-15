import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Auth from "./Auth";
import Products from "./Products";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //   }
  // };
  
  // const fetchPerson = async() =>{
  //   let data = await axios.get('https://catalog.data.gov/api/3', config);
  //   console.log(data);
  // }

  // useEffect(()=>{
  //   fetchPerson();
  // })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App