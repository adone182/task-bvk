import React, { createContext, useContext, useState } from "react";

export const WatchListContext = createContext();

export function useWatchList() {
  return useContext(WatchListContext);
}

export function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeFromWatchList = (movieId) => {
    setWatchList(watchList.filter((movie) => movie.id !== movieId));
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}
