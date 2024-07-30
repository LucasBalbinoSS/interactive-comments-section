import "./DeleteButton.css"

const DeleteButton = (props) => {
  const { deleteComment, index } = props

  return (
    <button onClick={() => {
      deleteComment(index)
    }} className="button button-delete">
      <img src="../../images/icon-delete.svg" alt="Delete symbol" />
      <span className="text-delete">Delete</span>
    </button>
  )
}

export default DeleteButton