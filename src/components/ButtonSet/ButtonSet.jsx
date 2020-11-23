import React from "react"
import Button from "../Button"
import shortid from "shortid"
import styles from "./ButtonSet.module.css"

const feedbackOptionsBtns = [
  { action: "good", title: "Good", variant: "btn btn-good" },
  { action: "neutral", title: "Neutral", variant: "btn btn-neutral" },
  { action: "bad", title: "Bad", variant: "btn btn-bad" },
]

const ButtonSet = ({ handleClick }) => {
  return (
    <ul className={styles.buttonSet} onClick={handleClick}>
      {feedbackOptionsBtns.map((el) => (
        <li key={shortid.generate()}>
          <Button title={el.title} action={el.action} className={el.variant} />
        </li>
      ))}
    </ul>
  )
}

export default ButtonSet
