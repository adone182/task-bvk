import React, { Fragment, useEffect, useState } from "react";
import CardWatchList from "../components/Fragments/CardWatchList";
import MovieLayouts from "../components/Layouts/MovieLayouts";

const WatchListPage = () => {
  const [watchList, setWatchList] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem("watchList"));
    if (storedWatchList) {
      setWatchList(storedWatchList);
    }
    const storedRate = JSON.parse(localStorage.getItem("movieRating"));
    if (storedRate) {
      setRate(storedRate);
    }
  }, []);

  return (
    <Fragment>
      <MovieLayouts>
        <CardWatchList watchList={watchList} title="My Watchlist Movie" />
      </MovieLayouts>
    </Fragment>
  );
};

export default WatchListPage;
