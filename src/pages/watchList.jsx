import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Elements/Navbar";
import CardWatchList from "../components/Fragments/CardWatchList";

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
      <Navbar />
      <CardWatchList watchList={watchList} />
    </Fragment>
  );
};

export default WatchListPage;
