import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIdx = index + 1;
      return checkNum(newIdx);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIdx = index - 1;
      return checkNum(newIdx);
    });
  };

  const randomPerson = () => {
    let ran = Math.floor(Math.random() * people.length);
    if (ran === index) {
      ran = index + 1;
    }
    setIndex(checkNum(ran));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};
export default Review;
