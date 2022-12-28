import { Component } from 'react';
import c from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good:  0,
    neutral:  0, 
    bad: 0, 
  };

  handleButtonClick = e => {
    this.setState(prev => ({
      [e.target.name]: prev[e.target.name] + 1,
    }));
  };

  render() {
    return (
      <form className={c.form} action="submit">
        <p className={c.message}>Please leave feedback</p>
        <ul className={c.btnList}>
          <li className={c.item}>
            <button
              name="good"
              className={c.btnGood}
              type="button"
              onClick={this.handleButtonClick}
            >
              Good
            </button>
          </li>
          <li className={c.item}>
            <button
              name="neutral"
              className={c.btnNeutral}
              type="button"
              onClick={this.handleButtonClick}
            >
              Neutral
            </button>
          </li>
          <li className={c.item}>
            <button
              name="bad"
              className={c.btnBad}
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
