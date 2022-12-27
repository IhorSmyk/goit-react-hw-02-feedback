import { Component } from 'react';
import c from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <form className={c.form} action="submit">
        <p className={c.message}>Please leave feedback</p>
        <ul className={c.btnList}>
          <li>
            <button className={c.btnGood}>Good</button>
          </li>
          <li>
            <button className={c.btnNeutral}>Neutral</button>
          </li>
          <li>
            <button className={c.btnBad}>Bad</button>
          </li>
        </ul>
      </form>
    );
  }
}
