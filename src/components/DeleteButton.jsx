import { useState } from "react"

import "./DeleteButton.css"

const DeleteButton = ({ deleteComment }) => {
  return (
    <button className="button button-delete">
      <img src="../../images/icon-delete.svg" alt="Delete symbol" />
      <span className="text-delete">Delete</span>
    </button>
  )
}

export default DeleteButton