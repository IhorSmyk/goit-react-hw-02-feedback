// import Section from 'components/Section/Section';
import { Component } from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // handleButtonClick = e => {
  //   this.setState(prev => ({
  //     [e.target.name]: prev[e.target.name] + 1,
  //   }));
  // };

  render() {
    return (
      <form className={s.form} action="submit">
        {/* <p className={c.message}>Please leave feedback</p> */}
        <ul className={s.btnList}>
          <li className={s.item}>
            <button
              name="good"
              className={s.btnGood}
              type="button"
              onClick={this.handleButtonClick}
            >
              Good
            </button>
          </li>
          <li className={s.item}>
            <button
              name="neutral"
              className={s.btnNeutral}
              type="button"
              onClick={this.handleButtonClick}
            >
              Neutral
            </button>
          </li>
          <li className={s.item}>
            <button
              name="bad"
              className={s.btnBad}
              type="button"
              onClick={this.handleButtonClick}
            >
              Bad
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default FeedbackOptions;
