import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.webp";

function Home() {
  return (
    <section className="relative h-screen flex items-center justify-start">
      {/* Hero Image */}
      <img
        src={HeroImage}
        alt="Hero Poster"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-xl px-8 md:px-16 text-left">
        {/* Movie Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Demon Slayer
        </h1>

        {/* Movie Description */}
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          A skilled thief leads a team into the subconscious of targets to steal secrets. Mind-bending, thrilling, and visually stunning.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          {/* Primary Button */}
          <Link
            to="/Movie"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold text-lg transition shadow-lg"
          >
            🎬 Watch Now
          </Link>

          {/* Secondary Button */}
          <Link
            to="/about"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition shadow-lg"
          >
            ℹ️ Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;

