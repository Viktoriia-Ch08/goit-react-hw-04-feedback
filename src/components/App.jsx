import { useEffect, useState } from 'react';
import { Container } from 'components/App.styled';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleFeedbackButtonClick = mark => {
    switch (mark) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
    return;
  };

  useEffect(() => {
    setTotal(good + bad + neutral);
  }, [good, neutral, bad]);

  useEffect(() => {
    good && setPositive(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <Container>
      <Section title="Please, leave feedback!">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedbackButtonClick}
        />
      </Section>
      <Section title="Statistics:">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
