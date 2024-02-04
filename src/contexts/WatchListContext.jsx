// import React, { createContext, useContext, useEffect, useState } from "react";

// export const WatchListContext = createContext();

// export function useWatchList() {
//   return useContext(WatchListContext);
// }

// export const WatchListProvider = ({ children }) => {
//   const [watchList, setWatchList] = useState([]);

//   useEffect(() => {
//     const storedWatchList = localStorage.getItem("watchList");
//     if (storedWatchList) {
//       setWatchList(JSON.parse(storedWatchList));
//     }
//   }, []);

//   const addToWatchList = (movie) => {
//     setWatchList([...watchList, movie]);
//   };

//   const removeFromWatchList = (movieId) => {
//     setWatchList(watchList.filter((movie) => movie.id !== movieId));
//   };

//   return (
//     <WatchListContext.Provider
//       value={{
//         watchList,
//         addToWatchList,
//         removeFromWatchList,
//       }}
//     >
//       {children}
//     </WatchListContext.Provider>
//   );
// };

// WatchListContext.js;
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const WatchListContext = createContext();

// export function useWatchList() {
//   return useContext(WatchListContext);
// }

// export const WatchListProvider = ({ children }) => {
//   const [watchList, setWatchList] = useState([]);
//   const [rating, setRating] = useState([]);

//   useEffect(() => {
//     const storedWatchList = localStorage.getItem("watchList");
//     if (storedWatchList) {
//       setWatchList(JSON.parse(storedWatchList));
//     }
//   }, []);

//   const addToWatchList = (movie) => {
//     setWatchList([...watchList, movie]);
//   };

//   const removeFromWatchList = (movieId) => {
//     setWatchList(watchList.filter((movie) => movie.id !== movieId));
//   };

//   const addRate = (movieId, selectedRating) => {
//     setRating({ ...rating, [movieId]: selectedRating });
//     localStorage.setItem(
//       `movieRating`,
//       JSON.stringify({ ...rating, [movieId]: selectedRating })
//     );
//   };

//   return (
//     <WatchListContext.Provider
//       value={{
//         watchList,
//         addToWatchList,
//         addRate,
//         removeFromWatchList,
//         rating,
//         setRating,
//       }}
//     >
//       {children}
//     </WatchListContext.Provider>
//   );
// };

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
    setRating({ ...rating, [movieId]: selectedRating });
    localStorage.setItem(
      `movieRating`,
      JSON.stringify({ ...rating, [movieId]: selectedRating })
    );
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
