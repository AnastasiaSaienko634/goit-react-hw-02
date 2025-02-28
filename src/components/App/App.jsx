import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import css from "./App.module.css";

function App() {
  const [typeOfReviews, setTypeOfReviews] = useState(() => {
    const savedFeedback = localStorage.getItem("save-feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("save-feedback", JSON.stringify(typeOfReviews));
  }, [typeOfReviews]);

  const updateFeedback = (type) => {
    setTypeOfReviews((prevReviews) => ({
      ...prevReviews,
      [type]: prevReviews[type] + 1,
    }));
  };

  const totalFeedback =
    typeOfReviews.good + typeOfReviews.neutral + typeOfReviews.bad;

  const positiveFeedback = () => {
    return Math.round((typeOfReviews.good / totalFeedback) * 100);
  };

  const resetFeedback = () => {
    setTypeOfReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={typeOfReviews.good}
          neutral={typeOfReviews.neutral}
          bad={typeOfReviews.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <p className={css.noFeedback}>No feedback yet</p>
      )}
    </>
  );
}

export default App;
