import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function ImageSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {}, [currentIndex]);

  return (
    <>
      <div className="slide">
        <button
          className="testimonial-btn"
          onClick={() =>
            setCurrentIndex(
              currentIndex <= 0 ? testimonials.length - 1 : currentIndex - 1
            )
          }
        >
          <FaAngleLeft />
        </button>
        <div>
          <p className="fs-400 text-align-center">
            {testimonials[currentIndex].testimonial}
          </p>
          <h3 className="text-align-center">
            {testimonials[currentIndex].name}
          </h3>
        </div>
        <button
          className="testimonial-btn"
          onClick={() =>
            setCurrentIndex(
              currentIndex >= testimonials.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <FaAngleRight />
        </button>
      </div>
      <div>
        {testimonials.map((testimonial, index) => (
          <button
            className="testimonial-btn"
            key={testimonial.name}
            onClick={() => setCurrentIndex(index)}
          >
            {currentIndex === index ? (
              <MdOutlineRadioButtonChecked />
            ) : (
              <MdOutlineRadioButtonUnchecked />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

ImageSlider.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      testimonial: PropTypes.string.isRequired,
    })
  ).isRequired,
};
