import Section from 'components/Section';
import { FeedbackOptionsPropTypes } from './FeedbackOptions.type';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Section title="Please leave feedback">
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key}
        </button>
      ))}
    </Section>
  );
}

FeedbackOptions.propTypes = FeedbackOptionsPropTypes;
