import React, { Component } from "react"
import ButtonSet from "../ButtonSet"
import Statistics from "../Statistics"
import styles from "./WidgetFeedback.module.css"

class WidgetFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onClick = ({ target }) => {
    if (target.nodeName !== "BUTTON") return

    this.setState((prevState) => {
      return { [target.dataset.action]: prevState[target.dataset.action] + 1 }
    })
  }

  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotal()
      ? Math.round((this.state.good / this.countTotal()) * 100)
      : 0;
  }

  render() {
    return (
      <section className={styles.section}>
        <h2>Please leave feedback</h2>
        <ButtonSet handleClick={this.onClick} />
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotal()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    )
  }
}
export default WidgetFeedback
