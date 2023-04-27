import React, {Component} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

const initialValue = 0;

class App extends Component {
  state = {
    good: initialValue,
    neutral: initialValue,
    bad: initialValue,
  };

  onIncrement = e => {
    const { id } = e.target;
    if (id) {
      this.setState(prevState => {
        return { [id]: prevState[id] + 1 }
      })
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (
      (good / (good + neutral + bad)) * 100
    );
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.floor(this.countPositiveFeedbackPercentage());
    const eventHandler = this.onIncrement;
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={eventHandler} good={good} neutral={neutral} bad={bad}/>
        {!total ? (
          <Notification title="No feedback given. Yet." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    );
  }
}

export default App;
