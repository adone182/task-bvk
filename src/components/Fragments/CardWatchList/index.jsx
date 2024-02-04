import { convertDateFormat } from "../../../services/convertDateFormat";
const CardWatchList = ({ watchList, title }) => {
  return (
    <div className="md:px-32 px-5 pt-10 pb-20 flex flex-col justify-center gap-8">
      <h1 className="font-semibold text-3xl text-blue-500 py-10">{title}</h1>

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
            <h2 className="font-bold text-blue-600 text-lg">
              {movie.title} ({movie.original_language})
            </h2>
            <span className="text-gray-700 border border-gray-700 p-0">
              {movie.adult ? "SU" : "18+"}{" "}
            </span>

            <span className="ml-3 font-bold text-gray-600">
              ⭐{" "}
              {!isNaN(movie.vote_average) ? parseInt(movie.vote_average) : " "}
              /10 ({movie.vote_count})
            </span>

            <p className="my-2 text-gray-400 font-semibold italic">
              {movie.release_date &&
                typeof movie.release_date === "string" &&
                convertDateFormat(movie.release_date)}
            </p>
            <p className="my-2 text-base font-regular">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardWatchList;
