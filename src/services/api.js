import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASEURL;
const apiKey = import.meta.env.VITE_APP_APIKEY;

export const getMovieList = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return null;
  }
};

export const searchMovie = async (params) => {
  try {
    const response = await axios.get(params);
    return response.data;
  } catch (error) {
    console.error("Error searching movie:", error);
    return null;
  }
};
