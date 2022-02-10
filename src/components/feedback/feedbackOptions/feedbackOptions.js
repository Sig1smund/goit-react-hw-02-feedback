import s from './feedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className="buttons__block">
      <button
        id="good"
        className={s.good}
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        id="neutral"
        className={s.neutral}
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        id="bad"
        className={s.bad}
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}
