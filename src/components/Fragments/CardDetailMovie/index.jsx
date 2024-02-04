import YouTube from "react-youtube";
import RatingModal from "../../Fragments/Modal";
import Button from "../../Elements/Button";
import { convertDateFormat } from "../../../services/convertDateFormat";
import { convertDurationToMinutes } from "../../../services/convertDurationToMinutes";

const CardDetailMovie = ({
  detailMovie,
  trailerUrl,
  showTrailer,
  setShowTrailer,
  addToWatchList,
  removeFromWatchList,
  rating,
  setRating,
  showRatingModal,
  setShowRatingModal,
  selectedMovieId,
  setSelectedMovieId,
  watchList,
}) => {
  const tampilkanBintang = (nilai) => {
    let bintang = "";
    for (let i = 0; i < nilai; i++) {
      bintang += "⭐";
    }
    return bintang;
  };

  const getRate = tampilkanBintang(rating);

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

  const handleRateMovie = (movieId) => {
    setSelectedMovieId(movieId);
    setShowRatingModal((prevState) => !prevState);
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detailMovie.backdrop_path})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
        <div className="my-5 bg-gray-900 bg-opacity-75 rounded-lg p-8 md:p-16 md:flex">
          <div className="md:w-1/4">
            <img
              src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
              alt={detailMovie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-3/4 md:pl-8 mt-8 md:mt-0">
            <h1 className="md:text-4xl text-2xl font-bold text-white mb-4">
              {detailMovie.title}
            </h1>
            <span className="text-white font-light italic">
              {detailMovie.tagline}
            </span>
            <div className="flex justify-start items-center gap-5 mt-2">
              <span className="text-white border p-0">
                {detailMovie.adult ? "SU" : "18+"}
              </span>
              <span className="text-white">
                ({detailMovie.original_language})
              </span>
              <p className="text-white">
                <span className="font-bold"></span>
                {convertDurationToMinutes(detailMovie.runtime)}
              </p>
            </div>
            <div className="text-white mt-2">
              <p className="text-gray-400 font-medium italic">
                {detailMovie.release_date &&
                  typeof detailMovie.release_date === "string" &&
                  convertDateFormat(detailMovie.release_date)}
              </p>
              <p className="italic mb-2">
                <span className="font-bold">⭐ </span>{" "}
                {!isNaN(detailMovie.vote_average)
                  ? parseInt(detailMovie.vote_average)
                  : " "}
                /10 ({detailMovie.vote_count})
              </p>
              <p>
                {" "}
                Your Rate : <span className="italic">{getRate} </span>
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
            <p className="text-gray-300 text-lg mb-6">{detailMovie.overview}</p>

            <div className="flex flex-start items-center md:flex-row flex-col mt-10 gap-2 mb-5">
              <Button onClick={handlePlayTrailer}>Play Trailer</Button>
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
              <Button onClick={handleAddToWatchList}>
                {watchList.some((movie) => movie.id === detailMovie.id)
                  ? "Remove Watchlist"
                  : "Add Watchlist"}
              </Button>
              <Button onClick={() => handleRateMovie(detailMovie.id)}>
                Give Rate ⭐
              </Button>
              {showRatingModal && (
                <RatingModal
                  onClose={() => setShowRatingModal(false)}
                  movieId={selectedMovieId}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailMovie;
