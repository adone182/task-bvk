import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ popularMovie }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderOverview = (overview) => {
    const maxLength = 150;
    if (overview.length > maxLength) {
      return overview.substring(0, maxLength) + "...";
    }
    return overview;
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {popularMovie.map((movie) => (
          <div className="relative" key={movie.id}>
            <div className="relative flex items-center">
              <img
                className="object-cover w-full h-96"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 opacity-90 flex items-center">
                <div className="lg:px-32 md:px-10 px-4 text-white">
                  <h1 className="text-2xl font-bold mb-2 italic">
                    {movie.title}
                  </h1>
                  <p className="text-md italic">
                    {renderOverview(movie.overview)}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
