import { Link } from "react-router-dom";

const CardMovieList = ({ popularMovie }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
      {popularMovie.map((movie) => (
        <div
          key={movie.id}
          className="max-w-xs rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 h-10 mb-5">
              {movie.title}
            </div>
            <p className="text-gray-700 text-base">
              Release : {movie.release_date}
            </p>
            <p className="text-gray-700 text-base">{movie.vote_average}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to={`/movie/${movie.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMovieList;
