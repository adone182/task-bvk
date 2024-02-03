import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import Swal from "sweetalert2";

const CardMovieList = ({
  popularMovie,
  watchList,
  addToWatchList,
  removeFromWatchList,
}) => {
  const handleAddToWatchList = (movie) => {
    const isMovieInWatchList = watchList.some((item) => item.id === movie.id);

    if (isMovieInWatchList) {
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
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
      {popularMovie.map((movie) => (
        <div
          className="max-w-xs overflow-hidden shadow-xl rounded-lg"
          key={movie.id}
        >
          <img
            className="w-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="px-3 py-3">
            <p className="font-bold text-md mb-1">{movie.title}</p>
            <p className="text-gray-400 text-medium">{movie.release_date}</p>
          </div>
          <div className="px-3 py-1 text-center">
            <Link to={`/movie/${movie.id}`}>
              <Button classname="text-blue-500 border border-blue-500 hover:bg-blue-700 hover:text-white">
                View Details
              </Button>
            </Link>
          </div>
          <div className="px-3 py-2 text-center">
            <Button
              classname="text-blue-500 border border-blue-500 hover:bg-blue-700 hover:text-white"
              onClick={() => handleAddToWatchList(movie)}
            >
              Add Watched List
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMovieList;
