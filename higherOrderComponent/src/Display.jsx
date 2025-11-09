const Display = ({ value = [] }) => {
  const data = value;

  return (
    <div className="bg-[#0b0f16] py-5 font-[Poppins]">
      <div className="grid w-full gap-6 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] p-5 text-[#e9eef6]">
        {data.map((e, i) => {
          return (
            <div
              className="flex flex-col rounded-[14px] overflow-hidden bg-[#161b25] shadow-[0_6px_18px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.9)]"
              key={i}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt={e.original_title}
                className="w-full h-[360px] object-cover"
              />
              <div className="flex flex-col gap-2 p-3.5">
                <h2 className="text-lg font-semibold text-white">{e.original_title}</h2>
                <p className="text-sm leading-[1.5] text-[#c9d1d9] max-h-[65px] overflow-hidden text-ellipsis">
                  {e.overview.length > 120
                    ? e.overview.slice(0, 120) + "..."
                    : e.overview}
                </p>

                <div className="flex flex-wrap gap-3 text-[13px] text-[#9baecf]">
                  <span className="text-[#ffcc00] font-semibold">
                    ⭐ {e.vote_average} ({e.vote_count} votes)
                  </span>
                  <span>📅 {e.release_date}</span>
                  <span>🌐 {e.original_language.toUpperCase()}</span>
                </div>

                <button className="mt-2.5 px-3.5 py-2.5 bg-gradient-to-r from-[#ff004c] to-[#ff3366] rounded-lg text-white font-semibold cursor-pointer transition duration-300 ease-in-out hover:from-[#ff3366] hover:to-[#ff004c] hover:scale-105">
                  ▶ Watch Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
