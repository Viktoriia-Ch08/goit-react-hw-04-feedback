import { ButtonWrapper, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ButtonWrapper>
      {options.map(option => (
        <Button
          key={option}
          className={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  </>
);

export default FeedbackOptions;
