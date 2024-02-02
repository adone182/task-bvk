// Carousel.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ popularMovie }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {popularMovie.map((movie) => (
        <div className="relative" key={movie.id}>
          <img
            className="object-cover w-full h-96"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h1 className="absolute t-10">{movie.title}</h1>
          <h1>{movie.overview}</h1>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
