import React, { createContext, useContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export function useWatchList() {
  return useContext(WatchListContext);
}

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [rating, setRating] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedWatchList = localStorage.getItem("watchList");
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }

    const storedRating = localStorage.getItem("movieRating");
    if (storedRating) {
      setRating(JSON.parse(storedRating));
    }

    const storedComments = localStorage.getItem("movieComments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeFromWatchList = (movieId) => {
    setWatchList(watchList.filter((movie) => movie.id !== movieId));
  };

  const addRate = (movieId, selectedRating) => {
    let updatedRating = JSON.parse(localStorage.getItem("movieRating")) || [];
    const existingIndex = updatedRating.findIndex(
      (item) => item.id === movieId
    );

    if (existingIndex !== -1) {
      updatedRating[existingIndex].rate = selectedRating;
    } else {
      updatedRating.push({ id: movieId, rate: selectedRating });
    }

    setRating(updatedRating);
    localStorage.setItem("movieRating", JSON.stringify(updatedRating));
  };

  const addComment = (movieId, newComment) => {
    const updatedComments = {
      ...comments,
      [movieId]: [...(comments[movieId] || []), newComment],
    };
    setComments(updatedComments);
    localStorage.setItem("movieComments", JSON.stringify(updatedComments));
  };

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        addToWatchList,
        addRate,
        removeFromWatchList,
        rating,
        setRating,
        comments,
        setComments,
        addComment,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
// import { useReducer, createContext, useContext } from "react";

// export const WatchListContext = createContext();

// export const useWatchList = () => {
//   return useContext(WatchListContext);
// };

// const initialState = {};

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "ACTION_TYPE":
//       return;
//     default:
//       return state;
//   }
// };

// export const WatchListProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <WatchListContext.Provider value={{ initialState }}>
//       {children}
//     </WatchListContext.Provider>
//   );
// };
