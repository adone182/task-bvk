import React, { useContext, useState } from "react";
import { WatchListContext } from "../../../contexts/WatchListContext";
import Button from "../../Elements/Button";
import { comment } from "postcss";

const CommentSection = ({ movieId }) => {
  const { comments, addComment } = useContext(WatchListContext);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log("typee comemnt", newComment);
    if (newComment.trim() !== "") {
      addComment(movieId, newComment);
      setNewComment("");
    }
  };

  return (
    <div className="w-full lg:px-72 px-4 py-5">
      <div className="comment-section">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="comments-list space-y-4">
          <div className="comment-item flex items-center space-x-4">
            <img
              src="https://cdn.icon-icons.com/icons2/520/PNG/512/Button-circle-person_icon-icons.com_52230.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="block font-semibold">You</span>
              <span className="star-icon">⭐⭐⭐⭐⭐</span>
              <p className="text-gray-700">Great video to watch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Add Comment</h2>
        <form
          onSubmit={handleSubmitComment}
          className="flex flex-col space-y-4"
        >
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add your comment"
            className="lg:w-3/4 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            rows={4}
          />
          <Button
            type="submit"
            classname="lg:w-3/4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
