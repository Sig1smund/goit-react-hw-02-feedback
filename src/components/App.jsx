import React, {Component} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = e => {
    const { id } = e.target;
    console.log(id)
    this.setState(prevState => {
      return {[id]:prevState[id]+1}
    })
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

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={eventHandler} good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
        {!total ? (
          <Notification title="No feedback given. Yet." />
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

export default App;
