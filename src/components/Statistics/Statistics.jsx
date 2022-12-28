import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <ul className={s.feedBack}>
        <li>
          <p>{good}</p>
        </li>
        <li>
          <p>{neutral}</p>
        </li>
        <li>
          <p>{bad}</p>
        </li>
      </ul>
      <ul className={s.stats}>
        <li>
          <p>{total}</p>
        </li>
        <li>
          <p>{positive}</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
