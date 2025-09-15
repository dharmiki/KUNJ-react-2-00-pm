import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Movie from "../Pages/Movies"

function R()
{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/movie" element={<Movie></Movie>}></Route>
            </Routes>
        </>
    )
}
export default R