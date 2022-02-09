import React, { Component } from 'react';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = e => {
    if (e.target.className === 'button__good') {
      return this.setState(state => ({ good: state.good + 1 }));
    } else if (e.target.className === 'button__neutral') {
      return this.setState(state => ({ neutral: state.neutral + 1 }));
    } else if (e.target.className === 'button__bad') {
      return this.setState(state => ({ bad: state.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    );
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="feedback__block">
        <div className="buttons__block">
          <h1>Please leave feedback</h1>
          <button
            className="button__good"
            type="button"
            onClick={this.onIncrement}
          >
            Good
          </button>
          <button
            className="button__neutral"
            type="button"
            onClick={this.onIncrement}
          >
            Neutral
          </button>
          <button
            className="button__bad"
            type="button"
            onClick={this.onIncrement}
          >
            Bad
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

export default Feedback;
