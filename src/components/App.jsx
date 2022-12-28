import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';

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

  render() {
    return
    (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={} onLeaveFeedback={}/>
</Section>
        <Section title={"Statistics:"}>
          
   </Section>
      </div>

    );
  }
}

export default App;
