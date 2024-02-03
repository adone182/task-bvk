import React, { createContext, useContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export function useWatchList() {
  return useContext(WatchListContext);
}

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const storedWatchList = localStorage.getItem("watchList");
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }
  }, []);

  const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeFromWatchList = (movieId) => {
    setWatchList(watchList.filter((movie) => movie.id !== movieId));
  };

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        addToWatchList,
        removeFromWatchList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
