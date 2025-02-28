import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <ul className={css.buttonList}>
      <li>
        <button
          className={css.buttonItem}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.buttonItem}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.buttonItem}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
      </li>
      <li>
        {totalFeedback > 0 ? (
          <button
            className={css.buttonItemReset}
            onClick={() => resetFeedback()}
          >
            Reset
          </button>
        ) : (
          <></>
        )}
      </li>
    </ul>
  );
}
