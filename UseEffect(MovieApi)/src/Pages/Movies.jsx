import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = "0c5847e221b69cb4b142ff5a5efffe90";

  // Fetch movies from TMDB API with page number
  const fetchMovies = (page = 1) => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setMovies(data.results || []);
        } else {
          // ✅ Append new movies to existing ones
          setMovies((prev) => [...prev, ...(data.results || [])]);
        }
        setTotalPages(data.total_pages || 1);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  // Filter movies by search
  const filteredMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 md:p-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 py-10">
          🎬 Trending Movies
        </h1>
        <p className="text-gray-400">Powered by TMDB API</p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="p-3 w-full max-w-md rounded-full border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
      </div>

      {/* Movie list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center bg-gray-900">
              <h3 className="text-lg md:text-xl font-bold truncate">
                {movie.title}
              </h3>
              <p className="text-gray-400 mt-1">
                {movie.release_date
                  ? movie.release_date.slice(0, 4)
                  : "Unknown"}
              </p>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-center justify-center p-4 text-center">
              <p className="text-sm md:text-base text-gray-200">
                {movie.overview
                  ? movie.overview.slice(0, 100) + "..."
                  : "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-3">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2 text-gray-300">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Movie;
