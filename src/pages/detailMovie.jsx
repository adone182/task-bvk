import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie, getTrailerMovie } from "../services/api";
import Swal from "sweetalert2";
import Button from "../components/Elements/Button";
import YouTube from "react-youtube";
import { WatchListContext } from "../contexts/WatchListContext";
import Navbar from "../components/Elements/Navbar";

const DetailMoviePage = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getDetailMovie(id);
        setDetailMovie(movieData);

        const trailerData = await getTrailerMovie(id);
        if (trailerData && trailerData.length > 0) {
          const officialTrailer = trailerData.find(
            (trailer) => trailer.name === "Official Trailer"
          );
          if (officialTrailer) {
            setTrailerUrl(officialTrailer.key);
          } else {
            console.log("Official Trailer not found.");
          }
        } else {
          console.log("No trailer data found.");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, [id]);

  const handlePlayTrailer = () => {
    setShowTrailer((prevState) => !prevState);
  };

  const handleAddToWatchList = () => {
    if (watchList.some((movie) => movie.id === detailMovie.id)) {
      removeFromWatchList(detailMovie.id);
      localStorage.setItem(
        "watchList",
        JSON.stringify(watchList.filter((movie) => movie.id !== detailMovie.id))
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
      addToWatchList(detailMovie);
      localStorage.setItem(
        "watchList",
        JSON.stringify([...watchList, detailMovie])
      );
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
    <Fragment>
      <Navbar />
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detailMovie.backdrop_path})`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gray-900 bg-opacity-75 rounded-lg p-8 md:p-16 md:flex">
            <div className="md:w-1/4">
              <img
                src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
                alt={detailMovie.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-3/4 md:pl-8 mt-8 md:mt-0">
              <h1 className="md:text-4xl text-2xl font-bold text-white mb-4">
                {detailMovie.title} ({detailMovie.original_language})
              </h1>
              <span className="text-white font-light italic">
                {detailMovie.tagline}
              </span>
              <div className="flex justify-start items-center gap-5 mt-2">
                <span className="text-white border p-1">
                  {detailMovie.adult ? "SU" : "18+"}
                </span>
                <span className="text-white">
                  ({detailMovie.original_language})
                </span>
                <p className="text-white">
                  <span className="font-bold"></span>
                  {detailMovie.runtime}
                </p>
              </div>

              <div className="text-white italic mt-2">
                {detailMovie.genres &&
                  detailMovie.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index !== detailMovie.genres.length - 1 && ", "}
                    </span>
                  ))}
              </div>

              <h2 className="text-white font-medium mt-10 mb-2 text-3xl">
                Sinopsis
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                {detailMovie.overview}
              </p>
              <div className="text-white">
                <p className="text-gray-400 font-medium italic">
                  {detailMovie.release_date}
                </p>
                <p className="italic">
                  <span className="font-bold">⭐ </span>{" "}
                  {!isNaN(detailMovie.vote_average)
                    ? parseInt(detailMovie.vote_average)
                    : " "}
                  /10 ({detailMovie.vote_count})
                </p>
              </div>
              <div className="flex flex-start md:flex-row flex-col mt-10 gap-2 mb-5">
                <Button onClick={handlePlayTrailer}>Play Trailer</Button>
                <Button onClick={handleAddToWatchList}>
                  {watchList.some((movie) => movie.id === detailMovie.id)
                    ? "Remove Watchlist"
                    : "Add Watchlist"}
                </Button>
                <Button>Give Rate ⭐</Button>
              </div>
            </div>
          </div>
        </div>
        {showTrailer && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="absolute h-min-screen inset-0 bg-black opacity-80"></div>
            <div className="z-30">
              <YouTube videoId={trailerUrl} />
              <button
                className="absolute top-0 right-0 m-4 p-2 bg-gray-800 text-white rounded"
                onClick={handlePlayTrailer}
              >
                ❌
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DetailMoviePage;
