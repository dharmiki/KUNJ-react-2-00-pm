import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      <div className="bg-white/30 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-pink-200 text-center">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-8 tracking-wide">
          🌸 Choose Your Role
        </h2>

        <div className="flex flex-col space-y-4">
          <Link to="/login/admin">
            <button className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition">
              👑 Admin
            </button>
          </Link>

          <Link to="/login/user">
            <button className="w-full py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition">
              🙋 User
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
