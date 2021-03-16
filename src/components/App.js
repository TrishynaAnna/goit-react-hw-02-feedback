import React, {Component} from 'react';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import styles from './App.module.css';


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onLeaveFeedback = el => {
        this.setState(state => ({ [el]: state[el] + 1 }));
    };

    countTotalFeedback = ()=>{
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = ()=> {
        return (
            this.state.good ? Math.round((this.state.good / this.countTotalFeedback())*100) : 0 )
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <div className={styles.contant}>
                <Section title = 'Please leave feedback'>
                <FeedbackOptions options={[Object.keys(this.state)]} onLeaveFeedback={this.onLeaveFeedback} />
                </Section>
                {this.countTotalFeedback() ? (
                    <Section title='Statistics'>
                        <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={this.countTotalFeedback}
                                    countFeedback={this.countPositiveFeedbackPercentage}/>
                    </Section>
                ) : (
                    <Notification message="No feedback given"/>)
                }
                </div>
            </>
        );
    }
}

export default App;
