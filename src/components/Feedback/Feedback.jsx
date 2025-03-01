import css from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <>
      <p className={css.reviewsItemGood}>Good: {good}</p>
      <p className={css.reviewsItemNeutral}>Neutral: {neutral} </p>
      <p className={css.reviewsItemBad}>Bad: {bad}</p>
      <p className={css.reviewsItemTotal}>Total: {totalFeedback}</p>
      <p className={css.reviewsItemPositive}>Positive: {positiveFeedback}%</p>
    </>
  );
}
