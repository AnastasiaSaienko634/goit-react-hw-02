import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad }) {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral} </p>
      <p>Bad: {bad}</p>
    </>
  );
}
