const CardWatchList = ({ watchList }) => {
  return (
    <div className="md:px-32 px-5 py-10 flex flex-col justify-center gap-8">
      <h1 className="font-semibold text-3xl text-blue-500 py-10">
        My Watchlist Movie
      </h1>

      {watchList.map((movie) => (
        <div
          className="rounded-lg border w-full flex md:flex-row flex-col gap-8 shadow-xl"
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="md:w-36 w-full md:h-auto h-96 object-cover md:rounded-l-lg"
          />
          <div className="py-2 px-3">
            <h2 className="font-bold text-blue-600 text-lg">{movie.title}</h2>
            <p className="my-2 text-base font-regular">{movie.release_date}</p>
            <p className="my-2 text-base font-regular">{movie.overview}</p>
            <p>rate </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardWatchList;
