import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import Swal from "sweetalert2";
import { convertDateFormat } from "../../../services/convertDateFormat";

const CardMovieList = ({
  popularMovie,
  watchList,
  addToWatchList,
  removeFromWatchList,
  title,
}) => {
  const handleAddToWatchList = (movie) => {
    if (watchList.some((item) => item.id === movie.id)) {
      removeFromWatchList(movie.id);
      localStorage.setItem(
        "watchList",
        JSON.stringify(watchList.filter((item) => item.id !== movie.id))
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Removed from Watchlist",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "bg-green-500 text-white",
          title: "font-bold",
        },
      });
    } else {
      addToWatchList(movie);
      localStorage.setItem("watchList", JSON.stringify([...watchList, movie]));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Added to Watchlist",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "bg-green-500 text-white",
          title: "font-bold",
        },
      });
    }
  };
  return (
    <div className="w-full lg:px-32 px-10 md:py-8 py-5">
      <h1 className="text-slate-600 italic font-bold my-5 text-3xl">{title}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
        {popularMovie?.map((movie) => (
          <div
            className="max-w-xs overflow-hidden shadow-xl rounded-2xl"
            key={movie.id}
          >
            <img
              className="w-full h-96 object-cover rounded-2xl"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="px-3 py-3">
              <p className="font-bold text-md mb-1">{movie.title}</p>
              <p className="text-gray-400 text-medium font-semibold italic">
                {movie.release_date &&
                  typeof movie.release_date === "string" &&
                  convertDateFormat(movie.release_date)}
              </p>
            </div>
            <div className="px-3 py-1 text-center">
              <Link to={`/movie/${movie.id}`}>
                <Button classname="bg-transparent border border-blue-600 text-blue-600 hover:text-blue-300 hover:border-none rounded px-3 w-full">
                  View Details
                </Button>
              </Link>
            </div>
            <div className="px-3 py-2 text-center">
              <Button
                classname="bg-transparent border border-blue-600 text-blue-600 hover:text-blue-300 hover:border-none rounded px-3 w-full"
                onClick={() => handleAddToWatchList(movie)}
              >
                {watchList.some((item) => item.id === movie.id)
                  ? "Remove Watchlist"
                  : "Add Watchlist"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMovieList;
