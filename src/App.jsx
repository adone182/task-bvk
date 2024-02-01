import { useEffect, useState } from "react";
import CardMovieList from "./components/Layouts/CardMovieList";
import { getMovieList } from "./services/api";
import Navbar from "./components/Elements/Navbar";
import Carousel from "./components/Fragments/Carousel";

const App = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((res) => {
      setPopularMovie(res);
    });
  }, [popularMovie]);

  return (
    <>
      <Navbar />
      <Carousel popularMovie={popularMovie} />
      <div className="w-full md:px-32 px-10 md:py-8 py-5">
        <h1 className="text-blue-600 font-bold my-5 text-3xl">Popular Movie</h1>
        <CardMovieList popularMovie={popularMovie} />
      </div>
    </>
  );
};

export default App;
