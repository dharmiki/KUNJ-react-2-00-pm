import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Pages/Login";

import AdminDashboard from "./Pages/AdminDashboard";
import UserDashboard from "./Pages/UserDashboard";

import Sign from "./Pages/Sign";
import Home from "./Pages/home";




function App() {
  const [user, setUser] = useState(null); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/login/:role"
          element={ <Login setUser={setUser}></Login>}
        />
        <Route
          path="/signup/:role"
          element={<Sign setUser={setUser}></Sign>}
        />
        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
               <AdminDashboard setUser={setUser}></AdminDashboard>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/user"
          element={
            user?.role === "user" ? (
              <UserDashboard setUser={setUser}></UserDashboard>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
