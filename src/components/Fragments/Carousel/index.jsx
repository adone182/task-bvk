// Carousel.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMovieList } from "../../../services/api";

const Carousel = ({ popularMovie }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {popularMovie.map((movie, index) => (
        <div key={index}>
          <img
            className="w-full object-cover h-96"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
