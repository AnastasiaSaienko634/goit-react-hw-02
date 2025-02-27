import css from "./Options.module.css";

export default function Options({ updateFeedback }) {
  return (
    <ul className={css.buttonList}>
      <li>
        <button onClick={updateFeedback}>Good</button>
      </li>
      <li>
        <button onClick={updateFeedback}>Neutral</button>
      </li>
      <li>
        <button onClick={updateFeedback}>Bad</button>
      </li>
      <li>
        <button>Reset</button>
      </li>
    </ul>
  );
}
