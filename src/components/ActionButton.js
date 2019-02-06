import React from "react"

const ActionButton = props => {
  return (
    <button type="button" onClick={props.onClick}>{props.text}</button>
  )
}

export default ActionButton
