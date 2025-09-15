import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home";
import Movie from "./Pages/Movies";   


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
