import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ arr, setArr }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    const obj = { username, email, password };
    setArr([...arr, obj]);
    setUsername("");
    setEmail("");
    setPassword("");
    alert("✨ Signup successful!");
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      <div className="bg-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-pink-200">
        <h3 className="text-3xl font-extrabold text-center text-purple-700 mb-6 tracking-wide">
          🌸 Create Your Account
        </h3>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white/60 placeholder-gray-500"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition bg-white/60 placeholder-gray-500"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white/60 placeholder-gray-500"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition"
          >
            ✨ Signup
          </button>
        </form>

        <p
          onClick={() => navigate("/")}
          className="text-center pt-4 text-purple-600 font-medium hover:text-purple-800 cursor-pointer transition"
        >
          Already have an account?{" "}
          <span className="font-bold">Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;

