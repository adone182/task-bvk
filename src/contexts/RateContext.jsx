import React, { useContext, useReducer, createContext } from "react";

export const RateContext = createContext();

export const useRateContext = () => {
  return useContext(RateContext);
};

const initialState = {
  filmId: 0,
  userRate: 0,
};

export const reducerRate = (state, action) => {
  switch (action.type) {
    case "ADD_RATE":
      return { ...state, rate: action.rate };
    default:
      return state;
  }
};

export const RateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerRate, initialState);

  const rateContextValue = { state, dispatch };

  return (
    <RateContext.Provider value={{ rateContextValue }}>
      {children}
    </RateContext.Provider>
  );
};
