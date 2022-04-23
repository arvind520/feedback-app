import React from "react";

const FeedbackStats = ({ feedback }) => {
  //Calculating average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  // default value of acc

  average = average.toFixed(1).replace(/[.,]0$/, "");
  //fixed to one decimal place   // expression to not to show zero on whole number

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
