import PropTypes from 'prop-types';
import css from './feedback-options.module.css';

const FeedbackOptions = ({ addVote, option }) => {
  const optionElement = option.map((item, index) => (
    <button key={index} onClick={() => addVote(item)} className={css.btnVote}>
      {item}
    </button>
  ));
  return <div className={css.btn}>{optionElement}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  addVote: PropTypes.func.isRequired,
};
