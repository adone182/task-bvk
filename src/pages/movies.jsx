import { useContext, useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../services/api";
import Navbar from "../components/Elements/Navbar";
import Carousel from "../components/Fragments/Carousel";
import CardMovieList from "../components/Fragments/CardMovieList";
import { WatchListContext } from "../contexts/WatchListContext";
import Search from "../components/Elements/Search";

const MoviesPage = () => {
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((res) => {
      setPopularMovie(res);
    });
  }, []);

  const handleSearch = async (query) => {
    if (query.length > 3) {
      const queryResult = await searchMovie(query);
      if (queryResult) {
        setPopularMovie(queryResult.results);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Carousel popularMovie={popularMovie} />
      <Search onSearch={handleSearch} />
      <CardMovieList
        popularMovie={popularMovie}
        watchList={watchList}
        addToWatchList={addToWatchList}
        removeFromWatchList={removeFromWatchList}
        title="Popular Movie"
      />
    </>
  );
};

export default MoviesPage;
