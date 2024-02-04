import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie, getTrailerMovie } from "../services/api";
import CardDetailMovie from "../components/Fragments/CardDetailMovie";
import { WatchListContext } from "../contexts/WatchListContext";
import CommentSection from "../components/Fragments/CommentSection";
import MovieLayouts from "../components/Layouts/MovieLayouts";

const DetailMoviePage = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { watchList, addToWatchList, removeFromWatchList, rating, setRating } =
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

  return (
    <Fragment>
      <MovieLayouts>
        <CardDetailMovie
          detailMovie={detailMovie}
          trailerUrl={trailerUrl}
          showTrailer={showTrailer}
          setShowTrailer={setShowTrailer}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
          rating={rating}
          setRating={setRating}
          showRatingModal={showRatingModal}
          setShowRatingModal={setShowRatingModal}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
          watchList={watchList}
        />
        <CommentSection movieId={id} />
      </MovieLayouts>
    </Fragment>
  );
};

export default DetailMoviePage;
