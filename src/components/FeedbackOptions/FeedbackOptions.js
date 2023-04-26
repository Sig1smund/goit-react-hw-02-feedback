import s from './feedbackOptions.module.css';
import { nanoid } from 'nanoid';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
}) {
  return (
    <div className="buttons__block">
      {Array.isArray(options) &&
        options.map(elem => {
          return (
            <>
              <button
                id={elem}
                key={elem}
                className={s.elem}
                type="button"
                onClick={onLeaveFeedback}
              >
                {elem} -{' '}
                {elem === 'good' && (
                  <span key={nanoid()} className={s.tag}>
                    {good}
                  </span>
                )}
                {elem === 'neutral' && (
                  <span key={nanoid()} className={s.tag}>
                    {neutral}
                  </span>
                )}
                {elem === 'bad' && (
                  <span key={nanoid()} className={s.tag}>
                    {bad}
                  </span>
                )}
              </button>
            </>
          );
        })}
    </div>
  );
}
