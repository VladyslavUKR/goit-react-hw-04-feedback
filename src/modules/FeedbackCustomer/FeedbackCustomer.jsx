import { useState } from 'react';
import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const FeedbackCustomer = () => {
  const [vote, setVote] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = vote;

  const totalVote = good + neutral + bad;

  const countPositiveFeedbackPercentage = prevState => {
    if (!totalVote) {
      return 0;
    }
    const value = vote[prevState];
    const votesPercentage = Number((value / totalVote) * 100).toFixed(2);

    return votesPercentage;
  };

  const addVote = name => {
    setVote(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const arrayOptionBtn = Object.keys(vote);
  const PositiveResultPercentage = countPositiveFeedbackPercentage('good');

  return (
    <>
      <Section
        tittle={'Please leave feedback'}
        text={'The total number of people who passed the survey:'}
        totalResultFeedback={totalVote}
      >
        <FeedbackOptions addVote={addVote} option={arrayOptionBtn} />
        {totalVote ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            PositiveResultPercentage={PositiveResultPercentage}
          />
        ) : (
          <Notification tittle={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};

export default FeedbackCustomer;
/*
class FeedbackCustomer extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calcTotalResultFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = prevState => {
    const totalVote = this.calcTotalResultFeedback();
    if (!totalVote) {
      return 0;
    }
    const value = this.state[prevState];
    const votesPercentage = Number((value / totalVote) * 100).toFixed(2);

    return votesPercentage;
  };

  addVote = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const arrayOptionBtn = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalResultFeedback = this.calcTotalResultFeedback();
    const PositiveResultPercentage =
      this.countPositiveFeedbackPercentage('good');

    return (
      <>
        <Section
          tittle={'Please leave feedback'}
          text={'The total number of people who passed the survey:'}
          totalResultFeedback={totalResultFeedback}
        >
          <FeedbackOptions addVote={this.addVote} option={arrayOptionBtn} />
          {totalResultFeedback ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              PositiveResultPercentage={PositiveResultPercentage}
            />
          ) : (
            <Notification tittle={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}

export default FeedbackCustomer;
*/
