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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      <div className="bg-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-pink-200">
        <h3 className="text-3xl font-extrabold text-center text-purple-700 mb-6 tracking-wide">
          🌸 {role.toUpperCase()} Login
        </h3>

        <input
          type="email"
          className="w-full px-4 py-2 mb-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full px-4 py-2 mb-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition"
          onClick={handleLogin}
        >
          ✨ Login
        </button>

        <p className="text-center pt-4 text-purple-600 font-medium hover:text-purple-800 transition">
          Don’t have an account?{" "}
          <Link
            to={`/signup/${role}`}
            className="font-bold hover:underline cursor-pointer"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
