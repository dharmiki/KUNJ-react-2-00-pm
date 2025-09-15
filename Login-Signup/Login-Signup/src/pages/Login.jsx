import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ arr }) {
  const [checkemail, setCheckEmail] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const user = arr.find(
      (el) => el.email === checkemail && el.password === checkpassword
    );

    if (user) {
      setCheckEmail("");
      setCheckPassword("");
      alert("✨ Successful Login ✨");
      navigate("/home");
    } else {
      const emailExists = arr.some((el) => el.email === checkemail);
      alert(emailExists ? "❌ Wrong password" : "❌ Email not found");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      <div className="bg-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-pink-200">
        <h3 className="text-3xl font-extrabold text-center text-purple-700 mb-6 tracking-wide">
          🌸 Perfume Login
        </h3>

        <input
          className="w-full px-4 py-2 mb-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          placeholder="Enter Email"
          value={checkemail}
          onChange={(e) => setCheckEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full px-4 py-2 mb-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Enter Password"
          value={checkpassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />

        <button
          className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition"
          onClick={handleLogin}
        >
          ✨ Login
        </button>

        <p
          onClick={() => navigate("/signup")}
          className="text-center pt-4 text-purple-600 font-medium hover:text-purple-800 cursor-pointer transition"
        >
          Don’t have an account? <span className="font-bold">Signup</span>
        </p>
      </div>
    </div>
  );
}

export default Login;

