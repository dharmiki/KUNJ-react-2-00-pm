import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Sign = ({ setUser }) => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (password.length >= 5) {
      setUser({ email, role });
      navigate(role === "admin" ? "/admin" : "/user");
    } else {
      alert("Password must be at least 5 characters");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{role.toUpperCase()} Signup</h2>
      <input type="email" placeholder="Enter Email"
        value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Enter Password"
        value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <Link to={`/login/${role}`}>Login</Link></p>
    </div>
  );
};
export default Sign;
