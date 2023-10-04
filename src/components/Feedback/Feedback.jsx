import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { Container } from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleFeedbackButtonClick = mark => {
    this.setState(prevState => ({ [mark]: prevState[mark] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return;
  };

  countTotalFeedback = () =>
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedback: Math.round((prevState.good / prevState.total) * 100),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <Container>
        <Section title="Please, leave feedback!">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedbackButtonClick}
          />
        </Section>
        <Section title="Statistics:">
          {this.state.total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
