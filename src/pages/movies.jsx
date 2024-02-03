import { useContext, useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../services/api";
import Navbar from "../components/Elements/Navbar";
import Carousel from "../components/Fragments/Carousel";
import CardMovieList from "../components/Fragments/CardMovieList";
import { WatchListContext } from "../contexts/WatchListContext";

const MoviesPage = () => {
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);
  const [popularMovie, setPopularMovie] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getMovieList().then((res) => {
      setPopularMovie(res);
    });
  }, []);

  const search = async (params) => {
    if (params.length > 3) {
      const queryResult = await searchMovie(params);
      if (queryResult) {
        setPopularMovie(queryResult.results);
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* <Carousel popularMovie={popularMovie} /> */}
      <div className="px-32 flex justify-center items-center mt-8">
        <div className="relative w-full">
          <input
            className="border border-gray-300 bg-white h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
            type="search"
            placeholder="Search for movies..."
            onChange={({ target }) => {
              setQuery(target.value);
              search(target.value);
            }}
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full md:px-32 px-10 md:py-8 py-5">
        <h1 className="text-blue-600 font-bold my-5 text-3xl">Popular Movie</h1>
        <CardMovieList
          popularMovie={popularMovie}
          watchList={watchList}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
        />
      </div>
    </>
  );
};

export default MoviesPage;
