import { Route, Routes } from "react-router-dom"
import { useState } from "react";
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Home from "../pages/home";

function R()
{
     const [arr, setArr] = useState([]); 
    return(
        <>
            <Routes>
                <Route path="/" element={<Login arr={arr}></Login>}></Route>
                <Route path="/Signup" element={<Signup  arr={arr} setArr={setArr}></Signup>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
        </>
    )
}

export default R