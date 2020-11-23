import React from "react"
import styles from "./Button.module.css"

const Button = ({ title, action, className }) => {
  return (
    <button type="button" data-action={action} className={className}>
      {title}
    </button>
  )
}

export default Button
