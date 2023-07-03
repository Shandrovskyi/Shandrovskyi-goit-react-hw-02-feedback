import React, { Component } from 'react';
import css from './feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div className="feedback-container">
        <h1 className="page-title">Please leave feedback</h1>
        <div className={css.buttons}>
          <button className={css.clickButtons} onClick={this.goodClick}>
            Good
          </button>
          <button className={css.clickButtons} onClick={this.neutralClick}>
            Neutral
          </button>
          <button className={css.clickButtons} onClick={this.badClick}>
            Bad
          </button>
          <h2 className="statistics">Statistics</h2>
          <ul className="feedback-quantity-list">
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}
