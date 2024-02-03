import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Elements/Navbar";

const WatchListPage = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem("watchList"));
    if (storedWatchList) {
      setWatchList(storedWatchList);
    }
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="md:px-32 px-5 py-10 flex flex-col justify-center gap-8">
        <h1 className="font-semibold text-3xl text-blue-500 py-10">
          Watch List
        </h1>

        {watchList.map((movie) => (
          <div
            className="border border-blue-500 rounded md:w-3/4 w-full flex flex-row gap-8 p-2"
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-24 object-cover rounded-lg"
            />
            <div>
              <h2 className="font-bold text-blue-600 text-lg">{movie.title}</h2>
              <p className="my-2 text-base font-regular">
                {movie.release_date}
              </p>
              <p className="my-2 text-base font-regular">
                {typeof movie.overview === "string"
                  ? movie.overview.substring(0, 150)
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default WatchListPage;
