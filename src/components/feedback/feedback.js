import React, { Component } from 'react';
import Statistics from './statistics';
import Section from './section';
import FeedbackOptions from './feedbackOptions';
import Notification from './notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = e => {
    if (e.target.id === 'good') {
      return this.setState(state => ({ good: state.good + 1 }));
    } else if (e.target.id === 'neutral') {
      return this.setState(state => ({ neutral: state.neutral + 1 }));
    } else if (e.target.id === 'bad') {
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
    const eventHandler = this.onIncrement;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={eventHandler} />
        {!total ? (
          <Notification title="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    );
  }
}

export default Feedback;
