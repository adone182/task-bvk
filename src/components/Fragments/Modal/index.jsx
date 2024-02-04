import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { WatchListContext } from "../../../contexts/WatchListContext";

const RatingModal = ({ onClose, movieId }) => {
  const { addRate, rating, setRating } = useContext(WatchListContext);
  const handleRatingChange = (selectedRating) => {
    addRate(movieId, selectedRating);
    onSubmitRating(selectedRating);
  };

  const onSubmitRating = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Rating submitted successfully!",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: "bg-green-500 text-white",
        title: "font-bold",
      },
    });
    onClose();
  };

  return (
    <div id="ratingModal" className="modal">
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < rating
                ? "text-yellow-400 cursor-pointer"
                : "text-gray-300 cursor-pointer"
            }
            onClick={() => handleRatingChange(index + 1)}
            onMouseEnter={() => setRating(index + 1)}
            onMouseLeave={() => setRating(0)}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingModal;
