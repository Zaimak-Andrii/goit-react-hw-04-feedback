import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStateHandler = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  calcTotalFeedback() {
    return Object.values(this.state).reduce((acc, cur) => acc + cur, 0);
  }

  calcPositiveFeedback() {
    const positiveFeedback = this.state.good + this.state.neutral;
    const total = this.calcTotalFeedback();

    return total ? Math.round((100 * positiveFeedback) / total) : 0;
  }

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.changeStateHandler}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.calcTotalFeedback()}
          positivePercentage={this.calcPositiveFeedback()}
        />
      </>
    );
  }
}
