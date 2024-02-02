import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASEURL;
const apiKey = import.meta.env.VITE_APP_APIKEY;

export const getMovieList = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return null;
  }
};

export const getDetailMovie = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/${id}?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return null;
  }
};

export const searchMovie = async (params) => {
  try {
    const search = await axios.get(
      `${baseUrl}/search/movie?query=${params}&page=1&api_key=${apiKey}`
    );
    return search.data;
  } catch (error) {
    console.error("Error searching movie:", error);
    return null;
  }
};

export const getTrailerMovie = async (id) => {
  try {
    const videoUrl = await axios.get(
      `${baseUrl}/movie/${id}?api_key=${apiKey}&append_to_response=videos`
    );
    return videoUrl.data.videos.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return null;
  }
};
