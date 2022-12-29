import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = e => {
    this.setState(prev => ({
      [e.target.name]: prev[e.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    
  }

  countPositiveFeedbackPercentage(){
    
}
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title={'Statistics:'}>
          {/* {Math.max(...this.state) === 0 ? <Notification /> : <p></p>} */}
          <Notification message={'There is no feedback'} />
          {/* <Statistics good={ } neutral={ } bad={ } total={ } positive={ }/> */}
        </Section>
      </>
    );
  }
}

export default App;
