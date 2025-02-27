import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

function App() {
  const [typeOfReviews, settypeOfReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    settypeOfReviews();
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback
        good={typeOfReviews.good}
        neutral={typeOfReviews.neutral}
        bad={typeOfReviews.bad}
      />
    </>
  );
}

export default App;
