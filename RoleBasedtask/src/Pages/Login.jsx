import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 🚨 Simple check: password must be "12345"
    if (password === "12345") {
      setUser({ email, role });
      navigate(role === "admin" ? "/admin" : "/user");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{role.toUpperCase()} Login</h2>
      <input type="email" placeholder="Enter Email"
        value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Enter Password"
        value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to={`/signup/${role}`}>Signup</Link></p>
    </div>
  );
};
export default Login;
