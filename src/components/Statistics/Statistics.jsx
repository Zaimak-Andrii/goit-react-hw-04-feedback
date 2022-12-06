import Notification from 'components/Notification';
import Section from 'components/Section';
import { StatisticsPropTypes } from './Statistics.type';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Section title="Statistics">
      {total ? (
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive feedback: {positivePercentage}%</p>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}

Statistics.propTypes = StatisticsPropTypes;
