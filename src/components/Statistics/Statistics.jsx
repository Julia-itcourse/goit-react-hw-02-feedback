import React from "react"
import Notification from "../Notification"

const Statistics = ({ total, good, bad, neutral, positivePercentage }) => {
  return (
    <>
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification />
      )}
    </>
  )
}

export default Statistics
