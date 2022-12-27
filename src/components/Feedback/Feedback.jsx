import { Component } from 'react';
import c from './Feedback.module.css';
import { PropTypes } from 'prop-types';

export class Feedback extends Component {
  state = {
    good: this.props.defaultValueGood || 0,
    neutral: this.props.defaultValueNeutral || 0,
    bad: this.props.defaultValueBad || 0,
  };


  handleGoodFeedbackIncrement = e => {
    // let good = this.state.good;
    this.setState({ good: 1 });
    // console.log(e);
  };

  handleNeutralFeedbackIncrement = () => {};

  handleBadFeedbackIncrement = () => {};

  render() {
    console.log("state->", this.state.good);
    console.log("good->", this.good);
    return (
      <form className={c.form} action="submit">
        <p className={c.message}>Please leave feedback</p>
        <ul className={c.btnList}>
          <li className={c.item}> 
            <button
              className={c.btnGood}
              type="button"
              onClick={this.handleGoodFeedbackIncrement}
            >
              Good
            </button>
          </li>
          <li className={c.item}>
            <button
              className={c.btnNeutral}
              type="button"
              onClick={this.handleNeutralFeedbackIncrement}
            >
              Neutral
            </button>
          </li>
          <li className={c.item}>
            <button
              className={c.btnBad}
              type="button"
              onClick={this.handleBadFeedbackIncrement}
            >
              Bad
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

Feedback.propTypes = {};
