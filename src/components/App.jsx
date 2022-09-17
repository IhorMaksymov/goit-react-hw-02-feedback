import React, { Component } from 'react';
import {Notification} from "./Notification/Notification";

import { Box } from "./Box/Box";
import { Section } from './Section/Section';
import { FeedbackOptions } from "./Feedback/FeedBackOptions";
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  handleIncrement = (type) => {
    this.setState((prev) => {
      return {
        [type]: prev[type] + 1,
        [type]: prev[type]  + 1,
        [type]: prev[type] + 1,
      };
    })
  }

  countTotalFeedback = () => {
    const total = Object.values(this.state); 
    return total.reduce((acc, meaning) => acc + meaning, 0);    
  };

  countPositiveFeedbackPercentage = () => {
    const goodFeedback = this.state.good;
    const sumFeedback = this.countTotalFeedback;
    return Math.round((goodFeedback / sumFeedback()) * 100);
  };

  render() {
    return (
      <Box
        pt={5}
        pb={5}
        pl={5}
        pr={5}
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        as='main'
      >
        <Section title={'Please leave feedback'}>
           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement} />
           {this.countTotalFeedback() ? (<Section title={'Statistics'} >
            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>) : (<Notification message={'There is no feedback'} />)}       
        </Section>  

      </Box>
    );
  }
};

export default App;
