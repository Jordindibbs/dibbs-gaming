import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 6 ? (
          <FaStar />
        ) : value >= 5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 8 ? (
          <FaStar />
        ) : value >= 7 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 10 ? (
          <FaStar />
        ) : value >= 9 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

rating.defaultProps = {
  color: "#f8e825",
};

export default rating;
