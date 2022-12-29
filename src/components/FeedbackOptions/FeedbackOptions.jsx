// import Section from 'components/Section/Section';
// import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <form className={s.form} action="submit">
      <ul className={s.btnList}>
        {options.map(btn => {
          return (
            <li className={s.item}>
              <button
                type='button'
                name={btn}
                className={s[btn]}
                onClick={onLeaveFeedback}
              >
                {btn}
              </button>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
