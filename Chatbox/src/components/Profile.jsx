import { useState } from "react";

export default function Profile({ setShowProfile }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (isLogin) {
      const stored = JSON.parse(localStorage.getItem("user"));
      if (stored && stored.email === email && stored.password === password) {
        alert("Login successful!");
        setShowProfile(false);
      } else {
        alert("Invalid credentials or no account.");
      }
    } else {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Account created!");
      setIsLogin(true);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <h1 className="text-2xl mb-2">{isLogin ? "Login" : "Sign Up"}</h1>
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded bg-gray-700 outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 rounded bg-gray-700 outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 py-2 rounded" onClick={handleAuth}>
        {isLogin ? "Login" : "Sign Up"}
      </button>
      <p
        className="text-sm text-gray-300 cursor-pointer"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "No account? Sign up" : "Have an account? Login"}
      </p>
    </div>
  );
}
