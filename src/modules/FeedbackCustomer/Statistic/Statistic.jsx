import PropTypes from 'prop-types';
import css from './statistic.module.css';

const Statistic = ({ good, neutral, bad, PositiveResultPercentage }) => {
  return (
    <div className={css.info}>
      <p>
        Good:<span className={css.text}>{good}</span>
      </p>
      <p>
        Neutral:<span className={css.text}>{neutral}</span>
      </p>
      <p>
        Bad:<span className={css.text}>{bad}</span>
      </p>
      <p>
        Positive feedback:
        <span className={css.text}>{PositiveResultPercentage}%</span>
      </p>
    </div>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  PositiveResultPercentage: PropTypes.string.isRequired,
};
